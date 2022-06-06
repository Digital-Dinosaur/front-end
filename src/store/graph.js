import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const sampleData = [
  {
    label: 'The first room',
    username: 'micha',
    penName: 'Michanations',
    id: 1,
    summary: 'A simple room with information placards on one wall.',
    description:
      'This room is completely unadorned, save for a gigantic series of information diagrams on the east wall. There is a single door leading out of the room.',
    group: 'TUTORIAL',
    color: 'blue',
    tooltips: {
      information: 'You can hover over words like this to get more information',
      door: 'This door leads to the next room. Hover over that room in the map view to see what might be inside.',
    },
    neighbors: [1],
  },
  // {
  //   label: 'The second room',
  //   username: 'micha',
  //   penName: 'Michanations',
  //   id: 2,
  //   summary: 'An elaborately decorated room.',
  //   description:
  //     'This room is festooned with gaudy decorations. Nearly every surface is covered with some kind of intricate pattern.',
  //   group: 'TUTORIAL',
  //   color: 'blue',
  //   tooltips: {
  //     decorations: 'Sometimes there will be hidden information in these descriptions',
  //     pattern:
  //       'One repeated motif is a series of colors arranged in a circle, each color signifying a different region of the landscape.',
  //   },
  //   neighbors: [1, 3, 4],
  // },
  // {
  //   label: 'The third room',
  //   username: 'micha',
  //   penName: 'Michanations',
  //   id: 3,
  //   summary: 'A simple room with information placards on one wall.',
  //   description:
  //     'This room is completely unadorned, save for a gigantic series of information diagrams on the east wall. There is a single door leading out of the room.',
  //   group: 'TUTORIAL',
  //   color: 'green',
  //   tooltips: {
  //     information: 'You can hover over words like this to get more information',
  //     door: 'This door leads to the next room. Hover over that room in the map view to see what might be inside.',
  //   },
  //   neighbors: [2],
  // },
  // {
  //   label: 'The other third room',
  //   username: 'micha',
  //   penName: 'Michanations',
  //   id: 4,
  //   summary: 'A simple room with information placards on one wall.',
  //   description:
  //     'This room is completely unadorned, save for a gigantic series of information diagrams on the east wall. There is a single door leading out of the room.',
  //   group: 'TUTORIAL',
  //   color: 'purple',
  //   tooltips: {
  //     information: 'You can hover over words like this to get more information',
  //     door: 'This door leads to the next room. Hover over that room in the map view to see what might be inside.',
  //   },
  //   neighbors: [2],
  // },
];

const initialState = {
  stories: [],
  currentStory: 0,
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
        newState.currentStory = state.stories.find(
          (story) => story.id === id
        );
        // console.log(newState.currentStory);
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

// This is a thunk
export const getAPIStories = (nodeId) => async (dispatch) => {
  //console.log('getAPIStories ', nodeId);
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
  //console.log('getStory ', nodeId);
  if (_validateId(nodeId)) {
    try {
      const response = await axios(`${API_URL}/story/${nodeId}`)
      console.log('response ', response.data)
      dispatch(setCurrent(response.data));
    } catch (e) {
      console.error(e);
    }
  }
}

function _validateId(nodeId) {
  //console.log(nodeId);
  if (!nodeId || typeof nodeId !== 'number') {
    console.error('Invalid node id');
    return false;
  } else {
    return true;
  }
}
