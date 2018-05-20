import React,{ Component } from 'react';
import Header from './header';

function MainFrame(props){

	let pathFlag = false;

	if(props.children.props.location.pathname != "/") pathFlag = true;

	return(
		<div className="frameWrap">
			{ pathFlag ? <Header/> : "" }
			{props.children}
		</div>
	);
}

export default MainFrame;


