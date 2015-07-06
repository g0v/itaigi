
import React from 'react'
import Router from 'react-router'

export default Component => React.createClass({
  mixins: [ Router.Navigation ],

  routerWillEnter(router, nextState, route) {
    if (this.refs.component && this.refs.component.routerWillEnter) {
      this.refs.component.routerWillEnter(router, nextState, route);
    }
  },

  routerWillLeave(router, nextState, route) {
    if (this.refs.component && this.refs.component.routerWillLeave) {
      this.refs.component.routerWillLeave(router, nextState, route);
    }
  },

  render() {
    var navigationMixinApi = {
      transitionTo : this.transitionTo,
      replaceWith  : this.replaceWith,
      goBack       : this.goBack,
      makePath     : this.makePath,
      makeHref     : this.makeHref,
    };

    return <Component ref="component" {...this.props} {...navigationMixinApi} routerNavigation={navigationMixinApi} />;
  }
})
