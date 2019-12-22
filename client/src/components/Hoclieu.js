import React,{Component} from 'react';
import Menu1 from './Menu1';
import LoaiDethi from './LoaiDethi';
import {Container} from 'react-bootstrap';
import Footer from './Footer';
class Hoclieu extends Component{
  render(){
  return(
    <React.Fragment>
    	<Menu1 />
    	<Container>
      		<LoaiDethi />
      	</Container>
      	<Footer />
    </React.Fragment>
  );
}
}
export default Hoclieu;