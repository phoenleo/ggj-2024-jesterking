import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import useStore, { getPlayer } from '../store';
import ErrorModal from '../utils/ErrorModal';
import LoadingModal from '../utils/LoadingModal';
import { useEffect, useState } from 'react';


function SpectatorWaitingJesters() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoWaitingVoters = () => navigate('../waiting-voters')

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

  const refresh = () => {
    getSession(sessionId)
  }

  if (session && session.canVote) gotoWaitingVoters()

  return session && (
    <div>
      <p>Session: {sessionId}</p>
      <p>JOKE SETUP: Cita cita ___</p>
      <p>Waiting Jesters ...</p>
      <Container className='mt-5 mb-2 d-flex align-items-center justify-content-center'>
        <Button variant='danger' size='lg' onClick={refresh}>
          Refresh
        </Button>
      </Container>
    </div>
  )
}

export default SpectatorWaitingJesters;