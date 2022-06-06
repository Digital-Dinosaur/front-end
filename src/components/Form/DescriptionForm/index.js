import * as React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

// some dummy data required to mock the inputs given to the user these will eventually come from the api (possibly)
const categories = ['Horror', 'Sci-Fi', 'Fantasy'];
const colors = ['Blue', 'Green', 'Red', 'Yellow', 'Orange'];

/**
 * @param {*} descriptionHandler
 * function called from the parent component Form/index.js that will update state in the parent component to compile into an api call as well as update the state for page rerenders
 * @returns
 * interacive Component that accepts user input and creates an object for the parent to be used
 */

function DescriptionForm({ descriptionHandler }) {
  const [formData, setFormData] = useState({});

  // dynamically and generically updates the state object to contain the key value pairs gathered from the form. we then call the function passed from
  // the parent in order to update state to aggregate the object for api calls
  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value)
    let store = { ...formData };
    const field = e.target.name;
    const value = e.target.value;
    store[field] = value;
    setFormData(store);
    descriptionHandler(store);
  };
  return (
    <>
      <div>
        <p>Description Form</p>
        <Form className="mt-4" data-testid="desc-form">
          <Row className="g-2">
            <Col>
              <Form.Group controlId="storeName">
                <Form.Control
                  type="text"
                  placeholder="Title"
                  name="label"
                  onChange={handleChange}
                  style={{ height: '58px' }}
                />
              </Form.Group>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelectGrid" label="SELECT">
                <Form.Select name="category" onChange={handleChange}>
                  <option>Categories</option>
                  {categories.map((value, index) => {
                    return (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelectGrid" label="SELECT">
                <Form.Select name="color" onChange={handleChange}>
                  <option>Colors</option>
                  {colors.map((value, index) => {
                    return (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel controlId="floatingTextarea2" label="summary" className="mt-2">
            <Form.Control
              as="textarea"
              placeholder="enter info here"
              name="summary"
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="description"
            className="mt-2"
          >
            <Form.Control
              as="textarea"
              placeholder="enter description here"
              style={{ height: '100px' }}
              name="description"
              onChange={handleChange}
            />
          </FloatingLabel>
        </Form>
      </div>
    </>
  );
}

export default DescriptionForm;
