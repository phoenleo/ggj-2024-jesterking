import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import useStore from '../store';
import ErrorModal from '../utils/ErrorModal';
import LoadingModal from '../utils/LoadingModal';
import { useEffect, useState } from 'react';

function WaitingPlayer() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoSubmitPunchline = () => navigate('../submit-punchline')

  // Vars
  const loading = useStore((state) => state.loading)
  const error = useStore((state) => state.error)
  const clearError = useStore((state) => state.clearError)
  const session = useStore((state) => state.session)

  // APIs
  const getSession = useStore((state) => state.getSession)
  const registerPlayer = useStore((state) => state.registerPlayer)


  const refresh = async () => {
    await getSession(sessionId)
  } 

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

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Waiting Other Player</p>
      <div className='mt-5 mb-2'>
        <Button variant='danger' size='lg' onClick={gotoSubmitPunchline}>
          Refresh
        </Button>
      </div>
    </div>
  )
}

export default WaitingPlayer;