
import React from 'react'
import Transmit from 'react-transmit'
import superagent from 'superagent-bluebird-promise'

class TingJip extends React.Component {
  componentWillMount () { this.props.setQueryParams(this.props) }
  componentWillReceiveProps (nextProps) {
    if (nextProps.後端網址 === this.props.後端網址) return
    this.props.setQueryParams(nextProps)
  }
  
  render () {
    const {fbLoginCode} = this.props
    console.log('csrftoken')
    console.log(fbLoginCode)
    return (
        <div className='ui segment'>
        
        
          <a title="Facebook"  
             href="javascript:allauth.facebook.login('', 'authenticate', 'login')">Facebook</a>
           <textarea></textarea>
           
        </div>
      )
  }
}

export default Transmit.createContainer(TingJip, {
  queries: {
    csrftoken ({後端網址}) {
      return superagent.get(後端網址 + 'csrf/看')
		.withCredentials()
        .then((body) => body['csrftoken'])
    },
    fbLoginCode ({後端網址}) {
      return superagent.get(後端網址 + 'FB登入SDK')
		.withCredentials()
        .then((body) => body.text.trim())
    }
  }
})
