import React,{Component} from 'react';
import { Tab,Row,Col,Nav} from 'react-bootstrap';
import './../App.css';
import Comment from './Comment';
class TabBaigiang extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      baigiangs:[]
    }
  }
  componentDidMount()
  {
    fetch('http://localhost:5000/lessons',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
      .then(respond => {
        this.setState({
          baigiangs:respond
        })
      })
      .catch(err => console.log(err));
  }
  render(){
    const {baigiangs}=this.state;
    var bgchuong1=baigiangs.filter((baigiang,index)=>{
      return baigiang.section.order==1
    });
    var chuong1=bgchuong1.map((a,index)=>{
      return (
        <Nav.Item key={index}>
              <Nav.Link eventKey={a._id} className="bai">{a.title}</Nav.Link>
        </Nav.Item>
      );
    });
    var bgchuong2=baigiangs.filter((baigiang,index)=>{
      return baigiang.section.order==2
    });
    var chuong2=bgchuong2.map((a,index)=>{
      return (
        <Nav.Item key={index}>
              <Nav.Link eventKey={a._id} className="bai">{a.title}</Nav.Link>
        </Nav.Item>
      );
    });
    var chuong2=bgchuong2.map((a,index)=>{
      return (
        <Nav.Item key={index}>
              <Nav.Link eventKey={a._id} className="bai">{a.title}</Nav.Link>
        </Nav.Item>
      );
    });
    var videoc1=bgchuong1.map((a,index)=>{
      return(
        <Tab.Pane eventKey={a._id}>
              <h3 className="tieudebaigiang text-center">{a.title}</h3>
              <iframe className="video" 
              src={a.video} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
        </Tab.Pane>
        )
    });
    var videoc2=bgchuong2.map((a,index)=>{
      return(
        <Tab.Pane eventKey={a._id}>
              <h3 className="tieudebaigiang text-center">{a.title}</h3>
              <iframe className="video" 
              src={a.video} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
        </Tab.Pane>
        )
    });
  return(
    <div className="tabbaigiang">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={4} xs={12} className="traitabbaigiang" id="changescroll">
          <Nav variant="pills" className="flex-column">
            <span className="chuong">Chương I: Thành phần hóa học của tế bào</span>
            {chuong1}
            <span className="chuong">Chương II: Cấu trúc của tế bào</span>
            {chuong2}
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
        <Col sm={8} xs={12} className="phaitabbaigiang">
          <Tab.Content >
            {videoc1}
            {videoc2}
          </Tab.Content>
        </Col>
      </Row>
      <Tab.Content>
      <Tab.Pane eventKey="1">
      <Comment />
      </Tab.Pane>
      </Tab.Content>
      </Tab.Container>
    </div>
  );
}
}
export default TabBaigiang;