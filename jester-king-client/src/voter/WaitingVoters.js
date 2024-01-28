import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function WaitingVoters() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoNewSession = () => navigate('/')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Thank You for Voting</p>
      <Button variant='danger' size='lg' onClick={gotoNewSession}>
        New Session
      </Button>
    </div>
  )
}

export default WaitingVoters;