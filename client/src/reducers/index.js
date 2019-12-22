import {combineReducers} from 'redux';
import color from './color';
import fontsize from './fontsize';
const myReducer=combineReducers({
	color,fontsize
});
export default myReducer;