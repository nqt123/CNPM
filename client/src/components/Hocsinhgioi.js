import React,{Component} from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {Row,Col} from 'react-bootstrap';
import './../App.css';
import anh1 from './../images/anh1.jpg';
import anh2 from './../images/anh2.jpg';
import anh3 from './../images/anh3.jpg';
class Hocsinhgioi extends Component{
  render(){
  return(
    <React.Fragment>
    	<Container className="hsg">
    		<div className="gachngang"></div>
    		<span className="titlehsg">Học viên ưu tú</span>
    		<Box className="loigioithieu">
    		Đây là danh sách những học sinh, sinh viên đã trải qua khóa học của chúng tôi 
    		và đạt được những thành tích rất tốt trong môn Sinh học. Hi vọng các bạn học viên đến với trang Wed
    		sẽ đạt được những kết quả tốt nhất
    		</Box>
    	</Container>
    	<Container>
    	<Row>
    	<Col>
    	<figure class="snip1482">
		  <figcaption>
		    <h6>Nguyễn Tiến Thắng</h6>
		    <p>- Thủ khoa đầu vào Đại học Y Hà Nội<br />
		    - Huy chương đồng Olympic Sinh học</p>
		  </figcaption>
		  <a></a><img src={anh1} alt="sample45" />
		</figure>
		</Col>
		<Col>
		<figure class="snip1482">
		  <figcaption>
		    <h6>Nguyễn Quý Thắng</h6>
		    <p>- Huy chương vàng quốc tế sinh học 2018<br />
		    - Huy chương vàng sinh học quốc gia 2017</p>
		  </figcaption>
		  <a></a><img src={anh2} alt="sample45" />
		</figure>
		</Col>
		<Col>
		<figure class="snip1482">
		  <figcaption>
		    <h6>Nguyễn Thị Kim Chi</h6>
		    <p>- Thủ khoa Đại học khối A năm 2018<br />
		    - Thủ khoa Đại học khối B năm 2018</p>
		  </figcaption>
		  <a></a><img src={anh3} alt="sample45" />
		</figure>
		</Col>
		<Col>
		<figure class="snip1482 cuoi">
		  <figcaption>
		    <h6>Nguyễn Trung Lộ</h6>
		    <p>- Thủ khoa đầu vào Đại học Y HCM<br />
		    - Khuyến khích sinh học 2018</p>
		  </figcaption>
		  <a></a><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample45.jpg" alt="sample45" />
		</figure>
		</Col>
		</Row>
		</Container>
    </React.Fragment>
  );
}
}
export default Hocsinhgioi;