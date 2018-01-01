import React from 'react';
import FacebookProvider, { Comments } from 'react-facebook';

export default class 留言板 extends React.Component {
  render() {
    return (
      <FacebookProvider appId="174108146521045">
        <Comments width="100%"/>
      </FacebookProvider>
    );
  }
}
