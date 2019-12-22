import React,{Component} from 'react';
import { Form,Button} from 'react-bootstrap';
const tracnghiems=[
{
  id:1,
  question:"1+1=...",
  A:'1',
  B:'2',
  C:'3',
  D:'4',
  dapan:'2'
},
{
  id:2,
  question:"2+1=...",
  A:'1',
  B:'2',
  C:'3',
  D:'4',
  dapan:'3'
}
]
class Tracnghiem extends Component{
  handleClick=()=>{
    var dem=0,dapan="";
    for(let i=0;i<tracnghiems.length;i++)
    {
      var checkbox=document.getElementsByName(tracnghiems[i].id);
      for (let j = 0; j < checkbox.length; j++){
        if (checkbox[j].checked == true){
              dapan=checkbox[j].value;
        }
      }
      if(dapan==tracnghiems[i].dapan)
        dem++;
      document.getElementById('tl').innerHTML="Số câu trả lời đúng: "+dem;
    }
}
  render(){
    var result=tracnghiems.map((tracnghiem,index)=>{
      return(
        <div key={index}>
        <h5>{tracnghiem.question}</h5>
        <Form.Check
          type="radio"
          label={tracnghiem.A}
          name={tracnghiem.id}
          value={tracnghiem.A}
        />
        <Form.Check
          type="radio"
          label={tracnghiem.B}
          name={tracnghiem.id}
          value={tracnghiem.B}
        />
        <Form.Check
          type="radio"
          label={tracnghiem.C}
          name={tracnghiem.id}
          value={tracnghiem.C}
        />
        <Form.Check
          type="radio"
          label={tracnghiem.D}
          name={tracnghiem.id}
          value={tracnghiem.D}
        />
        </div>
      );
    })
  return(
    <React.Fragment>
      {result}
      <Button variant="success" onClick={this.handleClick}>Xác nhận</Button>
      <div id="tl"></div>
    </React.Fragment>
  );
}
}
export default Tracnghiem;