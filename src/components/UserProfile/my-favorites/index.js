//component for list of favorite contributions the user has saved

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
 * takes in data to be rendered in accordian  
 * @returns 
 * component with rendered data from props
 * 
 */

const favorites = [
  {
    title: 'Fantasy space ride!',
    category: 'Fantasy'
  },
  {
    title: 'Five Night\'s at Freddy\'s',
    category: 'Horror'
  },
  {
    title: 'The Land Before Time - Little Foot goes to college',
    category: 'Adventure'
  }
]
function Favorites(props) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className='mt-4' style={{ height: '500px', border: 'solid 3px black' }} data-testid='favorites'>
      <p>My Favorites:</p>
      <div className='m-4'>
        {/* insert map here to iterate over data and populare accordians appriopriatley
          props.data.map((value)=>{})
        */}
        {favorites.map((value, index) => {
          return (<Accordion expanded={expanded === value.title.toString()} onChange={handleChange(value.title.toString())} key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: '66%', flexShrink: 0 }}>{value.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {value.category}
              </Typography>
            </AccordionDetails>
          </Accordion>
          )
        })}
      </div>
    </div>
  )
}

export default Favorites;
