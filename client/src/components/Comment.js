import React,{Component} from 'react';
import { Button ,Form,Container} from 'react-bootstrap';
import './../App.css';
class Comment extends Component{
  render(){
  return(
    <React.Fragment>
      <Container>
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
