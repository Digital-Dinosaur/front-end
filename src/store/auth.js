import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const storedAuth = JSON.parse(localStorage.getItem('auth'));
const initialState = storedAuth || {
  username: '',
  password: '', 
  token: '',
  role: '',
  signedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    //function to set user
    setUser(state, action){
      let newState = { ...state, ...action.payload, signedIn: true };
      localStorage.setItem('auth', JSON.stringify(newState));
      return newState;
    },
    // Logout function goes here, make sure to clear local storage
    logOutUser(state, action){
    let logoutState = {...state, ...initialState};
    localStorage.clear('auth');
    return logoutState;
    },
  }
})

// Thunk function to send user login through the signin route
export const getUser = (userData) => async(dispatch) => {
  if (userData.password && userData.username) {
    let response = await axios.post(`${API_URL}/signin`, {}, {
      auth: {
        username: userData.username, 
        password: userData.password,
      },
    });
    dispatch(setUser(response.data));
    console.log(response.data);
  } else {
    console.log('bad username')
  }
}

// Thunk to send new user data to both signup route and profile route
export const getNewUser = (userData) => async(dispatch) => {
  if (userData.password && userData.username) {
    let signupResponse = await axios.post(`${API_URL}/signup`, {
      username: userData.username, 
      password: userData.password,
    });
    let profileResponse = await axios.post(`${API_URL}/profile`, {
      username: signupResponse.data.username,
      history: [],
      favorites: [],
      contributions: []
    });
    dispatch(setUser(signupResponse.data));
    console.log(signupResponse.data);
    console.log(profileResponse.data);
  }
}

export const { setUser } = authSlice.actions;
export const { logOutUser } = authSlice.actions;

export default authSlice;
