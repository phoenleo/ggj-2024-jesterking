import { useParams, useNavigate } from 'react-router-dom'

function WaitingJesters() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoSubmitVote = () => navigate('../submit-vote')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Waiting Jesters</p>
      <button type='button' onClick={gotoSubmitVote}>
        Refresh
      </button>
    </div>
  )
}

export default WaitingJesters;