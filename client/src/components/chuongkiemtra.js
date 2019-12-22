import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styleshome from './../styleshome.js';
import Bai from './baikiemtra';
import Box from '@material-ui/core/Box';
import axios from 'axios';
class Chuong extends Component{
  render(){
    var {classes,baikiemtras}=this.props;
    var result=baikiemtras.map((baitap,index)=>{
      return(
        <div key={index}>
        <Box fontWeight="fontWeightBold" fontSize={24}>{baitap.title}</Box>
        <Bai baikiemtra={baitap} />
        </div>
      );
    });
  return(
    <React.Fragment>
      <div>
        {result}
      </div>
    </React.Fragment>
  );
}
}
export default withStyles(styleshome)(Chuong);