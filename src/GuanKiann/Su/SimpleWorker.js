(function (root, factory) {
    var EXPORT_NAME = 'SimpleWorker';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['q'], function (Q) {
            // Also create a global in case some scripts
            // that are loaded still are looking for
            // a global even when an AMD loader is in use.
            return (root[EXPORT_NAME] = factory(Q));
        });
    } else {
        // Browser globals
        root[EXPORT_NAME] = factory(root.Q);
    }
}(this, function (Q) {
    var workerSource = (function __workerEnv() {
            var functionRegExp = /^function\s*([a-zA-Z0-9_$]*)\s*\(([a-zA-Z0-9_$,\s]*)\)\s*[^{]*{\s*([\d\D]*)\s*}[^}]*$/gim;

            function postResult (result) {
                self.postMessage(result);
                self.close();
            }

            function deserializeFunction(functionText) {
                var functionParts = functionRegExp.exec(functionText),
                    functionArgs = functionParts[2].split(/\s*,\s*/),
                    functionBody = functionParts[3];

                return Function.apply(null, functionArgs.concat(functionBody));
            }

            self.onmessage = function (evt) {
                var commandObject = evt.data,
                    invokeFn,
                    invokeArguments,
                    invokeResult;

                switch (commandObject.command.toLowerCase()) {
                    case "import":
                        importScripts.apply(null, commandObject.arguments);
                    break;
                    case "invoke":
                        invokeFn = deserializeFunction(commandObject.arguments[0]);
                        invokeArguments = commandObject.arguments.slice(1);

                        invokeResult = invokeFn.apply(this, invokeArguments);

                        // The result is a Promise-like object. Wait until it's resolved.
                        if (invokeResult != null && typeof invokeResult.then == 'function') {
                            invokeResult.then (postResult)
                        }
                        // Has immediate value. Post back.
                        else
                        {
                            postResult(invokeResult)
                        }
                    break;
                }
            };
        }).toString().replace(/^[^{]*{\s*([\d\D]*)\s*}[^}]*$/,'$1'),
        workerBlob = new Blob([workerSource]),
        workerUrl = window.URL.createObjectURL(workerBlob);

    // Transform relative script URLs into absolute URLs
    function getScriptUrl(scriptPath) {
        var absoluteUrlRegExp = /^https?:/;
        if (absoluteUrlRegExp.test(scriptPath)) {
            return scriptPath;
        }

        return location.protocol + "//" + location.hostname +
            (location.port && ":" + location.port) + "/" + scriptPath;
    }

    return function (workerFunction, imports) {
        var importUrls = (imports || []).map(getScriptUrl);

        return function () {
            var worker = new Worker(workerUrl),
                deferred = Q.defer();

            worker.addEventListener('message', function (evt) {
                deferred.resolve(evt.data);
            }, false);

            worker.addEventListener('error', function (errorEvent) {
                deferred.reject(errorEvent);
            }, false);

            worker.postMessage({
                command: "import",
                arguments: importUrls
            });

            worker.postMessage({
                command: "invoke",
                arguments: [workerFunction.toString()]
                    .concat([].slice.call(arguments))
            });

            return deferred.promise;
        };
    };
}));
