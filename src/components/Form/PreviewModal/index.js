import { Modal } from 'react-bootstrap'
import StoryDisplay from '../../Explore/StoryDisplay'

/**
 * 
 * @param {*} props
 * data entered into the form that was ggregated in the parent component Form/index.js
 * @returns 
 * Modal popup that displayes a preview of what the site might look like after the form is complete and the submission is in.
 */
function PreviewModal(props) {

  //handle show and close


  return (
    <div data-testid="prev-modal">
      <Modal show={props.show} onHide={props.handleClose} data-testid="prev-modal">
        <Modal.Header closeButton>
          <Modal.Title>PREVIEW</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StoryDisplay currentStory={props.currentStory} />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default PreviewModal;