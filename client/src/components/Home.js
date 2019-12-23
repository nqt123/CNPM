import React,{Component} from 'react';
import Menu from './Menu';
import Menu1 from './Menu1';
import { withStyles } from '@material-ui/core/styles';
import styleshome from './../styleshome.js';
import Box from '@material-ui/core/Box';
import Gioithieu from './Gioithieu';
import Footer from './Footer';
import Hocsinhgioi from './Hocsinhgioi';
class Home extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      display:true
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }  
  nav = React.createRef();
  
  handleScroll = () => {
    var top = window.scrollY;
    if(top>20)
    {
      this.setState({
        display:false
      })
    }
    else
    {
      this.setState({
        display:true
      })
    } 
  };
  render(){
  	var {classes,location}=this.props;
    var result=this.state.display ? <Menu nguoidung={location.state}/>:<Menu1/>
  return(
    <React.Fragment>
    	<div className={classes.paper}>
        {result}
    		<Box className={classes.tieude}>Ngày mai sẽ khác</Box>
    		<Box letterSpacing={3} fontSize={20} className={classes.chitiet}>Tham gia để có kiến thức vững vàng trong môn Sinh học 10</Box>
			</div>
      <Hocsinhgioi />
      <Gioithieu />
    	<Footer />
    </React.Fragment>
  );
}
}
export default withStyles(styleshome)(Home);
