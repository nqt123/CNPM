import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styleshome from './../styleshome.js';
import Bai from './bai';
import Box from '@material-ui/core/Box';
class Chuong extends Component{
  render(){
    var {classes}=this.props;
    var {baigiangs}=this.props;
    var result=baigiangs.map((baigiang,index)=>{
      return(
        <div key={index}>
        <Box fontWeight="fontWeightBold" fontSize={24}>{baigiang.title}</Box>
        <Bai baigiang={baigiang} />
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