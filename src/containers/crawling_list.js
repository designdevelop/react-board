import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCrawlingList } from '../actions/index';

class CrawlingList extends Component{

	componentWillMount(){

		this.props.fetchCrawlingList();
	}

	renderUserList(){
		return this.props.list.map((item) => {
			return(
				<li key={item.userId}>{item.userId}</li>
			);
		});
	}

	render(){
		console.log(this.props);
		return (
			<ul>
				{this.renderUserList()}
			</ul>
		);
	}
}

function mapStateToProps(state){
	return {
		list : state.list
	}
}


export default connect(mapStateToProps, { fetchCrawlingList })(CrawlingList);