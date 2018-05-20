import { FETCH_USER_LOGIN, FETCH_USER_JOIN } from '../actions/index';

const INITIAL_STATE = { signature : null, userId : null};

export default function(state = INITIAL_STATE, action){

	switch(action.type){
		case FETCH_USER_LOGIN : 
			let token;
			let userId;
			if(action.payload.data.result == null){
				token = null;
				userId = null;
			}else{
				token = action.payload.data.result.signature;
				userId = action.payload.data.result.userId;
			}

			return {...state, signature : token, userId : userId};

		case FETCH_USER_JOIN :
			
			return {...state, isSuccess : true};
		default : 
			return state;
	}
}