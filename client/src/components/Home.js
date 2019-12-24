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
      display:true,
      user:{}
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
      if (typeof(Storage) !== "undefined") {
      this.setState({
            user:JSON.parse(localStorage.getItem('taikhoan'))
          });
      } 
  }  
  nav = React.createRef();
  
  handleScroll = () => {
    var top = window.scrollY;
    if(top>20)
    {
      this.setState({
        display:false
      });
    }
    else
    {
      this.setState({
        display:true
      })
    } 
  };

  logout=()=>{
    localStorage.removeItem('taikhoan');
    this.setState({
      user: ""
    });
    this.props.history.push("/");
    this.render();
  }
  render(){
  	var {classes}=this.props;
    var result=this.state.display  ? <Menu logout={this.logout} nguoidung={this.state.user}/>:<Menu1 logout={this.logout} nguoidung={this.state.user}/>
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
