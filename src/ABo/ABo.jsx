
import React from 'react'
import Transmit from 'react-transmit'

class ABo extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      華語關鍵字: this.props.華語關鍵字 || '',
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
    	console.log(this.state.華語關鍵字)
      console.log(this.state.漢字)
      console.log(this.state.音標)
		var 外語內容 = {
				'來源':JSON.stringify("自己"),
				'種類':'字詞',
				'語言腔口':'臺語',
				'著作所在地':'臺灣',
				'著作年':new Date().getFullYear().toString(),
				'屬性':'{}',
				'外語語言':'華語',
				'外語資料':this.state.華語關鍵字,
				};
				// `外語內容` post to  url: 網址+'平臺項目/加外語請教條',
				/*var 外語請教條項目編號=外語結果['平臺項目編號']
				
		var 建議新詞文本 = {
				'外語請教條項目編號':外語請教條項目編號,
				'來源':JSON.stringify("自己"),
				'種類':'字詞',
				'語言腔口':'閩南語',
				'著作所在地':'臺灣',
				'著作年':new Date().getFullYear().toString(),
				'文本資料':this.state.漢字,
				};
        if (this.state.音標 !== '') {
				建議新詞文本['屬性']=JSON.stringify({'音標':this.state.音標})
				}
				else{
				建議新詞文本['屬性']=JSON.stringify({})
				}
				*/
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
