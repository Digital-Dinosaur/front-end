// IMPORTS: from MUI Accordian component
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react'
import Container from 'react-bootstrap/Container'

/**
 * 
 * @param {*} props 
 * takes in relevant data (graph information)
 * @returns 
 * component with visualization rendered to the user 
 */
function Recents(props) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className='mt-4' style={{ height: '500px', border: 'solid 3px black' }} data-testid='recents'>
      <p>My History:</p>
      <div className='w-75 h-75' style={{ backgroundColor: 'skyblue', justifyContent: 'center', margin: 'auto' }}>
        <Container className="p-4">
          { props.recents ? props.recents.map((story, index) => {
            return (
              <Accordion expanded={expanded === story.id} onChange={handleChange(story.id)} key={`${story.id}-${index}`}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: '66%', flexShrink: 0 }}>{story.label}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {story.group}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            )
          }): null}
        </Container>
      </div>
    </div>
  )
}

export default Recents;
