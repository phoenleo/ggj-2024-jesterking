import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import useStore, { getPlayer } from '../store';
import ErrorModal from '../utils/ErrorModal';
import LoadingModal from '../utils/LoadingModal';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import whiteCard from '../img/white card.png';
import greenCard from '../img/green card.png';
import imgLogoMed from '../img/logo-med.png';
import imgRuang from '../img/ruang.png';
import Card from 'react-bootstrap/Card';

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
      <Image src={imgLogoMed} alt="Logo" height={80} className='mt-5' />
      
      <div className='img-container'>
        <Image src={imgRuang} alt="room" height={50} className='mt-5' />
        <div className='overlay'>
          <p className='carnevalee text-color-dark'>Ruang {sessionId}</p>
        </div>
      </div>

      <Card className='bg-transparent border-0 mt-3' text={"secondary" === 'light' ? 'dark' : 'white'}>
        <Card.Body>
          <Card.Text className="card-content">
            <Image className='iot' src={greenCard} alt="Card(?)" rounded width="130" height="180" />
            <span className="toi htwoert" style={{fontSize: '1.5em' }}>{ session.jokeSetup }</span>            
          </Card.Text>
        </Card.Body>
      </Card>

      
      <h1 className='carnevalee text-color-light'>Pilih Badutmu</h1>
      
    
      <Container>
        <Row>
          <Col className='mt-2 mb-2 d-flex align-items-center justify-content-center'>
            <Button className='bg-transparent' size="lg" onClick={selectPlayer1}>
              <div class="stackParent position-relative">
                <Image className='stack-Img' src={whiteCard} alt="Card 0" rounded width="130" height="150" />
                <div class="stack-Txt position-absolute top-50 start-50 translate-middle">
                  <div class="fourWsText stack-Txt-child carnevalee text-color-dark" style={{fontSize: '1.5rem' }}>{ session.player1.selectedPunchline }</div>
                </div>
              </div>
            </Button>
          </Col>
          <Col className='mt-2 mb-2 d-flex align-items-center justify-content-center'>
            <Button className='bg-transparent' size="lg" onClick={selectPlayer2}>
              <div class="stackParent position-relative">
                <Image className='stack-Img' src={whiteCard} alt="Card 0" rounded width="130" height="150" />
                <div class="stack-Txt position-absolute top-50 start-50 translate-middle">
                  <div class="fourWsText stack-Txt-child carnevalee text-color-dark" style={{fontSize: '1.5rem' }}>{ session.player2.selectedPunchline }</div>
                </div>
              </div>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SubmitVote;