import React, { Component, PropTypes } from 'react';

class 複製例句鈕仔 extends Component {
  constructor(props) {
    super(props);
    this.state = { isCopying: false };
  }

  複製例句() {
    let { 漢字, 臺羅, 華語 } = this.props;
    this.setState({ isCopying: true });
    let textField = document.createElement('textarea');
    textField.innerText = `${漢字}
${臺羅}
${華語}`;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();

    let clock = setTimeout(()=> {
        this.setState({ isCopying: false });
      }, 1000);
  }

  render() {
    return (
      <span>
        <button onClick={this.複製例句.bind(this)}
          className="ui compact icon button">
            <i className="copy icon"/>
        </button>
        { this.state.isCopying &&
          <span>複製成功！</span>
        }
      </span>
    );
  }
}

複製例句鈕仔.propTypes = {
    className: PropTypes.string,
    漢字: PropTypes.string,
    臺羅: PropTypes.string,
    華語: PropTypes.string,
  };

export default 複製例句鈕仔;
