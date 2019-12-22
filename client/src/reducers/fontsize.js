import * as types from './../constants/ActionTypes';
var initialState=15;
const myReducer=(state=initialState,action)=>{
	switch(action.type){
		case types.CHANGE_SIZE:
		if(action.fontsize<31&&action.fontsize>-1)
			state=action.fontsize;
		else if(action.fontsize>31)
			state=29;
		else if(action.fontsize<-1)
			state=1;
		return state;
		default:
			return state;
	}
}
export default myReducer;