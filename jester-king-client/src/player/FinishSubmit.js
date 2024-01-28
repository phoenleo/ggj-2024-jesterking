import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import useStore, { getPlayer } from '../store';
import ErrorModal from '../utils/ErrorModal';
import LoadingModal from '../utils/LoadingModal';
import { useEffect, useState } from 'react';

function FinishSubmit() {
  let { sessionId, playerId } = useParams()
  const navigate = useNavigate();
  const gotoNewSession = () => navigate('/')

   // Vars
  const loading = useStore((state) => state.loading)
  const error = useStore((state) => state.error)
  const clearError = useStore((state) => state.clearError)
  const session = useStore((state) => state.session)

  // APIs
  const getSession = useStore((state) => state.getSession)


  const punchline = () => {
    const player = getPlayer(session, playerId)
    return player.selectedPunchline 
  }

  useEffect(() => {
    getSession(sessionId)
  }, [])

  return session && (
    <div>
      <p>Session: {sessionId}</p>
      <p>Finish Submit</p>
      <p>{ session.jokeSetup }</p>
      <p>{ punchline() }</p>

      <div className='mt-2 mb-2'>
        <Button variant="danger" size="lg" onClick={gotoNewSession}>
          New Session
        </Button>
      </div>
    </div>
  )
}

export default FinishSubmit;