import { Typography, Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAPIStories, getStory } from "../../../../store/graph";
import GraphDisplay from "../../../GraphDisplay";

export default function NetworkView() {
  const currentStory = useSelector((state) => state.graph.currentStory);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAPIStories(1)).then(() => { dispatch(getStory(1)) });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    currentStory ? (<Box sx={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "darkslategray",
    }}>
      <Typography>{currentStory.group}</Typography>
      <GraphDisplay />
    </Box>) :
      <div data-testid='networkV'></div>);
}
