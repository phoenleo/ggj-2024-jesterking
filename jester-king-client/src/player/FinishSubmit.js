import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

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

      <Button variant="danger" size="lg" onClick={gotoNewSession}>
        New Session
      </Button>
    </div>
  )
}

export default FinishSubmit;