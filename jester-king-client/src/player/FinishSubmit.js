import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import useStore, { getPlayer } from '../store';
import ErrorModal from '../utils/ErrorModal';
import LoadingModal from '../utils/LoadingModal';
import { useEffect, useState } from 'react';
import imgLogoMed from '../img/logo-med.png';
import imgRuang from '../img/ruang.png';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import whiteCard from '../img/white card.png';
import greenCard from '../img/green card.png';
import buttonWhite from '../img/button_white.png';


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

      <div class="stackParent position-relative">
        <Image className='stack-Img' src={whiteCard} alt="Card 0" rounded width="200" height="180" />
        <div class="stack-Txt position-absolute top-50 start-50 translate-middle">
          <div class="fourWsText stack-Txt-child carnevalee text-color-dark" style={{fontSize: '3rem' }}>{ punchline() }</div>
        </div>
      </div>

      <div className='mt-5 mb-2'>
        <Button className='bg-transparent' size="lg" onClick={gotoNewSession}>
          <div class="stackParent position-relative">
            <Image className='stack-Img' src={buttonWhite} alt="Card 0" rounded width="200" height="70" />
            <div class="stack-Txt position-absolute top-50 start-50 translate-middle">
              <div class="fourWsText stack-Txt-child carnevalee text-color-dark">Sesi Baru</div>
            </div>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default FinishSubmit;