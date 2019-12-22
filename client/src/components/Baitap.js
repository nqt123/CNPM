import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styleshome from './../styleshome.js';
import {Link} from "react-router-dom";
import axios from 'axios';
import Tracnghiem from './Tracnghiem';
class Baitap extends Component{
  render(){
    var {classes,baikiemtras,id,ma}=this.props;
    var result='';
    if(baikiemtras.length>0)
    {
    	result=baikiemtras[id-1].baitap[ma-1].tracnghiem[0].question;
    }
  return(
    <React.Fragment>
		{result}
    </React.Fragment>
  );
}
}
export default withStyles(styleshome)(Baitap);
