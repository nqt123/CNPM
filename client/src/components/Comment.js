import React,{Component} from 'react';
import { Button ,Form,Container} from 'react-bootstrap';
import './../App.css';
class Comment extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      comments:{}
    }
  }
  render(){
  return(
    <React.Fragment>
      <Container className="comment">
      <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <textarea name="message" rows="3" width="100%" className="noidungcm">
        </textarea>
      </Form.Group>
      <Button variant="success" type="submit" className="btn">
          Bình luận
      </Button>
      </Form>
      </Container>
    </React.Fragment>
  );
}
}
export default Comment;
