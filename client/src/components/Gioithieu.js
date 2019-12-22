import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styleshome from './../styleshome.js';
import {Row,Col,Card,Button} from 'react-bootstrap';
import Container from '@material-ui/core/Container';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Box from '@material-ui/core/Box';
import Slider from './Slider';
import Link from '@material-ui/core/Link';
const gioithieus=[
  {
    title:'Bài giảng',
    content:'Hệ thống bài giảng đầy đủ,dễ hiểu gây hấp dẫn với người đọc',
    anh:'openbook',
    link:'/bai-giang'
  },
  {
    title:'Bài tập',
    content:'Hệ thống bài tập đa dạng sau mỗi bài học giúp củng cố kiến thức',
    anh:'checklist',
    link:'/hoc-lieu'
  },
  {
    title:'Đề thi',
    content:'Hệ thống đề thi đầy đủ giúp nâng cao kiến thức, đạt kết quả cao trong kì thi',
    anh:'file',
    link:'kiem-tra'
  }
];
class Gioithieu extends Component{
  render(){
    var {classes}=this.props;
    var result=gioithieus.map((gioithieu,index)=>{
      return(
      <Col key={index}>
          <Card className={classes.cardgioithieu}>
            <Card.Img variant="top" src={require(`./../images/${gioithieu.anh}.png`)} className={classes.imggioithieu}/>
            <Card.Body>
              <Card.Title className="text-center">{gioithieu.title}</Card.Title>
              <Card.Text className={classes.textgioithieu}>
                {gioithieu.content}
              </Card.Text>
              <div className="text-center">
                <Link href={gioithieu.link}><Button variant="success">Bắt đầu <ArrowForwardIcon /></Button></Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        );
    });
  return(
    <React.Fragment>
      <div className={classes.gioithieu}>
        <div className={classes.gachngang}></div>
        <span className={classes.titlegt}>Giới thiệu</span>
      <Container className={classes.hethong}>
      <Row>
        {result}
      </Row>
      </Container>
      </div>
      <div className={classes.slider}>
        <div className={classes.gachngang}></div>
        <span className={classes.titlenx}>Nhận xét của học viên</span>
        <Slider />
      </div>
    </React.Fragment>
  );
}
}
export default withStyles(styleshome)(Gioithieu);
