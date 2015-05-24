import React from 'react'
import Transmit from 'react-transmit'
import request from 'superagent-bluebird-promise'
import {RouteHandler} from 'react-router'
import Phrase from '../Phrase/Phrase.jsx'

class App extends React.Component {
    static propTypes = {}
    static contextTypes = { router: React.PropTypes.func }
    render() {
        let {top15} = this.props
        return (
            <div className="App">
                最新十五筆請教條：
                <ol>
                { top15.map((p)=>{
                    let { 種類, 外語語言, 外語資料, 語言腔口, 外語請教條項目編號 } = p
                    return <li key={ 外語請教條項目編號 }>
                        { 種類 } - { 外語語言 } - { 外語資料 } - { 語言腔口 }
                        <br />
                        <Phrase 平臺項目編號={ 外語請教條項目編號 } />
                    </li>
                }) }
                </ol>
            </div>
        )
    }
}

const ServerURL = 'http://127.0.0.1:8000'
export default Transmit.createContainer(App, {
    queries: {
        top15() {
            return request.get(ServerURL + "/平臺項目列表/看列表").then(
                (res) => res.body.列表
            ).catch(()=>[])
        }
    }
})
