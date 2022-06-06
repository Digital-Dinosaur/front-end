import DescriptionForm from './DescriptionForm';
import ToolTipForm from './TooltipForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import PreviewModal from './PreviewModal';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, pushContributionsArray } from '../../store/profile';
import { Typography } from '@mui/material';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

/**
 * @returns
 * a form component that accepts user input and creates an object to be sent to the api
 * the object is aggregated data from 2 forms, one bein the tooltips form and the other being the descriptions form
 *
 * calls api with object
 */
function Form() {
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.signedIn) {
      dispatch(getProfile(auth.id));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //state for description form
  const [descriptions, setDescriptions] = useState({
    category: 'Horror',
    color: 'Blue',
    description: 'stuff',
    summary: 'more stuff',
    label: 'this is label',
  });

  //state for tooltip form
  const [tooltip, setTooltip] = useState({
    key: 'stuff',
    text: 'this is the value',
    keys: [
      {
        key: 'key',
        value: 'value',
      },
    ],
  });

  //state for preview modal
  const [show, setShow] = useState(false);

  if (!auth.signedIn) {
    return (
      <Typography variant="h3" component="div" gutterBottom>
        Please sign in
      </Typography>
    );
  }
  //function to handle submit to API
  async function onSumbit(e) {
    let object = {
      label: descriptions.label,
      username: profile?.profile.username,
      penName: profile?.profile.username,
      summary: descriptions.summary,
      description: descriptions.description,
      group: descriptions.category.toLocaleLowerCase(),
      color: descriptions.color,
      tooltips: tooltip.toolTipList,
    };
    try {
      const response = await axios.post(`${API_URL}/story`, object, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      // const profileData = {contributions: [...profile.profile.contributions, String(response.data.id)]};
      dispatch(pushContributionsArray(String(response.data.id)));
      console.log(response);
      // STRETCH TODO: switch to the explore view on the newly created story on submission
    } catch (e) {
      console.error(e);
    }
  }

  //function to handle the description form and the state updates
  //something being whatever we return from the form
  function descriptionHandler(formData) {
    setDescriptions(formData);
    // console.log('state-d:', descriptions)
  }

  //function to handle the tooltip form and the state updates
  function tooltipHandler(something) {
    setTooltip(something);
    console.log('state-tt:', tooltip);
  }

  //functions to toggle showing modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let currentStory = {
    label: descriptions.label,
    username: 'micha',
    penName: 'Michanations',
    id: 10001,
    summary: descriptions.summary,
    description: descriptions.description,
    category: descriptions.category,
    color: descriptions.color,
    tooltips: tooltip.toolTipList || [],
  };
  console.log(currentStory);

  return (
    <Container style={{ marginTop: '75px' }}>
      <Row>
        <Col className="w-75 m-4" style={{ backgroundColor: 'lightblue' }}>
          <DescriptionForm descriptionHandler={descriptionHandler} />
        </Col>
        <Col className="w-25 m-4" style={{ backgroundColor: 'lightgreen' }}>
          <ToolTipForm tooltipHandler={tooltipHandler} />
        </Col>
      </Row>
      <Button className="m-4" variant="contained" onClick={handleShow}>
        Preview
      </Button>
      <PreviewModal currentStory={currentStory} handleClose={handleClose} show={show} />
      <Button className="m-4" variant="contained" onClick={onSumbit}>
        Submit
      </Button>
    </Container>
  );
}

export default Form;
