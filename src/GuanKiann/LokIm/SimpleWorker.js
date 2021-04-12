(function (root, factory) {
  const EXPORT_NAME = 'SimpleWorker';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['q'], (Q) =>
      // Also create a global in case some scripts
      // that are loaded still are looking for
      // a global even when an AMD loader is in use.
      (root[EXPORT_NAME] = factory(Q)));
  } else {
    // Browser globals
    root[EXPORT_NAME] = factory(root.Q);
  }
}(this, (Q) => {
  const workerSource = (function __workerEnv() {
    const functionRegExp = /^function\s*([a-zA-Z0-9_$]*)\s*\(([a-zA-Z0-9_$,\s]*)\)\s*[^{]*{\s*([\d\D]*)\s*}[^}]*$/gim;

    function postResult(result) {
      self.postMessage(result);
      self.close();
    }

    function deserializeFunction(functionText) {
      const functionParts = functionRegExp.exec(functionText);
      const functionArgs = functionParts[2].split(/\s*,\s*/);
      const functionBody = functionParts[3];

      return Function.apply(null, functionArgs.concat(functionBody));
    }

    self.onmessage = function (evt) {
      const commandObject = evt.data;
      let invokeFn;
      let invokeArguments;
      let invokeResult;

      switch (commandObject.command.toLowerCase()) {
        case 'import':
          importScripts.apply(null, commandObject.arguments);
          break;
        case 'invoke':
          invokeFn = deserializeFunction(commandObject.arguments[0]);
          invokeArguments = commandObject.arguments.slice(1);

          invokeResult = invokeFn.apply(this, invokeArguments);

          // The result is a Promise-like object. Wait until it's resolved.
          if (invokeResult != null && typeof invokeResult.then === 'function') {
            invokeResult.then(postResult);
          }
          // Has immediate value. Post back.
          else {
            postResult(invokeResult);
          }
          break;
      }
    };
  }).toString().replace(/^[^{]*{\s*([\d\D]*)\s*}[^}]*$/, '$1');
  const workerBlob = new Blob([workerSource]);
  const workerUrl = window.URL.createObjectURL(workerBlob);

  // Transform relative script URLs into absolute URLs
  function getScriptUrl(scriptPath) {
    const absoluteUrlRegExp = /^https?:/;
    if (absoluteUrlRegExp.test(scriptPath)) {
      return scriptPath;
    }

    return `${location.protocol}//${location.hostname
    }${location.port && `:${location.port}`}/${scriptPath}`;
  }

  return function (workerFunction, imports) {
    const importUrls = (imports || []).map(getScriptUrl);

    return function () {
      const worker = new Worker(workerUrl);
      const deferred = Q.defer();

      worker.addEventListener('message', (evt) => {
        deferred.resolve(evt.data);
      }, false);

      worker.addEventListener('error', (errorEvent) => {
        deferred.reject(errorEvent);
      }, false);

      worker.postMessage({
        command: 'import',
        arguments: importUrls,
      });

      worker.postMessage({
        command: 'invoke',
        arguments: [workerFunction.toString()]
          .concat([].slice.call(arguments)),
      });

      return deferred.promise;
    };
  };
}));
