import { FETCH_CRAWLING_LIST } from '../actions/index';

export default function(state = [], action){
	switch(action.type){
		case FETCH_CRAWLING_LIST :
			let result = [];
			if(!action.payload.data.result){
				result = [];
			}else{
				result = action.payload.data.result;
			}


			return result;
		default:
			return state;
	}
}