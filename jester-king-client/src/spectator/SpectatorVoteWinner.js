import { useParams, useNavigate } from 'react-router-dom'

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

      <button type='button' onClick={gotoNewSession}>
        New Session
      </button>
    </div>
  )
}

export default SpectatorVoteWinner;