import * as types from './../constants/ActionTypes';

var initialState='red';
var myReducer=(state=initialState,action)=>
{
	switch(action.type)
	{
		case types.LIST_ALL:
			return state;
		case types.CHANGE_COLOR:
			state=localStorage.getItem('color');
			return state;
		default:
			return state;
	}
}
export default myReducer;