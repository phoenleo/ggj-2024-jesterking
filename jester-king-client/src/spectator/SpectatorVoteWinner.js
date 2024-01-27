import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function SpectatorVoteWinner() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoNewSession = () => navigate('/')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>JOKE SETUP: Cita cita ___</p>
      <ul>
        <li>Sampah Masyarakat - 70 - (Si A))</li>
      </ul>

      <Button variant='danger' size='lg' onClick={gotoNewSession}>
        New Session
      </Button>
    </div>
  )
}

export default SpectatorVoteWinner;