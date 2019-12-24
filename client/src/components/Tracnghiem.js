import React,{Component} from 'react';
import { Form,Button} from 'react-bootstrap';
class Tracnghiem extends Component{
  constructor(props)
  {
    super(props)
    this.state={
      cauhoi:{}
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
        console.log(respond)
        this.setState({
          cauhoi:respond
        })
      })
      .catch(err => console.log(err));
  }
  render(){
  return(
    <React.Fragment>
      <Button variant="success" onClick={this.handleClick}>Xác nhận</Button>
      <div id="tl"></div>
    </React.Fragment>
  );
}
}
export default Tracnghiem;