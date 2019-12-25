import React,{Component} from 'react';
import {Row,Col} from 'react-bootstrap';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import styleshome from './../styleshome.js';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import logo from './../images/logo.png';
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
class Footer extends Component{
  render(){
    var {classes}=this.props;
  return(
    <div className={classes.footer}>
        <Row>
          <Col xs={4} md={4} sm={4} lg={4}>
            <img src={logo} width="80%" className={classes.logofooter}/>
          </Col>
          <Col className={classes.paddinggiua}  xs={4} md={4} sm={4} lg={4}>
            <Box className={classes.cach}><ArrowRightIcon className={classes.icon}/> Bài giảng</Box>
            <Box className={classes.cach}><ArrowRightIcon className={classes.icon}/> Bài tập</Box>
            <Box className={classes.cach}><ArrowRightIcon className={classes.icon}/> Bài kiểm tra</Box>
          </Col>
          <Col  xs={4} md={4} sm={4} lg={4}>
            <Box className={classes.cach}><PhoneIcon className={classes.icon}/> SĐT : 0123456789</Box>
            <Box className={classes.cach}><MailIcon className={classes.icon}/> Gmail : doubletcl@gmail.com</Box>
            <Box className={classes.cach}><FacebookIcon className={classes.icon}/> Facebook : doubleTCL</Box>
            <Box className={classes.cach}><LocationOnIcon className={classes.icon}/> Trụ sở:136,Thị trấn Sóc Trăng,Hà Nội</Box>
          </Col>
        </Row>
    </div>
  );
}
}
export default withStyles(styleshome)(Footer);
