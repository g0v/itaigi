import React from 'react';
import Transmit from 'react-transmit';

class Mia extends React.Component {
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

Mia.propTypes = {
  params: React.PropTypes.object,
  查怎樣講: React.PropTypes.func,
};

export default Transmit.createContainer(Mia, {});
