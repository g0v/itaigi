import React from 'react';
import Transmit from 'react-transmit';
import { Link } from 'react-router';
import Tshue from '../../GuanKiann/Tshue/Tshue';
import './Lun.css';

class Lun extends React.Component {
  render() {
    if (!this.props.params.k) {
      return (
      <div className='main container'>
        <div className='lun content'>
          <div className='ui forum segment'>
            <iframe src='https://g0v.hackpad.com/coding-iTaigi-6ARoXv4DSQo'/>
          </div>
        </div>
      </div>
      );
    }

    return (
    <div className='main container'>
      <nav className='navigation'>
        <Tshue
          defaultValue={this.props.params.k}
         查怎樣講={this.props.查怎樣講.bind(this)}
         {...this.props}/>
      </nav>
      <div className='lun content'>
        <div className='ui forum segment'>
          來討論
        </div>
      </div>
      <aside className='right column'>
        <div className='ui segment'>
          <Link to='kong' params={{ k: this.props.params.k }}> 怎樣講
          </Link>
        </div>
      </aside>
    </div>
    );
  }
}

Lun.propTypes = {
  params: React.PropTypes.object,
  查怎樣講: React.PropTypes.func,
};

export default Transmit.createContainer(Lun, {});
