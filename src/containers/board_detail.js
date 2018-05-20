import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchBoardShow, fetchBoardDelete } from '../actions/index';

class BoardDetail extends Component{


	componentWillMount(){
		let userId = sessionStorage.getItem("userId");
		this.props.fetchBoardShow(userId, this.props.params.id);
	}


	removeBoard = () => {
		console.log("remove");
		this.props.fetchBoardDelete(this.props.params.id).then(() => {
			browserHistory.push("/board/list");
		});
	}


	render(){
		if(!this.props.activeBoard){
			return (
				<div>Loadingㄴ</div>
			)
		}

		return (
			<div>
				{this.props.params.id}
				<div>
					<h2>{this.props.activeBoard.title}</h2>
				</div>
				<div>
					{this.props.activeBoard.content}
				</div>
				<div>
					<input type="button" value="삭제" onClick={() => this.removeBoard()}/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	
	return {
		activeBoard : state.board.activeBoard
	}
}

export default connect(mapStateToProps, {fetchBoardShow, fetchBoardDelete})(BoardDetail);
