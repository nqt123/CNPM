import React,{Component} from 'react';
import Menu1 from './Menu1';
import TabKiemtra from './TabKiemtra';
import Footer from './Footer';
class Kiemtra extends Component{
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
    this.render();
}
  render(){
  return(
    <React.Fragment>
    	<Menu1 logout={this.logout} nguoidung={this.state.user}/>
    	<TabKiemtra />
    	<Footer />
    </React.Fragment>
  );
}
}
export default Kiemtra;