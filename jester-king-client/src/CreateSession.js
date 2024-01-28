import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import useAxios from 'axios-hooks';
import ErrorModal from './utils/ErrorModal';
import LoadingModal from './utils/LoadingModal';
import Card from 'react-bootstrap/Card'
import axiosClient from './apiClient';


function CreateSession() {
  const [sessionCode, setSessionCode] = useState([]);
  const navigate = useNavigate();
  const gotoSpectator = () => navigate(`/session/${sessionCode}/spectator/waiting-jesters`)

  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState([]);

  const createSession = async () => {
    setLoading(true)
    const res = await axiosClient.post('/session')
    console.log(res)
    setSession(res.data)
    setLoading(false)
  }

  const getSession = async () => {
    setLoading(true)
    const res = await axiosClient.get(`/session/${session.sessionCode}`)
    setSession(res.data)
    setLoading(false)
  }

  useEffect(() => {
    createSession()
  }, [])


  if (loading) {
    return <><LoadingModal show={loading}/></> 
  } 

  if (error) {
    return (
      <ErrorModal
        show={error}
        error={error} 
        onHide={() => {
          setError(null)
        }}  
      />
    )
  }  

  return (
    <div>
      <h1>Session Created: {session.sessionCode}</h1>
      <Card>
        <Card.Body>
          <Card.Text>
            { session.jokeSetup }
          </Card.Text>
        </Card.Body>
      </Card>

      <h3>Waiting Jesters ...</h3>
      
      {
        session.canVote ?(
          <Button variant='primary' size='lg' onClick={gotoSpectator}>
            Next
          </Button>
        ) : (
          <Button variant='primary' size='lg' onClick={getSession}>
            Check
          </Button>
        )
      }

    </div>

  )
}

export default CreateSession;