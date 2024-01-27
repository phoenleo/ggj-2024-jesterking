import { useParams, useNavigate } from 'react-router-dom'

function SpectatorWaitingJesters() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoWaitingVoters = () => navigate('../waiting-voters')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>JOKE SETUP: Cita cita ___</p>
      <p>Waiting Jesters ...</p>
      <button type='button' onClick={gotoWaitingVoters}>
        Refresh
      </button>
    </div>
  )
}

export default SpectatorWaitingJesters;