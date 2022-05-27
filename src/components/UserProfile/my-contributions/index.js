//component for rendering the list of contributions a user has made
// IMPORTS: from MUI Accordian component
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react'

/**
 * 
 * @param {*} props 
 * Takes in data to be rendered in component 
 * @returns
 * component with rendered data from props
 *  
 */


function Contributions(props) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className='mt-4' style={{ border: 'solid 3px black' }} data-testid='contributions'>
      <p>My Contributions:</p>
      <div className='m-4'>
        {/* insert map here to iterate over data and populate data correctly 
          props.data.map((value)=>{})
        */}
        {props.contributions.map((value, index) => {
          return(<Accordion expanded={expanded === value.toString()} onChange={handleChange(value.toString())} key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>{value}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We need to figure out how to get the story information to here. The users input from the form.
              </Typography>
            </AccordionDetails>
          </Accordion>
        )})}
      </div>
    </div>
  )
}

export default Contributions;
