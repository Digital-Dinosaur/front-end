import Box from "@mui/material/Box";
import StoryTitle from "./StoryTitle";
import StoryView from "./StoryView";
import ByLine from "./ByLine";


export default function StoryDisplay(props) {
  // const currentStory = useSelector((state) => state.graph.currentStory)
  console.log(props.currentStory);
  return (
    <Box id="story-display" sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "darkslategray",
      color: "whitesmoke",
      maxWidth: "40%",
      margin: "2%",
      padding: "2%",
      textAlign: "left",
    }}>
      <StoryTitle title={props.currentStory.label} />
      <StoryView description={props.currentStory.description} tooltips={props.currentStory.tooltips} />
      <ByLine penName={props.currentStory.penName} />
    </Box>
  );
}
