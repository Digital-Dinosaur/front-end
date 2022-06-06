import * as React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { useDispatch } from "react-redux";
import { getNewUser } from "../../../store/auth";
import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({})
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let store = { ...formData };
    const field = e.target.name;
    const value = e.target.value;
    store[field] = value;
    console.log(store);
    setFormData(store);
  };

  // Moved to auth slice
  // async function setUpProfile(data) {

  //   const response = await axios.post('http://localhost:3001/profile/', {
  //     username: data.username,
  //   });
  //   console.log('PROFILE SET: ', response.data);
  // }

  function handleSubmit(e) {
    //call API with the appriate user data object
    e.preventDefault();
    console.log('here I set up a profile')
    // setUpProfile(formData);
    dispatch(getNewUser(formData))
  }

  return (
    <div data-testid='signup'>
      <Container className="w-25 mt-4" style={{ backgroundColor: 'skyblue' }}>
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
              <Form.Group className="mb-3 mt-4" controlId="formBasicPenName">
                <Form.Label>Pen Name</Form.Label>
                <Form.Control type="text" placeholder="Pen Name" name='penName' onChange={handleChange} />
                <Form.Text className="text-muted">
                  This will be displayed as an author on each story
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} />
              </Form.Group>
              <Button onClick={handleSubmit} variant="primary" type="submit" className='mb-4'>
                Submit
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </div>
  )
}

export default SignUp;
