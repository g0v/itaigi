
import React from 'react'
import Router, {RouteHandler} from 'react-router'

class App extends React.Component {
  render () {
    return <RouteHandler {...this.props}/>
  }
}

export default App
