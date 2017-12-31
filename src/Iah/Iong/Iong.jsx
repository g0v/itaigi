import React from 'react';
import { Link } from 'react-router';
import { list } from './config';
import './Iong.css';

export default class Iong extends React.Component {
  render() {
    return (
    <div className='main container'>
      <div className='iong'>
        <div className='ui stackable cards'>
        {
          list.map((cate)=>
            <div className='card' key={cate.category}>
              <div className='content'>
                <h3>{cate.category}</h3>
                <div className='padded'>
                  {cate.links.map((_link)=>
                    <p key={_link.link}>
                    <Link to={_link.link}
                      target='_blank'>
                      {_link.title}
                    </Link>
                    </p>)
                  }
                </div>
              </div>
            </div>
            )
        }
        </div>
        <div className="fb-comments" data-order-by="reverse_time" data-numposts="5" data-width='100%'></div>
      </div>
    </div>
    );
  }
}
