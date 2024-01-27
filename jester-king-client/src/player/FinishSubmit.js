import { useParams } from 'react-router-dom'

function FinishSubmit() {
  let { sessionId } = useParams()

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Finish Submit</p>
      <p>JOKE SETUP: Cita cita ___</p>
      <p>PUNCHLINE OPTIONS:</p>
      <ul>
        <li>Sampah Masyarakat</li>
      </ul>
    </div>
  )
}

export default FinishSubmit;