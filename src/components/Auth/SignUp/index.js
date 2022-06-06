import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { getNewUser } from '../../../store/auth';

function SignUp() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let store = { ...formData };
    const field = e.target.name;
    const value = e.target.value;
    store[field] = value;
    console.log(store);
    setFormData(store);
  };

  function handleSubmit(e) {
    //call API with the appropriate user data object
    e.preventDefault();
    dispatch(getNewUser(formData));
  }

  return (
    <div data-testid="signup">
      <Container className="w-25 mt-4" style={{ backgroundColor: 'skyblue' }}>
        <Row>
          <Form>
            <Col>
              <Form.Group className="mb-3 mt-4" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Enter Username"
                  name="username"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your Username with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 mt-4" controlId="formBasicPenName">
                <Form.Label>Pen Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Pen Name"
                  name="penName"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  This will be displayed as an author on each story
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                onClick={handleSubmit}
                variant="primary"
                type="submit"
                className="mb-4"
              >
                Submit
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
