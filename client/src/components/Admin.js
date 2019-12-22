import React,{Component} from 'react';
import { Tab,Row,Col,Nav} from 'react-bootstrap';
import './../App.css';
class TabBaigiang extends Component{
  render(){
  return(
    <div className="tabbaigiang">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={4} xs={12} className="traitabbaigiang" id="changescroll">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="1" className="bai">ABC</Nav.Link>
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
          </Nav>
        </Col>
        <Col sm={8} xs={12} className="phaitabbaigiang">
          <Tab.Content >
            <Tab.Pane eventKey="1">
              
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
export default TabBaigiang;