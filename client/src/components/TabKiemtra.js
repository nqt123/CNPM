import React,{Component} from 'react';
import { Tab,Row,Col,Nav,Form,Button} from 'react-bootstrap';
import './../App.css';
class TabKiemtra extends Component{
  constructor(props)
  {
    super(props)
    this.state={
      cauhois:[]
    }
  }
  componentDidMount()
  {
    fetch('https://nqt-api-cnpm.herokuapp.com/exercises',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
      .then(respond => {
        this.setState({
          cauhois:respond
        });
      })
      .catch(err => console.log(err));
  }
  render(){
    const {cauhois}=this.state;
    var a="",b=[],question=[],titlec2,c=[],e,f=[];
    var bgchuong1=cauhois.filter((cauhoi,index)=>{
      return cauhoi.lesson.title=="Tế bào nhân thực"
    });
    var bgchuong2=cauhois.filter((cauhoi,index)=>{
      return cauhoi.lesson.title=="Các nguyên tố hóa học và nước"
    });
    if(bgchuong2)
    {
      try{
        a=bgchuong2[0].lesson.title;  
        if(bgchuong2.length>0)
        {
          for(var i=0;i<bgchuong2.length;i++)
          {
            b.push(bgchuong2[i].content);
            for(let j=0;j<bgchuong2[i].answers.length;j++)
            {
                var q=<Form.Check
                type="radio"
                label={bgchuong2[i].answers[j].content}
                name={bgchuong2[i]._id}
                value={bgchuong2[i].answers[j].number}
              />
              b.push(q)
            }
          }
        }
      }catch(e)
      {

      }
    }
    var bgchuong3=cauhois.filter((cauhoi,index)=>{
      return cauhoi.lesson.title=="Tế bào nhân thực"
    });
    if(bgchuong3)
    {
      try{
        e=bgchuong3[0].lesson.title;  
        if(bgchuong3.length>0)
        {
          for(var i=0;i<bgchuong3.length;i++)
          {
            f.push(bgchuong3[i].content);
            for(let j=0;j<bgchuong2[i].answers.length;j++)
            {
                var q=<Form.Check
                type="radio"
                label={bgchuong2[i].answers[j].content}
                name={bgchuong2[i]._id}
                value={bgchuong2[i].answers[j].number}
              />
              f.push(q)
            }
          }
        }
      }catch(e)
      {

      }
    }
    if(bgchuong1)
    {
      try{
        titlec2=bgchuong2[0].lesson.title;  
        if(bgchuong1.length>0)
        {
          for(var i=0;i<bgchuong1.length;i++)
          {
            c.push(bgchuong1[i].content);
            for(let j=0;j<bgchuong1[i].answers.length;j++)
            {
                var q=<Form.Check
                type="radio"
                label={bgchuong1[i].answers[j].content}
                name={bgchuong1[i]._id}
                value={bgchuong1[i].answers[j].number}
              />
              c.push(q)
            }
          }
        }
      }catch(e)
      {

      }
    }
    console.log(bgchuong1);
  return(
    <div className="tabbaigiang">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={4} className="traitabbaigiang" id="changescroll">
          <Nav variant="pills" className="flex-column">
            <span className="chuong">Chương I: Thành phần hóa học của tế bào</span>
              <Nav.Item>
              <Nav.Link eventKey="1" className="bai">{titlec2}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" className="bai">{e}</Nav.Link>
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
          {c}
          <Button variant="success" onClick={this.handleClick}>Trả lời</Button>
        </Tab.Pane>
        <Tab.Pane eventKey="2">
          {f}
          <Button variant="success" onClick={this.handleClick}>Trả lời</Button>
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