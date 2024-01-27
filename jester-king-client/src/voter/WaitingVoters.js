import { useParams, useNavigate } from 'react-router-dom'

function WaitingVoters() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoVoteResult = () => navigate('../vote-result')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Waiting Voters</p>
      <button type='button' onClick={gotoVoteResult}>
        Refresh
      </button>
    </div>
  )
}

export default WaitingVoters;