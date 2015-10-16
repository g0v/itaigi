
import React from 'react'
import Transmit from 'react-transmit'

class ABo extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      漢字: this.props.漢字 || '',
      音標: this.props.音標 || ''
    }
  }
  
  handle漢字KeyUp (evt) {
    var q = evt.target.value
    this.setState({漢字:q})
  }
  
  handle音標KeyUp (evt) {
    var q = evt.target.value
    this.setState({音標:q})
  }
  
  handleSubmit (evt) {
    if (this.state.漢字 !== '') {
      console.log(this.state.漢字)
      console.log(this.state.音標)
    }
  }
 
  render () {
    return (
        <div className='ui segment'>
          <div className='abo ui input'>
            <input placeholder='漢字' type='text'
              onKeyUp={this.handle漢字KeyUp.bind(this)}/>
          </div>
          <div className='abo ui input'>
            <input placeholder='台羅音標' type='text'
              onKeyUp={this.handle音標KeyUp.bind(this)}/>
          </div>
          <div className='abo ui input'>
            <input placeholder='提供者' type='text'/>
          </div>
          <button
            className='ui button'
            onClick={this.handleSubmit.bind(this)}>送出</button>
        </div>
      )
  }
}

export default Transmit.createContainer(ABo, { queries: {} })
