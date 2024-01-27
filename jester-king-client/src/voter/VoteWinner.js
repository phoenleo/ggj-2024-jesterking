import { useParams, useNavigate } from 'react-router-dom'

function VoteWinner() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoNewSession = () => navigate('/')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Submit Punchline</p>
      <p>JOKE SETUP: Cita cita ___</p>
      <ul>
        <li>Sampah Masyarakat - Si A - 100</li>
      </ul>
      
      <button type='button' onClick={gotoNewSession}>
        New Session
      </button>
    </div>
  )
}

export default VoteWinner;