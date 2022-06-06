import Typography from "@mui/material/Typography";

export default function StoryTitle(props) {
  return <Typography sx={{ textAlign: "right", marginTop: "2%", color: "lightgray" }} data-testid='by'>by {props.penName}</Typography>
}
