import React,{Component} from 'react';
import {Nav,Navbar,FormControl,Form,Button,InputGroup,NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import './../App.css';
import logo from './../images/logo.png';
const MenuLink=({ label, to, activeOnlyWhenExact})=> {
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
class Menus extends Component{
  handleLogout=()=>{
    this.props.logout();
  }
  render(){
    let title = "";
    var {nguoidung}=this.props;
    if(nguoidung){
      try{
        title=nguoidung.users.user.lastName;
      }catch(e)
      {
        title="Người dùng"
      }
    }
    var result=[];
    if(!nguoidung)
    {
      result= <MenuLink label="Đăng nhập" to='/dang-nhap' activeOnlyWhenExact={false} />
    }
    else
    {
      result= <NavDropdown title={title} id="collasible-nav-dropdown">
      <NavDropdown.Item className="dropdown-item">Thông tin</NavDropdown.Item>
      <NavDropdown.Item onClick={this.handleLogout} className="dropdown-item">Thoát</NavDropdown.Item>
    </NavDropdown>
    }
  return (
    <React.Fragment>
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="menu">
          <Navbar.Brand href="#home"><img src={logo} className="logo" width="50px"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <MenuLink label="Trang chủ" to='/' activeOnlyWhenExact={true} />
              <MenuLink label="Bài giảng" to='/bai-giang' activeOnlyWhenExact={false} />
              <MenuLink label="Học liệu" to='/hoc-lieu' activeOnlyWhenExact={false} />
              <MenuLink label="Kiểm tra" to='/kiem-tra' activeOnlyWhenExact={false} />
              {result}
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
