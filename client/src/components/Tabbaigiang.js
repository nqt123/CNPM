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
    fetch('https://nqt-api-cnpm.herokuapp.com/lessons',{
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
    var bgchuong3=baigiangs.filter((baigiang,index)=>{
      return baigiang.section.order==3
    });
    var chuong3=bgchuong3.map((a,index)=>{
      return (
        <Nav.Item key={index}>
              <Nav.Link eventKey={a._id} className="bai">{a.title}</Nav.Link>
        </Nav.Item>
      );
    });
    var bgchuong4=baigiangs.filter((baigiang,index)=>{
      return baigiang.section.order==4
    });
    var chuong4=bgchuong4.map((a,index)=>{
      return (
        <Nav.Item key={index}>
              <Nav.Link eventKey={a._id} className="bai">{a.title}</Nav.Link>
        </Nav.Item>
      );
    });
    var bgchuong5=baigiangs.filter((baigiang,index)=>{
      return baigiang.section.order==5
    });
    var chuong5=bgchuong5.map((a,index)=>{
      return (
        <Nav.Item key={index}>
              <Nav.Link eventKey={a._id} className="bai">{a.title}</Nav.Link>
        </Nav.Item>
      );
    });
    var bgchuong6=baigiangs.filter((baigiang,index)=>{
      return baigiang.section.order==6
    });
    var chuong6=bgchuong6.map((a,index)=>{
      return (
        <Nav.Item key={index}>
              <Nav.Link eventKey={a._id} className="bai">{a.title}</Nav.Link>
        </Nav.Item>
      );
    });
    var bgchuong7=baigiangs.filter((baigiang,index)=>{
      return baigiang.section.order==7
    });
    var chuong7=bgchuong7.map((a,index)=>{
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
              <iframe className="video" frameborder="0" 
              src={a.video} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
      <p className="text-center">{a.content}</p>
        </Tab.Pane>
        )
    });
    var videoc2=bgchuong2.map((a,index)=>{
      return(
        <Tab.Pane eventKey={a._id}>
              <h3 className="tieudebaigiang text-center">{a.title}</h3>
              <iframe className="video" frameborder="0" 
              src={a.video} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
              <p className="text-center">{a.content}</p>
        </Tab.Pane>
        )
    });
    var videoc3=bgchuong3.map((a,index)=>{
      return(
        <Tab.Pane eventKey={a._id}>
              <h3 className="tieudebaigiang text-center">{a.title}</h3>
              <iframe className="video" frameborder="0" 
              src={a.video} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
              <p className="text-center">{a.content}</p>
        </Tab.Pane>
        )
    });
    var videoc4=bgchuong4.map((a,index)=>{
      return(
        <Tab.Pane eventKey={a._id}>
              <h3 className="tieudebaigiang text-center">{a.title}</h3>
              <iframe className="video" frameborder="0" 
              src={a.video} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
              <p className="text-center">{a.content}</p>
        </Tab.Pane>
        )
    });
    var videoc5=bgchuong5.map((a,index)=>{
      return(
        <Tab.Pane eventKey={a._id}>
              <h3 className="tieudebaigiang text-center">{a.title}</h3>
              <iframe className="video" frameborder="0"
              src={a.video} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
              <p className="text-center">{a.content}</p>
        </Tab.Pane>
        )
    });
    var videoc6=bgchuong6.map((a,index)=>{
      return(
        <Tab.Pane eventKey={a._id}>
              <h3 className="tieudebaigiang text-center">{a.title}</h3>
              <iframe className="video" frameborder="0" 
              src={a.video} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
              <p className="text-center">{a.content}</p>
        </Tab.Pane>
        )
    });
    var videoc7=bgchuong7.map((a,index)=>{
      return(
        <Tab.Pane eventKey={a._id}>
              <h3 className="tieudebaigiang text-center">{a.title}</h3>
              <iframe className="video" frameborder="0"  
              src={a.video} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
             <p className="text-center">{a.content}</p>
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
            {chuong3}
            <span className="chuong">Chương IV: Phân bào</span>
            {chuong4}
            <span className="chuong">Chương V: Chuyển hóa vật chất và năng lượng ở vi sinh vật</span>
            {chuong5}
            <span className="chuong">Chương VI: Sinh trưởng và sinh sản của vi sinh vật</span>
            {chuong6}
            <span className="chuong">Chương VII:Virut và bệnh truyền nhiễm</span>
            {chuong7}
          </Nav>
        </Col>
        <Col sm={8} xs={12} className="phaitabbaigiang">
          <Tab.Content >
            {videoc1}
            {videoc2}
            {videoc3}
            {videoc4}
            {videoc5}
            {videoc6}
            {videoc7}
          </Tab.Content>
        </Col>
      </Row>
      </Tab.Container>
       <Comment />
    </div>
  );
}
}
export default TabBaigiang;