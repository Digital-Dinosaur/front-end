import { Box } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import StoryDisplay from './StoryDisplay';
import NetworkDisplay from './NetworkDisplay';
import { useEffect } from 'react';
import { getProfile } from '../../store/profile';

export default function Explore() {
  const currentStory = useSelector((state) => state.graph.currentStory)

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.signedIn) {
      dispatch(getProfile(auth.id));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '88%',
        margin: 'auto',
        backgroundColor: 'darkgray',
        justifyContent: 'space-evenly',
        padding: '2%',
      }}
    >
      { currentStory ? <StoryDisplay currentStory={currentStory} /> : null}
      <NetworkDisplay />
    </Box>
  );
}
