import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styleshome from './../styleshome.js';
import Box from '@material-ui/core/Box';
import {NavLink} from "react-router-dom";
class Bai extends Component{
  render(){
    var {classes}=this.props;
    var {baikiemtra}=this.props;
    var result=baikiemtra.baitap.map((bai,index)=>{
      return(
           <Box className={classes.bai} key={index}>
              <NavLink to={`/bai-tap/${baikiemtra.id}/${bai.ma}/`} className={classes.linkbai}
                activeClassName={classes.active} exact>
                  {bai.ten}</NavLink>
            </Box>
      );
    });
  return(
    <React.Fragment>
      {result}
    </React.Fragment>
  );
}
}
export default withStyles(styleshome)(Bai);
