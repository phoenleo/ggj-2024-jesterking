import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function SpectatorWaitingJesters() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoWaitingVoters = () => navigate('../waiting-voters')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>JOKE SETUP: Cita cita ___</p>
      <p>Waiting Jesters ...</p>
      <Button variant='danger' size='lg' onClick={gotoWaitingVoters}>
        Refresh
      </Button>
    </div>
  )
}

export default SpectatorWaitingJesters;