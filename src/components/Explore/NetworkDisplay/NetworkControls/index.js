import { Box, Button, MenuItem, Select } from '@mui/material';

export default function NetworkControls() {
  return (
    <Box sx={{ backgroundColor: 'darkslategrey', display: 'flex', flexDirection: 'row' }} data-testid='networkC'>
      {/* <Box>
      <Button>North</Button>
      <Button>East</Button>
      <Button>South</Button>
      <Button>West</Button>
    </Box> */}
      <Box>
        <Button>Travel to</Button>
        <Select label="Region" variant="standard" defaultValue={"none"}>
          <MenuItem value="none" />
          <MenuItem value="sci-fi">Sci-Fi</MenuItem>
          <MenuItem value="fantasy">Fantasy</MenuItem>
          <MenuItem value="medieval">Medieval</MenuItem>
          <MenuItem value="contemporary">Contemporary</MenuItem>
          <MenuItem value="horror">Horror</MenuItem>
          <MenuItem value="surreal">Surreal</MenuItem>
          <MenuItem value="goofy">Goofy</MenuItem>
        </Select>

        <Button>Random Region</Button>
      </Box>
    </Box>
  );
}
