import Typography from "@mui/material/Typography";

export default function StoryTitle(props) {
  return <Typography variant="h4" sx={{ marginBottom: "2%" }} data-testid='title'>{props.title}</Typography>
}
