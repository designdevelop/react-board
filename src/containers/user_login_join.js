import React,{ Component } from 'react';
import {browserHistory} from 'react-router';
import { connect } from 'react-redux';
import { fetchUserLogin } from '../actions/index';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;



class UserLoginJoinForm extends Component{

	constructor(props){
		super(props);

		this.state = {
			loginParam : {
				userId : "",
				passwd : ""
			},
			joinParam : {
				userId : "",
				passwd : "",
				passwdCheck : "",
				name : "",
				phone : "",
				nickname : "",
				gender : 1

			},
			userId : "",
			passwd : "",
			targetForm : false
			
		}
	}


	/**
	 * Login Start
	 */
	
	// 로그인 action craetor 호출
	onLogin(evt){
		let param = {...this.state};
		delete param.targetForm;
		
		this.props.fetchUserLogin(param);

	}	

	// 로그인 input change 이벤트
	onLoginInputChange(type, evt){
		
		switch(type){
			case "userId" : 
				this.setState({userId : evt.target.value});
			break;
			case "passwd" :
				this.setState({passwd : evt.target.value});
			break;
			default : 
				return;
		}
	}

	// 로그인 input enter 이벤트 
	enterEvent(target, evt){
		if(evt.key === "Enter"){
			switch(target){
				case "userId" :
					let passWordInput = document.getElementsByClassName("pwd-input")[0];
					passWordInput.focus();
				break;
				case "passwd" :
					this.onLogin();
				break;
			}

			
		}
	}


	showJoinForm(){
		this.setState({targetForm : true});
	}

	showLoginForm(){
		this.setState({targetForm : false});
	}

	// 로그인 api 호출 후 변경된 어플리케이션 스테이트를 받아서 로그인 성공시 메인 페이지로 이동한다.
	componentWillReceiveProps(props){

		if(props.appState.auth.signature != null){
			sessionStorage.setItem("signature", props.appState.auth.signature);
			sessionStorage.setItem("userId", props.appState.auth.userId);
			browserHistory.push('/board/list');
		}else {
			alert("아이디 혹은 비밀번호가 틀렸습니다.");
		}
	}

	loginFormRender(){

		return(
			<div className="login-input-form">
	            <div className="logo-wrap">
	                <h1>Design Develop</h1>
	            </div>
			    <div>
	                <div className="login-form-row">
	                    <input 
	                    	type="text" 
	                    	className="email-input" 
	                    	placeholder="User ID" 
	                    	onChange={(evt) => this.onLoginInputChange("userId", evt)} 
	                    	onKeyPress={evt => {
	                    		this.enterEvent("userId", evt);
	                    	}}
	                    	value={this.state.userId}/>
	                </div>
	                <div className="login-form-row">
	                    <input 
	                    	type="password" 
	                    	className="pwd-input" 
	                    	placeholder="Password" 
	                    	onChange={(evt) => this.onLoginInputChange("passwd", evt)} 
	                    	onKeyPress={evt => {
	                    		this.enterEvent("passwd", evt);
	                    	}}
	                    	value={this.state.passwd}/>
	                </div>
			    </div>
				<div>
	                <div className="login-form-row login-btn-row">
	                    <input type="button" className="pointer-item login-btn" value="Login" onClick={(evt) => this.onLogin(evt)}/>
	                </div>
				</div>
				<div className="btn_wrap">
				    <span className="pointer-item join-form-btn" onClick={(evt) => this.showJoinForm()}>회원가입</span>
				    <span className="pointer-item">비밀번호 찾기</span>
				</div>
			</div>
		);
	}

	/**
	 * Login End
	 */
	

	/**
	 * Join Start
	 */
	
	onJoinInputChange(type, evt){
		let changeState = {...this.state.joinParam};
		switch(type){
			case "userId" :
				changeState.userId = evt.target.value;
			break;
			case "password" :
				changeState.passwd = evt.target.value;
			break;
			case "password_check" :
				changeState.passwdCheck = evt.target.value;
			break;
			case "name" : 
				changeState.name = evt.target.value;
			break;
			case "phone" :
				changeState.phone = evt.target.value;
			break;
			case "nickname" :
				changeState.nickname = evt.target.value;
			break;
			default : 

		}

		this.setState({joinParam : changeState});
	}

	joinFormRender(){
		return(
			<div className="join-input-form">
	            <div className="join-header-wrap">
	                <h1>회원가입</h1>
	            </div>
	            <div>
	                <div className="login-form-row join-id-row">
	                    <input type="text" 
	                    	className="id-join-input" 
	                    	placeholder="User ID"
	                    	onChange={(evt) => this.onJoinInputChange("userId", evt)} 
	                    	value={this.state.joinParam.userId}/>
	                    <span className="duplication-check-btn">중복체크</span>
	                </div>
	                <div className="login-form-row">
	                    <input type="password" 
	                    	className="pwd-join-input" 
	                    	placeholder="Password"
	                    	onChange={(evt) => this.onJoinInputChange("password", evt)} 
	                    	value={this.state.joinParam.passwd}/>
	                </div>
	                <div className="login-form-row">
	                    <input type="password" 
	                    	className="pwd-check-join-input" 
	                    	placeholder="Password check"
	                    	onChange={(evt) => this.onJoinInputChange("password_check", evt)}/>
	                </div>
	                <div className="login-form-row">
	                    <input type="text" 
	                    	className="name-join-input" 
	                    	placeholder="Name"
	                    	onChange={(evt) => this.onJoinInputChange("name", evt)}/>
	                </div>
	                <div className="login-form-row">
	                    <input type="text" 
		                    className="phone-join-input" 
		                    placeholder="Phone"
		                    onChange={(evt) => this.onJoinInputChange("phone", evt)}/>
	                </div>
	                <div className="login-form-row">
	                    <input type="text" 
	                    	className="nickname-join-input" 
	                    	placeholder="Nickname"
	                    	onChange={(evt) => this.onJoinInputChange("nickname", evt)}/>
	                </div>
	                <div className="login-form-row">
	                    <label htmlFor="join-gender-female">여성</label>
	                    <input type="radio" id="join-gender-female" className="gender-join-input" name="gender" value="0" defaultChecked={true} />
	                    <label htmlFor="join-gender-male">남성</label>
	                    <input type="radio" id="join-gender-male" className="gender-join-input" name="gender" value="1"/>
	                </div>
	                <div>
	                    <div className="login-form-row join-btn-row">
	                        <input type="button" className="pointer-item join-btn" value="회원가입"/>
	                    </div>
	                </div>
	                <div className="btn_wrap">
	                    <span className="pointer-item back-btn" onClick={(evt) => this.showLoginForm()}>뒤로</span>
	                    <span></span>
	                </div>
	            </div>
			</div>
		);
	}

	/**
	 * Join End
	 */

	render(){
		return(
			<div className="contents-box">
				<div className="login-form-wrap">
					{this.state.targetForm ? this.joinFormRender() : this.loginFormRender()}
				</div>
			</div>
		)
	}
}

function mapStateToProps (state){
	return {
		appState : state
	}
}

export default connect(mapStateToProps, { fetchUserLogin })(UserLoginJoinForm);






