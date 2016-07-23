import React from 'react';
import Transmit from 'react-transmit';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class SangTshut extends React.Component {

  render() {
    return (
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal.bind(this)}
          style={customStyles} >

          <h2 ref="subtitle">已上傳！</h2>
          <div>收到！在「我很會」等待講法中......<br/><br/></div>
          <button
            onClick={this.props.closeModal.bind(this)}
            className="ui button"
            style={{ float: 'right' }}>好呦</button>
        </Modal>
    );
  }
}

export default Transmit.createContainer(SangTshut, {});
