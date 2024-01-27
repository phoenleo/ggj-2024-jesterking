import { useParams, useNavigate } from 'react-router-dom'

function SpectatorWaitingVoters() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoShowVoteResult = () => navigate('../show-vote-result')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>JOKE SETUP: Cita cita ___</p>
      <p>Waiting Voters ...</p>
      <button type='button' onClick={gotoShowVoteResult}>
        Refresh
      </button>
    </div>
  )
}

export default SpectatorWaitingVoters;