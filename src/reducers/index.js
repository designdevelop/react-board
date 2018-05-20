import { combineReducers } from 'redux';
import CrawlingListReducer from './reducer_crawling_list';
import BoardListReducer from './reducer_board';
import UserReducer from './reducer_user';

const rootReducer = combineReducers({
	board : BoardListReducer,
	auth : UserReducer
});

export default rootReducer;
