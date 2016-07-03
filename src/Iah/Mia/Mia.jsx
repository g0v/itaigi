import React from 'react';
import Transmit from 'react-transmit';

class Mia extends React.Component {
  propTypes = {
    params: React.PropTypes.object,
    handleKong: React.PropTypes.func,
  }
  render() {
    return (
    <div className='main container'>
      <div className='mia'>
        <div className='ui forum segment'>
          還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴，還不賴。 還不賴，還不賴，還不賴，還不賴。
        </div>
      </div>
    </div>
    );
  }
}

export default Transmit.createContainer(Mia, {});
