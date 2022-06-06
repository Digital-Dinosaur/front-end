import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const initialState = {
  stories: [],
  currentStory: 0, // This will store all the data for the current story, not just an index number
};

const graphSlice = createSlice({
  name: 'graph',
  initialState: initialState,
  reducers: {
    setCurrent(state, action) {
      let id;
      if (typeof action.payload !== 'number') id = action.payload.id;
      else id = action.payload;

      if (_validateId(id)) {
        let newState = { ...state };
        newState.currentStory = state.stories.find((story) => story.id === id);
        return { ...state, ...newState };
      } else {
        return state;
      }
    },
    setStories(state, action) {
      console.log('Setting stories from API', action.payload);
      return { ...state, stories: [...action.payload] };
    },
  },
});

export const { setCurrent, setStories } = graphSlice.actions;

export default graphSlice;

// Thunk for getting story data from the API
export const getAPIStories = (nodeId) => async (dispatch) => {
  if (_validateId(nodeId)) {
    try {
      const response = await axios.get(`${API_URL}/graph/${nodeId}`);
      dispatch(setStories(response.data));
    } catch (e) {
      console.error(e);
    }
  }
};

export const getStory = (nodeId) => async (dispatch) => {
  if (_validateId(nodeId)) {
    try {
      const response = await axios.get(`${API_URL}/story/${nodeId}`);
      console.log('response ', response.data);
      dispatch(setCurrent(response.data));
    } catch (e) {
      console.error(e);
    }
  }
};

function _validateId(nodeId) {
  //console.log(nodeId);
  if (!nodeId || typeof nodeId !== 'number') {
    console.error('Invalid node id');
    return false;
  } else {
    return true;
  }
}
