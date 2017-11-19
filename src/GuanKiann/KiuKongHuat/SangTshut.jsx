import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    zIndex: '200',
  },
  content: {
    maxWidth: '400px',
    maxHeight: '180px',
    margin: 'auto',
  },
};

export default class SangTshut extends React.Component {

  render() {
    return (
        <Modal
          contentLabel='SangTshut'
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
