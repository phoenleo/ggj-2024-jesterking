import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ErrorModal(props) {
  if (!props.error) return null
  
  const { message, statusCode } = props.error.response.data

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          ERROR - { statusCode }
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        { message }
      </Modal.Body>
      
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal