import React,{Component} from 'react';
import { Form,Button} from 'react-bootstrap';
class Contact extends Component
{
    render()
    {
    return(
        <React.Fragment >
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
        <Form className="mt-5">
            <h1>Contact With Us</h1>
        <Form.Label>Name</Form.Label>
    <Form.Control size="text" type="text" placeholder="Large text" />     
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />

    
  </Form.Group>

  
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
    </div>
        </React.Fragment>
    );
}
}

export default Contact;