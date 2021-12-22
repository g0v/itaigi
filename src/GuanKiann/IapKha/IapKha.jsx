import React from 'react';
import { Link } from 'react-router';
import './IapKha.css';
export default class IapKha extends React.Component {
  render() {
    return (
        <footer className='ui vertical padded footer segment inverted'>
        <div className="ui center aligned container">
        <div className='ui stackable grid'>
          <section className="seven wide column left aligned">
            <h4>iTaigi</h4>
            <div>
            <p>iTaigi 是 <a href="https://g0v.tw/" className="text-yellow">g0v 零時政府</a>專案「萌典」的延伸專案，想知道一個詞的台語怎麼說，來這裡查就對了！甚麼都可以查，但不一定查得到，查不到時可以發問，或者自己發明台語講法貢獻給大家，簡單說就是「自己的辭典自己編」。</p>
            <p>程式授權 MIT，辭典內容CC0｢不保留權利｣授權。Powered by <a href="https://getbootstrap.com" className="text-yellow">BootStrap 5</a>.</p>
            </div>
          </section>
          <section className="three wide column left aligned">
            <h4>條款</h4>
            <ul className="list-unstyled padding-s-0">
              <li><Link className='item' to='/about' className="text-yellow">關於本站</Link></li>
              <li><Link className='item' to='/hokbu' className="text-yellow">服務條款</Link></li>
              <li><Link className='item' to='/unsu' className="text-yellow">隱私權條款</Link></li>
            </ul>
          </section>
          <section className="three wide column left aligned">
            <h4>站內服務</h4>
            <ul className="list-unstyled padding-s-0">
              <li><Link className='item' to='/k' className="text-yellow">怎樣講</Link></li>
              <li><Link className='item' to='/name' className="text-yellow">你的名字</Link></li>
              <li><Link className='item' to='/tsu-te' className="text-yellow">台語寶鑑</Link></li>
            </ul>
          </section>
          <section className="three wide column left aligned">
            <h4>聯絡我們</h4>
            <ul className="list-unstyled padding-s-0">
              <li><a className='item' target="_blank" href='https://www.facebook.com/ukauitaigi/' className="text-yellow">FB</a></li>
              <li><a className='item' target="_blank" href='https://github.com/g0v/itaigi' className="text-yellow">GitHub</a></li>
              <li><a className='item' target="_blank" href='https://g0v-tw.slack.com/messages/itaigi/' className="text-yellow">Slack</a></li>
            </ul>
          </section>
        </div>
        </div>
      </footer>
    );
  }
}

