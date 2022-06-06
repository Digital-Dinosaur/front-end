import NetworkView from "./NetworkView";
import NetworkControls from "./NetworkControls";
import { Box } from "@mui/material";

export default function NetworkDisplay() {
  return (<Box sx={{
    display: "flex",
    flexDirection: "column",
    maxWidth: "32%",
    margin: "1%"
  }}>
    <NetworkView />
    <NetworkControls />
  </Box>
  )
}
