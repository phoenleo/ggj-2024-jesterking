import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useStore, { getPlayer } from '../store';
import ErrorModal from '../utils/ErrorModal';
import LoadingModal from '../utils/LoadingModal';
import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import whiteCard from '../img/white card.png';
import greenCard from '../img/green card.png';
import './player.styles.scss';

function SubmitPunchline() {
  let { sessionId, playerId } = useParams()
  const navigate = useNavigate();
  const gotoFinishSubmit = () => navigate(`../player/${playerId}/finish-submit`)
  
  // Vars
  const loading = useStore((state) => state.loading)
  const error = useStore((state) => state.error)
  const clearError = useStore((state) => state.clearError)
  const session = useStore((state) => state.session)

  // APIs
  const getSession = useStore((state) => state.getSession)
  const submitPunchline = useStore((state) => state.submitPunchline)

  const submit = async (punchline) => {
    await submitPunchline(sessionId, playerId, punchline)
    gotoFinishSubmit()
  }


  useEffect(() => {
    getSession(sessionId)
  }, [])


  const punchlineOptions = () => {
    const player = getPlayer(session, playerId)
    return player.punchlineOptions
  }

  if (loading) {
    return <><LoadingModal show={loading}/></> 
  } 

  return session && (
    <div>
      <p>Session: {sessionId}</p>
      <p>Submit Punchline</p>
      <Card bg="secondary" text={"secondary" === 'light' ? 'dark' : 'white'}>
        <Card.Body>
          <Card.Text className="card-content">
            <Image className='iot' src={greenCard} alt="Card(?)" rounded width="130" height="180" />
            <span className="toi">{ session.jokeSetup }</span>            
          </Card.Text>
        </Card.Body>
      </Card>

      <Container>
        <Row>
          <Col className='mt-2 mb-2 d-flex align-items-center justify-content-center'>
            <Button variant="light" size="lg" onClick={() => submit(punchlineOptions()[0])}>
              <Image src={whiteCard} alt="Card 0" rounded width="130" height="180" />
              { punchlineOptions()[0] }
            </Button>
          </Col>
          <Col className='mt-2 mb-2 d-flex align-items-center justify-content-center'>
            <Button variant="light" size="lg" onClick={() => submit(punchlineOptions()[1])}>
              <Image src={whiteCard} alt="Card 1" rounded width="130" height="180" />
              { punchlineOptions()[1] }
            </Button>
          </Col>
          <Col className='mt-2 mb-2 d-flex align-items-center justify-content-center'>
            <Button variant="light" size="lg" onClick={() => submit(punchlineOptions()[2])}>
              <Image src={whiteCard} alt="Card 2" rounded width="130" height="180" />
              { punchlineOptions()[2] }
            </Button>
          </Col>
          <Col className='mt-2 mb-2 d-flex align-items-center justify-content-center'>
            <Button variant="light" size="lg" onClick={() => submit(punchlineOptions()[3])}>
              <Image src={whiteCard} alt="Card 3" rounded width="130" height="180" />
              { punchlineOptions()[3] }
            </Button>
          </Col>
        </Row>
      </Container>
      <br />
      <div className='mt-3 mb-3'>
        <Button variant="danger" size="lg" onClick={gotoFinishSubmit}>
          Submit
        </Button>
      </div>
    </div>
  )
}

export default SubmitPunchline;