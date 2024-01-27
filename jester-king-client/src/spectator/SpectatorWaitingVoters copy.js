import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function SpectatorWaitingVoters() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoShowVoteResult = () => navigate('../show-vote-result')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>JOKE SETUP: Cita cita ___</p>
      <p>Waiting Voters ...</p>
      <Button variant='danger' size='lg' onClick={gotoShowVoteResult}>
        Refresh
      </Button>
    </div>
  )
}

export default SpectatorWaitingVoters;