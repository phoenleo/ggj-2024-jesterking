import { useParams, useNavigate } from 'react-router-dom'

function FinishSubmit() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoNewSession = () => navigate('/')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Finish Submit</p>
      <p>JOKE SETUP: Cita cita ___</p>
      <p>PUNCHLINE OPTIONS:</p>
      <ul>
        <li>Sampah Masyarakat</li>
      </ul>

      <button type='button' onClick={gotoNewSession}>
        New Session
      </button>
    </div>
  )
}

export default FinishSubmit;