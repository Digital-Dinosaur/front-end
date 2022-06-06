import * as React from "react";
import { useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from "@mui/material/IconButton";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/**
 * 
 * @param {*} tooltipHandler
 * function called from the parent component Form/index.js that will update state in the parent component to compile into an api call as well as update the state for page rerenders
 * @returns 
 * interacive Component that accepts user input and creates an object for the parent to be used
 */

function ToolTipForm({ tooltipHandler }) {
  //states required to stimulate page refreshes on data updates
  const [toolTipData, setToolTipData] = useState({});
  const [toolTipList, setToolTipList] = useState({});

  //function to dynamically and generically handle the changing of inputs on our form, by setting the field and value agnostically 
  function handleChangeToolTip(e) {
    let toolTip = { ...toolTipData };
    const field = e.target.name;
    const value = e.target.value;
    toolTip[field] = value;
    setToolTipData(toolTip);
    tooltipHandler(toolTip);
  }

  //handles the submission of the data on the form 
  function handleSubmit(e) {
    e.preventDefault();
    const key = toolTipData.key;
    const value = toolTipData.text;
    toolTipList[key] = value;
    setToolTipData({...toolTipData, toolTipList})
    tooltipHandler({...toolTipData, toolTipList})
  }
  
  // function checks data and returns all data that does not match the deleted item, effectivly deleting the data.
  function handleDelete(e, givenKey){
    e.preventDefault();
    let newObj = {}
    Object.entries(toolTipList).forEach(([key, value]) => {
      if (givenKey !== key){
        newObj[key] = value
      }
    })
    setToolTipList(newObj)
    // need to debug how state is being passed to StoryDisplay
    tooltipHandler({...toolTipData, toolTipList: newObj})
  }



  return (
    <div id="tooltip-form" data-testid='tooltip'>
      <h1>Tooltip Form</h1>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="storeName">
              <Form.Control
                type="text"
                placeholder="Key"
                name="key"
                onChange={handleChangeToolTip}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="storeName">
              <Form.Control
                type="text"
                placeholder="Text"
                name="text"
                onChange={handleChangeToolTip}
              />
            </Form.Group>
          </Col>
          <Col>
            <IconButton onClick={handleSubmit}>
              <AddCircleIcon color="success" fontSize="large" />
            </IconButton>
          </Col>
        </Row>
        <List>
          {Object.entries(toolTipList).map(([key, value]) => {
            return (
              <ListItem>
                <ListItemText>{`${key}: ${value}`}</ListItemText>
                <IconButton onClick={(e) => handleDelete(e, key)} >
                  <DeleteForeverIcon />
                </IconButton>
              </ListItem>
            );
          })}
        </List>
      </Form>
    </div>
  );
}

export default ToolTipForm;
