import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

export default function StoryView(props) {
  let description = props.description;
  let previousIndex = 0;
  let keys = props?.tooltips ? Object.keys(props.tooltips) : [];
  let slices = []

  for (let i = 0; i < keys.length; i++) {
    let keyword = keys[i];
    let regExp = new RegExp(keyword, 'g');
    if (!regExp.test(description)) continue;

    let keywordIndex = description.indexOf(keyword)
    slices.push(description.slice(previousIndex, keywordIndex));
    slices.push(keyword);
    previousIndex = keywordIndex + keyword.length;
  }
  slices.push(description.slice(previousIndex));

  let tippedDescription = [];
  slices.forEach((slice) => {

    if (keys.includes(slice)) {
      tippedDescription.push(<Tooltip title={props.tooltips[slice]}><Typography sx={{ display: "inline" }}>{slice}</Typography></Tooltip>)
    } else {
      tippedDescription.push(slice);
    }
  })

  return (
    <div id="tipped-description" data-testid='storyview'>
      {tippedDescription}
    </div>
  );
}
