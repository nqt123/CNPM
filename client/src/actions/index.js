import * as types from './../constants/ActionTypes';
export const LIST_ALL=()=>{
	return {
		type:types.LIST_ALL
};
};
export const CHANGE_COLOR=()=>{
	return {
		type:types.CHANGE_COLOR
	}
};
export const CHANGE_SIZE=(fontsize)=>{
	return{
		type:types.CHANGE_SIZE,
		fontsize
	}
};