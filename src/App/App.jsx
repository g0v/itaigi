
import React from 'react'
import Router, {RouteHandler} from 'react-router'

class App extends React.Component {

  constructor () {
    super()
  }
  render () {
    return (
        <div className='app background'>
          <RouteHandler {...this.props}/>
        </div>
      )
  }
}

export default App
