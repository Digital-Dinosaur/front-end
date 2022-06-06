import * as React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { getUser } from "../../../store/auth";
import { useDispatch } from "react-redux"

function SignIn() {
  const [formData, setFormData] = useState({})
  let dispatch = useDispatch();

  const handleChange = (e) => {
    let store = { ...formData };
    const field = e.target.name;
    const value = e.target.value;
    store[field] = value;
    console.log(store);
    setFormData(store);
  };

  function handleSubmit(e){
    e.preventDefault();
    dispatch(getUser(formData))
    //call API with the appriate user data object
    console.log(formData)
  }

  return (
    <div data-testid='signin'>
      <Container className="w-25 mt-4" style={{backgroundColor:'skyblue'}}>
        <Row>
          <Form>
            <Col>
              <Form.Group className="mb-3 mt-4" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter Username" name='username' onChange={handleChange} />
                <Form.Text className="text-muted">
                  We'll never share your Username with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} />
              </Form.Group>
              {/* send proper api request for login */}
              <Button onClick={handleSubmit} variant="primary" type="submit" className='mb-4'>
                Log In!
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </div>
  )
}

export default SignIn;
