import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchBoardCreate } from '../actions/index';

class BoardCreateForm extends Component{
	constructor(props){
		super(props);

		this.state = {
			userId : sessionStorage.getItem("userId"),
			title : "",
			content : ""
		}
	}

	inputChangeHandler = (evt, target) =>{
		console.log(evt.target.value);
		let text = evt.target.value;
		switch(target){
			case "title" : 
				this.setState({"title" : text});
			break;
			case "content" : 
				this.setState({"content" : text});
			break;
		}

		console.log("state", this.state);

	}

	onSubmit = () => {

		if(this.state.title === ""){
			alert("title을 입력해주세요.");
			return;
		}else if(this.state.content === ""){
			alert("content를 입력해주세요.");
			return;
		}

		

		let test = this.props.fetchBoardCreate(this.state).then(() => {
			browserHistory.push("/board/list");
		});
		
		
	}


	render(){
		return(
			<div>
				<div>
					<label>Title</label>
					<input type="text" onChange={(evt) => this.inputChangeHandler(evt, "title")}/>
				</div>
				<div>
					<label>Content</label>
					<input type="text" onChange={(evt) => this.inputChangeHandler(evt, "content")}/>
				</div>
				<div>
					<input type="button" value="create" onClick={() => this.onSubmit()}/>
				</div>
			</div>
		);
	}

}

export default connect(null, {fetchBoardCreate})(BoardCreateForm);






