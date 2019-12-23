import React,{Component} from 'react';
import {Nav,Navbar,FormControl,Form,Button,InputGroup,NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import './../App.css';
import logo from './../images/logo.png';
import {Redirect} from 'react-router-dom';
const MenuLink=({ label, to, activeOnlyWhenExact})=> {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) =>{
        return(
        <Nav.Link className={match ? "active changetext" : "changetext"} href={to}>
          {label}
        </Nav.Link>
      )}}
    />
  );
}
class Menus extends Component{
  render(){
    var {taikhoan}=this.props;
  return (
    <React.Fragment>
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="changemenu">
          <Navbar.Brand ><img src={logo} className="logo" width="50px"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <MenuLink label="Trang chủ" to='/' activeOnlyWhenExact={true} />
              <MenuLink label="Bài giảng" to='/bai-giang' activeOnlyWhenExact={false} />
              <MenuLink label="Học liệu" to='/hoc-lieu' activeOnlyWhenExact={false} />
              <MenuLink label="Kiểm tra" to='/kiem-tra' activeOnlyWhenExact={false} />
              <MenuLink label="Đăng nhập" to='/dang-nhap' activeOnlyWhenExact={false} />
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
}
export default Menus;
