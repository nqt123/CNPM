import React,{Component} from 'react';
import Menu1 from './Menu1';
import LoaiDethi from './LoaiDethi';
import {Container} from 'react-bootstrap';
import Footer from './Footer';
class Hoclieu extends Component{
   constructor(props)
  {
    super(props);
    this.state={
      user:{}
    }
  }
  componentDidMount(){
    if (typeof(Storage) !== "undefined") {
      this.setState({
            user:JSON.parse(localStorage.getItem('taikhoan'))
          });
    }
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
  return(
    <React.Fragment>
    	<Menu1 logout={this.logout} nguoidung={this.state.user}/>
    	<Container>
      		<LoaiDethi />
      	</Container>
      	<Footer />
    </React.Fragment>
  );
}
}
export default Hoclieu;