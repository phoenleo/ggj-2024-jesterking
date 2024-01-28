import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import useStore, { getPlayer } from '../store';
import ErrorModal from '../utils/ErrorModal';
import LoadingModal from '../utils/LoadingModal';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function SubmitVote() {
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
  const submitVote = useStore((state) => state.submitVote)

  const selectPlayer1 = () => {
    submitVote(sessionId, session.player1._id)
    gotoWaitingVoters()
  }
  
  const selectPlayer2 = () => {
    submitVote(sessionId, session.player2._id)
    gotoWaitingVoters()
  }

  useEffect(() => {
    getSession(sessionId)
  }, [])

  return session && (
    <div>
      <p>Session: {sessionId}</p>
      <p>VOTE Your Jesters</p>
      <p>{ session.jokeSetup }</p>
    
      <Container>
        <Row className="mt-5 mb-3">
          <Col className='d-flex align-items-center justify-content-center'>
            <Button variant="dark" size="lg" block onClick={selectPlayer1}>
            { session.player1.selectedPunchline }
            </Button>
          </Col>
          <Col className='d-flex align-items-center justify-content-center'>
            <Button variant="dark" size="lg" block onClick={selectPlayer2}>
            { session.player2.selectedPunchline }
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SubmitVote;