import React,{Component} from 'react';
import './../App.css';
class Tags extends Component{
  render(){
  return(
    <React.Fragment>
    	<p>Tag: <span className="tags">Tế bào</span><span className="tags">Hóa học</span></p>
    </React.Fragment>
  );
}
}
export default Tags;