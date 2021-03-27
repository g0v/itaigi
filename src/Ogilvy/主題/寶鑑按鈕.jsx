/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router';

export default function 寶鑑按鈕(props) {
  const { data } = props;
  const 按鈕 = data.image;
  return (
    <div className="台語寶鑑-col">
      <Link to={data.to}>
        <div className="台語寶鑑-button">
          <div className="台語寶鑑-button-ico" style={{ backgroundImage: `url(${按鈕})` }} />
          <div className="台語寶鑑-button-name">{data.name}</div>
        </div>
      </Link>
    </div>
  );
}
