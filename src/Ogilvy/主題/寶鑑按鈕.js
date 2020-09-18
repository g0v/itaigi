import React from 'react';
import { Link } from 'react-router';

export default class 寶鑑按鈕 extends React.Component {
	render() {
		return (
			<div className='台語寶鑑-col'>
	 			<Link to={ this.props.data.to }>
		 			<div className='台語寶鑑-button'>
		 				<div className='台語寶鑑-button-ico' style={{ backgroundImage:`url(${ this.props.data.image })` }}></div>
		 				<div className='台語寶鑑-button-name'>{ this.props.data.name }</div>
		 			</div>
	 			</Link>
	 		</div>
		);
	}
}

