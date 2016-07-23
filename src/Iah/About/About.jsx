import React from 'react';
import { Link } from 'react-router';
import Transmit from 'react-transmit';

class About extends React.Component {
  render() {
    return (
    <div className='main container'>
      <div className='about'>
        <div className='ui very padded vertical segment'>
        <p className='ui header large'>iTaigi 是 g0v 零時政府專案<a target='_blank' href='https://moedict.tw'>「萌典」</a>的延伸專案，想知道一個詞的台語怎麼說，來這裡查就對了，甚麼都可以查，但不一定查得到，查不到時可以發問，或者自己發明台語講法貢獻給大家，簡單說就是「自己的辭典自己編」。以下簡單說明用法：</p>
        </div>
        <div className='ui very padded vertical segment'>
        <p className='ui header large'>在<Link to='/t'>「怎樣講」</Link>查詢框中輸入想查的「華語詞」，按下「台語怎麼講」，會出現各種講法，每一個對應的台語詞是一張獨立的卡片，點選詞目旁邊的 play 鍵可以聽發音，並顯示出處及該台語詞其他的對應華語。</p>
        <p className='ui header large'>如果覺得這個講法不錯，可以點「按呢講好」來投贊成票，如果覺得這個翻譯不是很妥當，可以點「按呢怪怪」投疑慮票，這些詞彙的排列順序會依投票結果來呈現，使用者可參考投票結果選用詞彙。</p>
        </div>
        <div className='ui very padded vertical segment'>
        <p className='ui header large'>如果呈現出來的講法你都不滿意，要貢獻其他講法，請在「閣會使按呢講，我來做伙添」提供你的創意，請在漢字欄填入台語漢字、臺羅欄填入拼音，如果不熟悉台語漢字及拼音，可以用你的方式盡可能表達你的講法，會有正規化團隊幫您修改成教育部公告的漢字和臺羅，完成正規化後即可出現在前端供大家投票。</p>
        <p className='ui header large'>也有可能你查的華語詞沒有對應的台語，這時你可以點選「求講法」，這個詞就會出現在<Link to='/t'>「我很會」</Link>區域，等待其他使用者提供講法。或者你自己立刻就可以提供講法，請直接在「我會曉，會使按呢講」底下填入。</p>
        </div>
        <div className='ui very padded vertical segment'>
        <p className='ui header large'>本專案持續進行中，固定於雙月一次的萌典松一起工作，期間也會不定期舉辦台語松，歡迎各方好手加入愛台語的行列，一起講台語、玩台語，不管是不是工程師都可以參與喔！</p>
        </div>
        <div className='ui very padded vertical segment'>
        <p className='ui header large'>歡迎台語達人到「我很會」區域，貢獻你的台語創意，為大家想出各種台語講法！</p>
        <p className='ui header large'>除了一般使用者，我們也需要熟悉教育部台語漢字和臺羅的朋友，一起加入正規化團隊，有意者請私訊 <Link target='_blank' to='https://www.facebook.com/ukauitaigi'>iTaigi FB 粉專</Link></p>
        </div>
      </div>
    </div>
    );
  }
}

About.propTypes = {
  params: React.PropTypes.object,
  handleKong: React.PropTypes.func,
};

export default Transmit.createContainer(About, {});
