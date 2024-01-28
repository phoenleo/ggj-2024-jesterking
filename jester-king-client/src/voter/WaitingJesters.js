import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import useStore, { getPlayer } from '../store';
import ErrorModal from '../utils/ErrorModal';
import LoadingModal from '../utils/LoadingModal';
import { useEffect, useState } from 'react';

function WaitingJesters() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoSubmitVote = () => navigate('../submit-vote')

  // Vars
  const loading = useStore((state) => state.loading)
  const error = useStore((state) => state.error)
  const clearError = useStore((state) => state.clearError)
  const session = useStore((state) => state.session)

  // APIs
  const getSession = useStore((state) => state.getSession)
  const submitPunchline = useStore((state) => state.submitPunchline)
  
  const check = async () => {
    const res = await getSession(sessionId)
  }

  useEffect(() => {
    getSession(sessionId)
  }, [])

  if (session && session.canVote) gotoSubmitVote()

  return session && (
    <div>
      <p>Session: {sessionId}</p>
      <p>Waiting Jesters</p>
      <Button variant='danger' size='lg' onClick={check}>
        Refresh
      </Button>
    </div>
  )
}

export default WaitingJesters;