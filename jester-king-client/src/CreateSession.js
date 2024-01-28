import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import useAxios from 'axios-hooks';
import ErrorModal from './utils/ErrorModal';
import LoadingModal from './utils/LoadingModal';
import Card from 'react-bootstrap/Card'


function CreateSession() {
  const [sessionId, setSessionId] = useState([]);
  const navigate = useNavigate();
  const gotoSpectator = () => navigate(`/session/${sessionId}/spectator/waiting-jesters`)

  const [errorRead, setErrorRead] = useState(false);

  const [{ data, loading, error }] = useAxios({
    url: '/session',
    method: 'post'
  }) 

  if (loading) return (
    <><LoadingModal show={loading}/></>
  )

  return (
    <div>
      <ErrorModal
        show={error && !errorRead}
        error={error} 
        onHide={() => {
          setErrorRead(true)
        }}  
      />

      <h1>Session Created: {data.sessionCode}</h1>
      <Card>
        <Card.Body>
          <Card.Text>
            { data.jokeSetup }
          </Card.Text>
        </Card.Body>
      </Card>

      <h3>Waiting Jesters ...</h3>
      
      <Button variant='primary' size='lg' onClick={gotoSpectator}>
        Next
      </Button>
    </div>

  )
}

export default CreateSession;