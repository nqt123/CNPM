import React,{Component} from 'react';
import { Tab,Row,Col,Nav,Container,Form,Button} from 'react-bootstrap';
import Comment from './Comment';
import './../thongtincanhan.css';
import Menu from './Menu1';
import Swal from 'sweetalert2';
class TabBaigiang extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      users:{},
      passwordnew1:'',
      passwordnew2:''
    }
  }
  onChange=(event)=>{
    var target=event.target;
    var name=target.name;
    var value=target.value;
    this.setState({
        [name]:value
    });
  }
  componentDidMount()
  {
    if (typeof(Storage) !== "undefined") {
      this.setState({
            users:JSON.parse(localStorage.getItem('taikhoan'))
          });
    }
  }
  handleClick=(e)=>{
    e.preventDefault();
    var {passwordnew1,passwordnew2,users}=this.state;
    var title="";
    console.log(this.state.users);
    if(users)
    {
      try{
        title=users.user._id;
      }catch(e)
      {
        title="";
      }
    }   
    if(passwordnew1==""||passwordnew2=="")
    {
      Swal.fire({
              icon: 'error',
              title: 'Thất bại',
              text: 'Vui lòng điền đầy đủ thông tin',
      });
    }
    else
    {
      if(passwordnew1!==passwordnew2)
      {
        Swal.fire({
              icon: 'error',
              title: 'Thất bại',
              text: 'Vui lòng điền lại thông tin',
      });
      }
      else
      {
    fetch('http://localhost:5000/users/login/'+title, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',  
        },
      body: JSON.stringify({
       password:passwordnew1
      })
    }).then(res => res.json())
      .then(respond => 
        {
          return Swal.fire({
              title: 'Thành công',
              text: 'Đổi mật khẩu thành công',
          });
        })
    .catch(err => console.log(err));
  }
}
  }
  logout=()=>{
  localStorage.removeItem('taikhoan');
    this.setState({
      users: ""
    });
    this.props.history.push("/");
    this.render();
  }
  render(){
    const {users,passwordnew1,passwordnew2}=this.state;
    var name="",diachi="",email="",cmnd="",ngaysinh="",sdt="",gioitinh="";
    if(users){
      try{
        name=users.user.firstName+" "+users.user.lastName;
        ngaysinh=users.user.DOB;
        gioitinh=users.user.gender;
        diachi=users.user.location;
        email=users.user.email;
        cmnd=users.user.SSN;
      }catch(e)
      {
        
      }
    }
  return(
    <div>
    <Menu logout={this.logout} nguoidung={this.state.users}/>
    <div className="cachTop">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Container>
      <Row>
        <Col sm={4} xs={5} id="changescroll" className="traithongtin">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="1" className="bai">Thông tin cá nhân</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" className="bai">Đổi mật khẩu</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={8} xs={7}>
          <Tab.Content className="phaithongtin">
            <Tab.Pane eventKey="1" className="chitiet">
              <Row>
              <Col xs={12} sm={6}>
              <p className="tt1">Họ và tên</p>
              </Col>
              <Col xs={12} sm={6}>
              <p className="tt">{name}</p>
              </Col>
              </Row>
              <Row>
              <Col xs={12} sm={6}>
              <p className="tt1">Ngày sinh</p>
              </Col>
              <Col xs={12} sm={6}>
              <p className="tt">{ngaysinh}</p>
              </Col>
              </Row>
              <Row>
              <Col xs={12} sm={6}>
              <p className="tt1">Giới tính</p>
              </Col>
              <Col xs={12} sm={6}>
              <p className="tt">{gioitinh}</p>
              </Col>
              </Row>
              <Row>
              <Col xs={12} sm={6}>
              <p className="tt1">Địa chỉ</p>
              </Col>
              <Col xs={12} sm={6}>
              <p className="tt">{diachi}</p>
              </Col>
              </Row>
              <Row>
              <Col xs={12} sm={6}>
              <p className="tt1">Email</p>
              </Col>
              <Col xs={12} sm={6}>
              <p className="tt">{email}</p>
              </Col>
              </Row>
              <Row>
              <Col xs={12} sm={6}>
              <p className="tt1">CMND</p>
              </Col>
              <Col xs={12} sm={6}>
              <p className="tt">{cmnd}</p>
              </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="2">
              <Form>
                <Form.Group>
                  <Form.Label className="tt1">Mật khẩu mới</Form.Label>
                  <Form.Control type="password" value={passwordnew1} name="passwordnew1" onChange={this.onChange}/>
                </Form.Group>
                <Form.Group >
                  <Form.Label className="tt1">Nhập lại mật khẩu mới</Form.Label>
                  <Form.Control type="password" value={passwordnew2} name="passwordnew2" onChange={this.onChange}/>
                </Form.Group>
                <Button variant="success" type="submit" onClick={this.handleClick}>
                  Xác nhận
                </Button>
              </Form>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
      </Container>
      </Tab.Container>
    </div>
    </div>
  );
}
}
export default TabBaigiang;