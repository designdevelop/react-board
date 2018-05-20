import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import CrawlingList from './containers/crawling_list';
import BoardList from './containers/board_list';
import UserLoginJoinForm from './containers/user_login_join';
import BoardCreateForm from './containers/board_create';
import BoardDetail from './containers/board_detail';

function requireAuth(nextState, replace){
	let userId = sessionStorage.getItem("userId");
	let signature = sessionStorage.getItem("signature");

	console.log("nextState : ", nextState);


	if(signature === null){
		replace({
			pathname: "/",
			state: {nextPathname: nextState.location.pathname}
	    });
	}
}



export default (
	<Route path="/" components={App}>
		<IndexRoute components={UserLoginJoinForm}/>
		<Route path="crawling/list" component={CrawlingList} onEnter={requireAuth}/>
		<Route path="board/list" component={BoardList} onEnter={requireAuth}/>
		<Route path="board/create" component={BoardCreateForm} onEnter={requireAuth}/>
		<Route path="board/show/:id" component={BoardDetail} onEnter={requireAuth}/>
	</Route>
);