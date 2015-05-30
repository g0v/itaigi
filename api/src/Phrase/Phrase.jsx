import React from 'react'
import Transmit from 'react-transmit'
import request from 'superagent-bluebird-promise'
import {RouteHandler} from 'react-router'
import Details from '../Phrase/Details.jsx'
const ServerURL = 'http://127.0.0.1:8000'

class 詳細內容 extends React.Component {
    static propTypes = { 平臺項目編號: React.PropTypes.string }
    static contextTypes = { router: React.PropTypes.func }
    componentWillMount() { this.props.setQueryParams(this.props) }
    render() {
        let {詳細內容, 平臺項目編號} = this.props
        let {屬性內容} = 詳細內容
        return <mark key={平臺項目編號}>{ 屬性內容.音標 }</mark>
    }
}

export default Transmit.createContainer(詳細內容, {
    queries: {
        詳細內容 ({平臺項目編號}) {
            const def = { 屬性內容: {} }
            if (!平臺項目編號) return new Promise((cb)=>cb(def))
            return request.get(ServerURL + "/平臺項目/看詳細內容?平臺項目編號=" + 平臺項目編號).then(
                (res) => res.body.錯誤 ? def : res.body
            ).catch(()=>[])
        }
    }
});

class Phrase extends React.Component {
    static propTypes = { 平臺項目編號: React.PropTypes.string }
    static contextTypes = { router: React.PropTypes.func }
    componentWillMount() { this.props.setQueryParams(this.props) }
    render() {
        let {對應內容} = this.props
        let {新詞影音, 新詞文本} = 對應內容
        return (
            <div className="Phrase"><ul>
                { 新詞文本.map((p)=>{
                    let { 新詞文本項目編號, 文本資料 } = p
                    return <li key={ 新詞文本項目編號 }>
                        { 文本資料 }
                        <Details 平臺項目編號={新詞文本項目編號} />
                    </li>
                }) }
            </ul></div>
        )
    }
}

export default Transmit.createContainer(Phrase, {
    queries: {
        對應內容 ({平臺項目編號}) {
            const def = { 新詞文本: [], 新詞影音: [] }
            if (!平臺項目編號) return new Promise((cb)=>cb(def))
            return request.get(ServerURL + "/平臺項目/看對應內容?平臺項目編號=" + 平臺項目編號).then(
                (res) => res.body.錯誤 ? def : res.body
            ).catch(()=>[])
        }
    }
})
