import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function CreateSession() {
  const [sessionId, setSessionId] = useState([]);
  const navigate = useNavigate();
  const gotoSpectator = () => navigate(`/session/${sessionId}/spectator/waiting-jesters`)

  const createRandomSessionId = () => {
    const min = 0
    const max = 9999
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  useEffect(() => {
    const createSession = () => {
      setSessionId(createRandomSessionId())
    }

    createSession()
  }, [])

  return (
    <div>
      <h1>Session Created: {sessionId}</h1>
      
      <button type='button' onClick={gotoSpectator}>
        Next
      </button>
    </div>

  )
}

export default CreateSession;