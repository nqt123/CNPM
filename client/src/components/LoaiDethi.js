import React,{Component} from 'react';
import {Form,Col,Row,Button} from 'react-bootstrap';
import './../App.css';
import Dethi from './Dethi';
class LoaiDethi extends Component{
  render(){
  return(
    <React.Fragment>
    <div className="dethi">
      <p className="tieudedethi">Loại đề thi</p>
      <Row>
      <Col sm={3}>
      <Form>
      <Form.Group>
      <Form.Control as="select" width="200px" className="loaidethi">
        <option>15 phút</option>
        <option>1 tiết</option>
        <option>Học kì</option>
        <option>Tuyển học sinh giỏi</option>
      </Form.Control>
    </Form.Group>
    </Form>
    </Col>
    <Col>
       <Button variant="success">Tìm kiếm</Button>
    </Col>
    </Row>
    <Dethi />
    </div>
    </React.Fragment>
  );
}
}
export default LoaiDethi;