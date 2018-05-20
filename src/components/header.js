import React,{ Component } from 'react';
import { browserHistory } from 'react-router';
import '../index.css';

class Header extends Component{


	logoutEvent = () =>{
		alert("로그아웃");	
		sessionStorage.clear();
		browserHistory.push('/');
	}


	render(){
		return(
			<nav className="header-area">
				<div className="search-area">
					<input type="text"/>
				</div>
				<div className="logout-area">
					<span id="logout-btn" onClick={this.logoutEvent}>LOGOUT</span>	
				</div>
			</nav>
		);
	}
}
export default Header;