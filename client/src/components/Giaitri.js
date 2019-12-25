import React,{Component} from 'react';
import './../App.css';
import {Tab,Row,Col,Nav,Form} from 'react-bootstrap';
import Menu from './Menu1.js';
class Giaitri extends Component{
	constructor(props)
	{
		super(props);
		this.state={
			models:[],
			url:'',
			user:{}
		}
	}
	componentDidMount()
	{
		if (typeof(Storage) !== "undefined") {
			this.setState({
			      user:JSON.parse(localStorage.getItem('taikhoan'))
			    });
		}
		fetch('http://localhost:5000/threeDs',{
      		method: 'GET',
      		headers: {
       		 'Content-Type': 'application/json',
      }
    }).then(res => res.json())
      .then(respond => {
        this.setState({
        	models : respond
        })
      })
      .catch(err => console.log(err));
	}
	logout=()=>{
	localStorage.removeItem('taikhoan');
    this.setState({
      user: ""
    });
    this.props.history.push("/");
    this.render();
  }
  render(){
  	const listOfModels = this.state.models.map((model, index)=>{
  		return (
  			<Nav.Item key={index}>
              <Nav.Link eventKey={index} className="bai">{model.title}</Nav.Link>
            </Nav.Item>
  		)
  	})
  	  	const listOfPanels = this.state.models.map((panel, index)=>{
  		return (
  			        <Tab.Pane eventKey={index} key={index}>
        				<div class="sketchfab-embed-wrapper">
    					<iframe title="A 3D model" className="dohoa" src={panel.url} frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
						</div>
       				 </Tab.Pane>
  		)
  	})
  return(
    <React.Fragment>
    <Menu logout={this.logout} nguoidung={this.state.user}/>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={4} className="traitabbaigiangs">
          <Nav variant="pills" className="flex-column">
          	{listOfModels}
          </Nav>
        </Col>
        <Col sm={8} className="phaitabbaigiang">
         <Tab.Content >
         	{listOfPanels}
          </Tab.Content>
        </Col>
      </Row>
      </Tab.Container>
    </React.Fragment>
  );
}
}
export default Giaitri;