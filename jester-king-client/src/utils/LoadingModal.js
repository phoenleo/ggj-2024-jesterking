import Modal from 'react-bootstrap/Modal';

function LoadingModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop='static'
      keyboard={false}
    >
      <Modal.Body>
        Loading ...
      </Modal.Body>
    </Modal>
  );
}

export default LoadingModal