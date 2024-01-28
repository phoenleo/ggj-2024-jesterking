import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import useStore, { getPlayer } from '../store';
import ErrorModal from '../utils/ErrorModal';
import LoadingModal from '../utils/LoadingModal';
import { useEffect, useState } from 'react';

function WaitingVoters() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoNewSession = () => navigate('/')

  // Vars
  const loading = useStore((state) => state.loading)
  const error = useStore((state) => state.error)
  const clearError = useStore((state) => state.clearError)
  const session = useStore((state) => state.session)

  // APIs
  const getSession = useStore((state) => state.getSession)

  
  useEffect(() => {
    getSession(sessionId)
  }, [])

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Thank You for Voting</p>
      <Button variant='danger' size='lg' onClick={gotoNewSession}>
        New Session
      </Button>
    </div>
  )
}

export default WaitingVoters;