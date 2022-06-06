import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {
      username: '',
      history: [],
      favorites: [],
      contributions: [],
    },
    historyStories: [], // Array of full story data
    favoritesStories: [], // Array of full story data
    contributionsStories: [], // Array of full story data
  },
  reducers: {
    setProfile(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export default profileSlice;

export const { setProfile } = profileSlice.actions;

// THUNK
export const getProfile = (profileId) => async (dispatch, getState) => {
  // console.log('checking profile id ', profileId);
  if (profileId) {
    try {
      let profileData = await axios.get(`${API_URL}/profile/${profileId}`);

      let profile = profileData.data;

      let historyStories = await _getStoriesFromArray(profile.history);
      let favoritesStories = await _getStoriesFromArray(profile.favorites);
      let contributionsStories = await _getStoriesFromArray(profile.contributions);

      dispatch(
        setProfile({ profile, historyStories, favoritesStories, contributionsStories }),
      );
    } catch (e) {
      console.error(e);
    }
  }
};

export const pushContributionsArray = (storyId) => async (dispatch, getState) => {
  const { profile, auth } = getState();
  const profileId = profile.profile.id;
  const newContributions = [storyId, ...profile.profile.contributions];
  const newData = { contributions: newContributions };
  if (profileId) {
    try {
      console.log('Updating profile array:', storyId);
      let response = await axios.put(`${API_URL}/profile/${profileId}`, newData, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });

      dispatch(setProfile({ profile: response.data }));
    } catch (e) {
      console.error(e);
    }
  }
};

export const pushHistoryArray = (storyId) => async (dispatch, getState) => {
  const { profile, auth } = getState();
  const profileId = profile.profile.id;
  const newArray = [storyId, ...profile.profile.history];
  if (newArray.length > 5) {
    newArray.pop();
  }
  const newData = { history: newArray };
  if (profileId) {
    try {
      console.log('Updating profile array:', storyId);
      let response = await axios.put(`${API_URL}/profile/${profileId}`, newData, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });

      dispatch(setProfile({ profile: response.data }));
    } catch (e) {
      console.error(e);
    }
  }
};

// Helper function
async function _getStoriesFromArray(storyIdArray) {
  let storyRecords = [];
  for (let storyId of storyIdArray) {
    storyId = parseInt(storyId);
    const storyRecord = await axios.get(`${API_URL}/story/${storyId}`);
    storyRecords.push(storyRecord.data);
  }
  return storyRecords;
}
