import React,{Component} from 'react';
import Menu1 from './Menu1';
import Footer from './Footer';
import TabBaigiang from './Tabbaigiang';
class Baigiang extends Component{
  render(){
  return(
    <React.Fragment>
    	<Menu1/>
    	<TabBaigiang />
    	<Footer />
    </React.Fragment>
  );
}
}
export default Baigiang;