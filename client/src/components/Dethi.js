import React,{Component} from 'react';
import {Col,Row} from 'react-bootstrap';
import './../App.css';
class LoaiDethi extends Component{
  render(){
  return(
    <React.Fragment>
      <div>
        <div className="chitietdethi">
          <Row>
            <Col sm={1} xs={4}>
              <img src="https://images.tuyensinh247.com/picture/2017/0525/de-thi-vao-lop-10-sam-son-1.jpg" className="anhdethi"/>
            </Col>
            <Col sm={11} xs={8}>
              <p className="text-center"><b>Đề thi 15 phút chương 1</b></p>
              Đề thi 15 phút của trường THPT Sóc Trăng giúp học sinh ghi nhớ kiến thức trong quá trình học tập,
              nắm vững những kiến thức trong chương 1
            </Col>
          </Row>
        </div>

        <div className="chitietdethi">
          <Row>
            <Col sm={1} xs={4}>
              <img src="https://images.tuyensinh247.com/picture/2017/0525/de-thi-vao-lop-10-sam-son-1.jpg" className="anhdethi"/>
            </Col>
            <Col sm={11} xs={8}>
              <p className="text-center"><b>Đề thi 15 phút chương 2</b></p>
              Đề thi 15 phút của trường THPT Sóc Trăng giúp học sinh ghi nhớ kiến thức trong quá trình học tập,
              nắm vững những kiến thức trong chương 2
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}
}
export default LoaiDethi;