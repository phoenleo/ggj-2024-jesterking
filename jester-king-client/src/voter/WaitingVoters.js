import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function WaitingVoters() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoVoteResult = () => navigate('../vote-result')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Waiting Voters</p>
      <Button variant='primary' size='lg' onClick={gotoVoteResult}>
        Refresh
      </Button>
    </div>
  )
}

export default WaitingVoters;