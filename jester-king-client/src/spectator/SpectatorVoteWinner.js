import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import useStore, { getPlayer } from '../store';
import ErrorModal from '../utils/ErrorModal';
import LoadingModal from '../utils/LoadingModal';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SpectatorVoteWinner() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoNewSession = () => navigate('/')

  const loading = useStore((state) => state.loading)
  const error = useStore((state) => state.error)
  const clearError = useStore((state) => state.clearError)
  const session = useStore((state) => state.session)

  // APIs
  const getCompletedSession = useStore((state) => state.getCompletedSession)
  const closeSession = useStore((state) => state.closeSession)

  useEffect(() => {
    getCompletedSession(sessionId)
  }, [])

  return session && (
    <div>
      <p>Session: {sessionId}</p>
      <p>{ session.jokeSetup }</p>
      <Container>
        <Row className="mt-5 mb-3">
          <Col className='d-flex align-items-center justify-content-center'>
            <Button variant="dark" size="lg" block>
              { session.player1.selectedPunchline }
              <br/>
              {`${session.player1.name}`}
              <br/>
              {`${session.player1.voteCount}`} vote
            </Button>
          </Col>
        </Row>
      </Container>

      <Button variant='danger' size='lg' onClick={gotoNewSession}>
        New Session
      </Button>
    </div>
  )
}

export default SpectatorVoteWinner;