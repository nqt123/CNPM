import React,{Component} from 'react';
import { Tab,Row,Col,Nav} from 'react-bootstrap';
import './../App.css';
import Tracnghiem from './Tracnghiem';
class TabKiemtra extends Component{
  render(){
  return(
    <div className="tabbaigiang">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={4} className="traitabbaigiang" id="changescroll">
          <Nav variant="pills" className="flex-column">
            <span className="chuong">Chương I: Thành phần hóa học của tế bào</span>
            <Nav.Item>
              <Nav.Link eventKey="1" className="bai">Bài 1: Các nguyên tố hóa học và nước</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" className="bai">Bài 2: Cacbohiđrat và lipit</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" className="bai">Bài 3: Prôtein</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4" className="bai">Bài 4: Axit nuclêic</Nav.Link>
            </Nav.Item>
            <span className="chuong">Chương II: Cấu trúc của tế bào</span>
            <Nav.Item>
              <Nav.Link eventKey="5" className="bai">Bài 5: Tế bào nhân sơ</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="6" className="bai">Bài 6: Tế bào nhân thực</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="7" className="bai">Bài 7: Vận chuyển các chất qua màng sinh chất</Nav.Link>
            </Nav.Item>
            <span className="chuong">Chương III: Chuyển hóa vật chất và năng lượng trong tế bào</span>
            <Nav.Item>
              <Nav.Link eventKey="8" className="bai">Bài 8: Khái quát về năng lượng và chuyển hóa vật chất</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="9" className="bai">Bài 9: Enzim và vai trò của enzim trong chuyển hóa vật chất</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="10" className="bai">Bài 10: Hô hấp tế bào</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="11" className="bai">Bài 11: Quang hợp</Nav.Link>
            </Nav.Item>
            <span className="chuong">Chương IV: Phân bào</span>
            <Nav.Item>
              <Nav.Link eventKey="12" className="bai">Bài 12: Chu kì tế bào và quá trình nguyên phân</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="13" className="bai">Bài 13: Giảm phân</Nav.Link>
            </Nav.Item>
            <span className="chuong">Chương V: Chuyển hóa vật chất và năng lượng ở vi sinh vật</span>
            <Nav.Item>
              <Nav.Link eventKey="14" className="bai">Bài 14: Dinh dưỡng, chuyển hóa vật chất và năng lượng ở vi sinh vật</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="15" className="bai">Bài 15: Quá trình tổng hợp và phân giải các chất ở vi sinh vật</Nav.Link>
            </Nav.Item>
            <span className="chuong">Chương VI: Sinh trưởng và sinh sản của vi sinh vật</span>
            <Nav.Item>
              <Nav.Link eventKey="16" className="bai">Bài 16: Sinh trưởng của vi sinh vật</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="17" className="bai">Bài 17: Sinh sản của vi sinh vật</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="18" className="bai">Bài 18: Các yếu tố ảnh hưởng đến sinh trưởng của vi sinh vật</Nav.Link>
            </Nav.Item>
            <span className="chuong" className="bai">Chương VI:Virut và bệnh truyền nhiễm</span>
            <Nav.Item>
              <Nav.Link eventKey="19" className="bai">Bài 19: Cấu trúc các loại virut</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="20" className="bai">Bài 20: Sự nhân lên của virut trong tế bào chủ</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="21" className="bai">Bài 21: Virut gây bệnh. Ứng dụng của virut trong thực tiễn</Nav.Link>
            </Nav.Item>
             <Nav.Item>
              <Nav.Link eventKey="22" className="bai">Bài 22:Bệnh truyền nhiễm và miễn dịch</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={8} className="phaitabbaigiang">
          <Tab.Content >
            <Tab.Pane eventKey="1">
              <Tracnghiem />
            </Tab.Pane>
            <Tab.Pane eventKey="2">
               
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
      </Tab.Container>
    </div>
  );
}
}
export default TabKiemtra;