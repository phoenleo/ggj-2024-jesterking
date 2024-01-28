import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import useStore, { getPlayer } from '../store';
import ErrorModal from '../utils/ErrorModal';
import LoadingModal from '../utils/LoadingModal';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ShowVoteResult() {
  const [showResult, setShowResult] = useState(false)

  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoVoteWinner = () => navigate('../vote-winner')

  // Vars
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
      <p>VOTE Your Jesters</p>
      <p>{ session.jokeSetup }</p>
    
      <Container>
        <Row className="mt-5 mb-3">
          <Col className='d-flex align-items-center justify-content-center'>
            <Button variant="dark" size="lg" block>
              { session.player1.selectedPunchline }
              <br/>
              {showResult ? `${session.player1.name}` : '???'}
              <br/>
              {showResult ? `${session.player1.voteCount}` : '???'} vote
            </Button>
          </Col>
          <Col className='d-flex align-items-center justify-content-center'>
            <Button variant="dark" size="lg" block>
              { session.player2.selectedPunchline }
              <br/>
              {showResult ? `${session.player2.name}` : '???'}
              <br/>
              {showResult ? `${session.player2.voteCount}` : '???'} vote
            </Button>
          </Col>
        </Row>
      </Container>

      {
        !showResult ?
        (
          <Button id='showVoteResult' variant='danger' size='lg' onClick={() => setShowResult(true)}>
            Show Vote Result
          </Button>
        ) :
        (
          <Button id='next' variant='danger' size='lg' onClick={gotoVoteWinner}>
            Next
          </Button>
        )
      }
    </div>
  )
}

export default ShowVoteResult;