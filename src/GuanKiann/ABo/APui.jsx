import React from 'react';
import Transmit from 'react-transmit';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    zIndex: '200',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class APui extends React.Component {

  render() {
    return (
        <Modal
          contentLabel='APui'
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal.bind(this)}
          style={customStyles} >

          <h2 ref="subtitle">已上傳！</h2>
          <div>台語阿肥會先幫忙改成正規用字再送出喔<br/><br/></div>
          <button
            onClick={this.props.closeModal.bind(this)}
            className="ui button"
            style={{ float: 'right' }}>好呦</button>
        </Modal>
    );
  }
}

export default Transmit.createContainer(APui, {});
