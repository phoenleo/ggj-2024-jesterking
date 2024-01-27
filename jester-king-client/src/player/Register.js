import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoWaitingPlayer = () => navigate('../waiting-player')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Player Register</p>
      <Form>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Carve your legacy here"
          style={{ width: '150px' }}
        />
      </Form>
      <Button variant='light' size='lg' onClick={gotoWaitingPlayer}>
        As Jester X
      </Button>
      <Button variant='dark' size='lg' onClick={gotoWaitingPlayer}>
        As Jester Y
      </Button>
      <br />
      <Button variant="danger" size="lg" onClick={gotoWaitingPlayer}>
        Submit
      </Button>
    </div>
  )
}

export default Register;