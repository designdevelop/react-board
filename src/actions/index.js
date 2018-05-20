import axios from 'axios';


// Common 
const API_URL = 'http://localhost:3000';

// Crawling list
export const FETCH_CRAWLING_LIST = 'FETCH_CRAWLING_LIST';

export function fetchCrawlingList(){
	let signature = sessionStorage.getItem("signature");
	
	const request = axios.get(`${API_URL}/user/list`, {"headers": { "x-access-token": signature }});

	
	return {
		type : FETCH_CRAWLING_LIST,
		payload : request
	}
}


/**
 * User Action
 */

// 유저 로그인
export const FETCH_USER_LOGIN = "FETCH_USER_LOGIN";
export function fetchUserLogin(param, token){

	const request = axios.post(`${API_URL}/user/login`, param);

	return {
		type : FETCH_USER_LOGIN,
		payload : request
	}

}

// 회원 가입
export const FETCH_USER_JOIN = "FETCH_USER_JOIN";
export function fetchUserJoin(param){
	const request = axios.post(`${API_URL}/user/join`, param);
	return {
		type : FETCH_USER_JOIN,
		payload : request
	}
}



/**
 * Board Action
 */

export const FETCH_BOARD_LIST = "FETCH_BOARD_LIST";
export function fetchBoardList(userId){
	let signature = sessionStorage.getItem("signature");
	
	const request = axios.get(`${API_URL}/board/list?userId=${userId}`, {"headers": { "x-access-token": signature }});

	return {
		type : FETCH_BOARD_LIST,
		payload : request
	}
}


export const FETCH_BOARD_CREATE = "FETCH_BOARD_CREATE";
export function fetchBoardCreate(param){
	let signature = sessionStorage.getItem("signature");
	const request = axios.post(`${API_URL}/board/add`, param, {"headers": { "x-access-token": signature }});

	return {
		type : FETCH_BOARD_CREATE,
		payload : request
	}
}

export const FETCH_BOARD_SHOW = "FETCH_BOARD_SHOW";
export function fetchBoardShow(userId, board_seq){
	let signature = sessionStorage.getItem("signature");
	const request = axios.get(`${API_URL}/board/get?userId=${userId}&board_seq=${board_seq}`, {"headers": { "x-access-token": signature }});

	return {
		type : FETCH_BOARD_SHOW,
		payload : request
	}
}

export const FETCH_BOARD_DELETE = "FETCH_BOARD_DELETE";
export function fetchBoardDelete(board_seq){
	let signature = sessionStorage.getItem("signature");
	let param = {};
	param.board_seq = board_seq;

	const request = axios.post(`${API_URL}/board/delete`, param, {"headers": { "x-access-token": signature }});
	return {
		type : FETCH_BOARD_DELETE,
		payload : request
	}

}











