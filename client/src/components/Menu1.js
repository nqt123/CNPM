import React,{Component} from 'react';
import {Nav,Navbar,FormControl,Form,Button,InputGroup} from 'react-bootstrap';
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import './../App.css';
import logo from './../images/logo.png';
const MenuLink=({ label, to, activeOnlyWhenExact,icon })=> {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <Nav.Link className={match ? "active1" : ""} href={to}>
          {label}
        </Nav.Link>
      )}
    />
  );
}
const menus=[
  {
    name:'Trang chủ',
    to:'/',
    exact:true
  },
  {
    name:'Bài giảng',
    to:'/bai-giang',
    exact:false
  },
  {
    name:'Học liệu',
    to:'/hoc-lieu',
    exact:false
  },
  {
    name:'Kiểm tra',
    to:'/kiem-tra',
    exact:false
  },
  {
    name:'Đăng nhập',
    to:'/dang-nhap',
    exact:false
  }
];
class Menus extends Component{
  render(){
  return (
    <React.Fragment>
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="menu">
          <Navbar.Brand href="#home"><img src={logo} className="logo" width="50px"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {this.showMenus(menus)}
            </Nav>
            <Form inline>
              <InputGroup>
                  <FormControl type="text" placeholder="Search..." className="ml-sm-2" size="sm"/>
                   <InputGroup.Append>
                      <Button size="sm"><i className="fa fa-search" aria-hidden="true"></i></Button>
                   </InputGroup.Append>
              </InputGroup>
            </Form>
          </Navbar.Collapse>
        </Navbar>
    </React.Fragment>
  );
}
showMenus=menus=>{
      var result=null;
      if(menus.length>0)
      {
        result=menus.map((menu,index)=>{
          return(
            <MenuLink
              key={index}
              label={menu.name}
              to={menu.to}
              activeOnlyWhenExact={menu.exact}
            />
          );
        }); 
      }
      return result;
  }
}
export default Menus;
