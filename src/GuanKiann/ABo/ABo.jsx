
import React from 'react'
import Transmit from 'react-transmit'
import superagent from 'superagent-bluebird-promise'
import TingJip from '../../GuanKiann/BingTsheh/TingJip'
import Debug from 'debug'

var debug = Debug('itaigi:ABo')

class ABo extends React.Component {
  componentWillMount () { this.props.setQueryParams(this.props) }
  componentWillReceiveProps (nextProps) {
    if (nextProps.後端網址 === this.props.後端網址) return
    this.props.setQueryParams(nextProps)
  }
  
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
    	console.log(this.props.csrftoken)
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
		superagent.post(this.props.後端網址 + '平臺項目/加外語')
		  .withCredentials()
		  .set('Content-Type', 'application/x-www-form-urlencoded')
		  .set('X-CSRFToken',this.props.csrftoken)
 		  .send(外語內容)
 		  .then(({body}) => (this.加外語新詞文本(body['平臺項目編號'])))
          .catch(({res}) => (this.加外語新詞文本(JSON.parse(res.text)['平臺項目編號'])) )
		}
	}
	加外語新詞文本 (外語項目編號) {
		console.log('外語項目編號')
		console.log(外語項目編號)
		var 建議新詞文本 = {
				'外語項目編號':外語項目編號,
				'來源':JSON.stringify("自己"),
				'種類':'字詞',
				'語言腔口':'臺語',
				'著作所在地':'臺灣',
				'著作年':new Date().getFullYear().toString(),
				'文本資料':this.state.漢字,
				}
        if (this.state.音標 !== '') {
				建議新詞文本['屬性']=JSON.stringify({'音標':this.state.音標})
				}
				else{
				建議新詞文本['屬性']=JSON.stringify({})
				}
				
		superagent.post(this.props.後端網址 + '平臺項目/加外語新詞文本')
		  .withCredentials()
		  .set('Content-Type', 'application/x-www-form-urlencoded')
		  .set('X-CSRFToken',this.props.csrftoken)
 		  .send(建議新詞文本)
 		  .then(({body}) => (console.log('sui2')))
          .catch((a) => (console.log(a)))
  }
 
  render () {
	debug('this.props.csrftoken %s %s',this.props.csrftoken,this.props.後端網址)
    return (
        <div className='ui segment'>
          <TingJip 後端網址={this.props.後端網址}/>
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

export default Transmit.createContainer(ABo, {
  queries: {
    csrftoken ({後端網址}) {
    debug('後端網址 %s',後端網址)
      if(!後端網址) return new Promise((cb)=>cb(''))
      return superagent.get(後端網址 + 'csrf/看')
		.withCredentials()
        .then((body) => body['csrftoken'])
    }
  }
})
