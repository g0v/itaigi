import React from 'react';
import { Link } from 'react-router';
import {list} from './config';

export default class Iong extends React.Component {
  render() {
    return (
    <div className='main container'>
      <div className='iong ui container'>
        <div className='ui fluid vertical menu'>
        {
          list.map((cate)=>
            <div className="item">
            <h3>{cate.category}</h3>
            <div className="padded">
            {cate.links.map((_link)=>
              <p>
              <Link to={_link.link} target="_blank">{_link.title}</Link>
              </p>)
            }
            </div>
            </div>
            )
        }
        </div>
      </div>
    </div>
    );
  }
}
