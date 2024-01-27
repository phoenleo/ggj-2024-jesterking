import { useParams, useNavigate } from 'react-router-dom'

function Register() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoWaitingPlayer = () => navigate('../waiting-player')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Player Register</p>
      <p>Enter Name</p>
      <button type='button' onClick={gotoWaitingPlayer}>
        Submit
      </button>
    </div>
  )
}

export default Register;