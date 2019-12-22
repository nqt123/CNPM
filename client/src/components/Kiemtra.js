import React,{Component} from 'react';
import Menu1 from './Menu1';
import TabKiemtra from './TabKiemtra';
import Footer from './Footer';
class Kiemtra extends Component{
  render(){
  return(
    <React.Fragment>
    	<Menu1 />
    	<TabKiemtra />
    	<Footer />
    </React.Fragment>
  );
}
}
export default Kiemtra;