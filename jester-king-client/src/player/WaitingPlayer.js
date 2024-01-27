import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function WaitingPlayer() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoSubmitPunchline = () => navigate('../submit-punchline')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Waiting Other Player</p>
      <button type='button' onClick={gotoSubmitPunchline}>
        Refresh
      </button>
    </div>
  )
}

export default WaitingPlayer;