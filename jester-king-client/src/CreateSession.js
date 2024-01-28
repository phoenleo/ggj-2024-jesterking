import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import useAxios from 'axios-hooks';
import ErrorModal from './utils/ErrorModal';
import LoadingModal from './utils/LoadingModal';
import Card from 'react-bootstrap/Card'
import useStore from './store';


function CreateSession() {
  const navigate = useNavigate();
  const gotoSpectator = () => navigate(`/session/${session.sessionCode}/spectator/waiting-jesters`)

  useEffect(() => {
    createSession()
  }, [])

  // Vars
  const loading = useStore((state) => state.loading)
  const error = useStore((state) => state.error)
  const clearError = useStore((state) => state.clearError)
  const session = useStore((state) => state.session)

  // APIs
  const createSession = useStore((state) => state.createSession)
  const getSession = useStore((state) => state.getSession)


  if (loading) {
    return <><LoadingModal show={loading}/></> 
  } 

  if (error) {
    return (
      <ErrorModal
        show={error}
        error={error} 
        onHide={clearError}  
      />
    )
  }  

  return session && (
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
          <Button variant='danger' size='lg' onClick={gotoSpectator}>
            Next
          </Button>
        ) : (
          <Button variant='danger' size='lg' onClick={() => getSession(session.sessionCode)}>
            Check
          </Button>
        )
      }
    </div>
  )
}

export default CreateSession;