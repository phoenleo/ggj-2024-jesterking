import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Register() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoWaitingPlayer = () => navigate('../waiting-player')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Player Register</p>
      <p>Enter Name</p>
      <Button variant="primary" size="lg" onClick={gotoWaitingPlayer}>
        Submit
      </Button>
    </div>
  )
}

export default Register;