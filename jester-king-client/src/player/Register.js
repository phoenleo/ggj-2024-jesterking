import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useStore from '../store';
import ErrorModal from '../utils/ErrorModal';
import LoadingModal from '../utils/LoadingModal';
import { useEffect, useState } from 'react';


function Register() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoWaitingPlayer = () => navigate('../waiting-player')

  const [playerName, setPlayerName] = useState('');

  // Vars
  const loading = useStore((state) => state.loading)
  const error = useStore((state) => state.error)
  const clearError = useStore((state) => state.clearError)
  const session = useStore((state) => state.session)

  // APIs
  const getSession = useStore((state) => state.getSession)
  const registerPlayer = useStore((state) => state.registerPlayer)
  
  useEffect(() => {
    getSession(sessionId)
  }, [])


  const selectPlayer1 = async () => {
    await registerPlayer(sessionId, session.player1._id, playerName)
    gotoWaitingPlayer()
  }
  
  const selectPlayer2 = async () => {
    await registerPlayer(sessionId, session.player2._id, playerName)
    gotoWaitingPlayer()
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

  return session && (
    <div>
      <p>Session: {sessionId}</p>
      <p>Player Register</p>
      <Form className='d-flex justify-content-center align-items-center'>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Carve your legacy here"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          style={{ width: '150px' }}
        />
      </Form>
      <Container>
        <Row className="mt-5 mb-3">
          <Col className='d-flex align-items-center justify-content-center'>
            <Button variant="light" size="lg" block onClick={selectPlayer1}>
              As Jester X
            </Button>
          </Col>
          <Col className='d-flex align-items-center justify-content-center'>
            <Button variant="dark" size="lg" block onClick={selectPlayer2}>
              As Jester Y
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register;