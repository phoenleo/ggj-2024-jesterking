import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useStore, { getPlayer } from '../store';
import ErrorModal from '../utils/ErrorModal';
import LoadingModal from '../utils/LoadingModal';
import { useEffect, useState } from 'react';

function SpectatorWaitingVoters() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoShowVoteResult = () => navigate('../show-vote-result')

  // Vars
  const loading = useStore((state) => state.loading)
  const error = useStore((state) => state.error)
  const clearError = useStore((state) => state.clearError)
  const session = useStore((state) => state.session)

  // APIs
  const getSession = useStore((state) => state.getSession)
  const closeSession = useStore((state) => state.closeSession)

  const submit = async() => {
    await closeSession(sessionId)
    gotoShowVoteResult()
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
            <Button variant="dark" size="lg" block>
              { session.player1.selectedPunchline }
            </Button>
          </Col>
          <Col className='d-flex align-items-center justify-content-center'>
            <Button variant="dark" size="lg" block>
              { session.player2.selectedPunchline }
            </Button>
          </Col>
        </Row>
      </Container>

      <Button variant="primary" size="lg" block onClick={submit}>
        Close Vote
      </Button>
    </div>
  )
}

export default SpectatorWaitingVoters;