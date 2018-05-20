import { FETCH_BOARD_LIST, FETCH_BOARD_SHOW } from '../actions/index';


const INITIAL_STATE = { boardList : [], activeBoard : null};
export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case FETCH_BOARD_LIST : 
			return {...state, boardList : action.payload.data.result};
		
		case FETCH_BOARD_SHOW : 
			return {...state, activeBoard : action.payload.data.result};
		default : 
			return state;
	}
}