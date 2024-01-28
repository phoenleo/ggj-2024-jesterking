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
import imgLogoMed from '../img/logo-med.png';
import imgRuang from '../img/ruang.png';

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
            <span className="toi htwoert" width='100' style={{fontSize: '1.5em' }}>{ session.jokeSetup }</span>            
          </Card.Text>
        </Card.Body>
      </Card>

      <Container>
        <Row>
          <Col className='mt-2 mb-2 d-flex align-items-center justify-content-center'>
            <Button className='bg-transparent' size="lg" onClick={() => submit(punchlineOptions()[0])}>
              <div class="stackParent position-relative">
                <Image className='stack-Img' src={whiteCard} alt="Card 0" rounded width="130" height="150" />
                <div class="stack-Txt position-absolute top-50 start-50 translate-middle">
                  <div class="fourWsText stack-Txt-child carnevalee text-color-dark">{ punchlineOptions()[0] }</div>
                </div>
              </div>
            </Button>
          </Col>
          <Col className='mt-2 mb-2 d-flex align-items-center justify-content-center'>
            <Button className='bg-transparent' size="lg" onClick={() => submit(punchlineOptions()[1])}>
              <div class="stackParent position-relative">
                <Image className='stack-Img' src={whiteCard} alt="Card 0" rounded width="130" height="150" />
                <div class="stack-Txt position-absolute top-50 start-50 translate-middle">
                  <div class="fourWsText stack-Txt-child carnevalee text-color-dark">{ punchlineOptions()[1] }</div>
                </div>
              </div>
            </Button>
          </Col>
          <Col className='mt-2 mb-2 d-flex align-items-center justify-content-center'>
            <Button className='bg-transparent' size="lg" onClick={() => submit(punchlineOptions()[2])}>
              <div class="stackParent position-relative">
                <Image className='stack-Img' src={whiteCard} alt="Card 0" rounded width="130" height="150" />
                <div class="stack-Txt position-absolute top-50 start-50 translate-middle">
                  <div class="fourWsText stack-Txt-child carnevalee text-color-dark">{ punchlineOptions()[2] }</div>
                </div>
              </div>
            </Button>
          </Col>
          <Col className='mt-2 mb-2 d-flex align-items-center justify-content-center'>
            <Button className='bg-transparent' size="lg" onClick={() => submit(punchlineOptions()[3])}>
              <div class="stackParent position-relative">
                <Image className='stack-Img' src={whiteCard} alt="Card 0" rounded width="130" height="150" />
                <div class="stack-Txt position-absolute top-50 start-50 translate-middle">
                  <div class="fourWsText stack-Txt-child carnevalee text-color-dark">{ punchlineOptions()[3] }</div>
                </div>
              </div>
            </Button>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  )
}

export default SubmitPunchline;