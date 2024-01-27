import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function WaitingJesters() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoSubmitVote = () => navigate('../submit-vote')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Waiting Jesters</p>
      <Button variant='danger' size='lg' onClick={gotoSubmitVote}>
        Refresh
      </Button>
    </div>
  )
}

export default WaitingJesters;