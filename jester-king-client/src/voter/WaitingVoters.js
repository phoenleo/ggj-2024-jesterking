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
import buttonWhite from '../img/button_white.png';

function WaitingVoters() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoNewSession = () => navigate('/')

  // Vars
  const loading = useStore((state) => state.loading)
  const error = useStore((state) => state.error)
  const clearError = useStore((state) => state.clearError)
  const session = useStore((state) => state.session)

  // APIs
  const getSession = useStore((state) => state.getSession)

  
  useEffect(() => {
    getSession(sessionId)
  }, [])

  return (
    <div>
      <Image src={imgLogoMed} alt="Logo" height={80} className='mt-5' />
      
      <div className='img-container'>
        <Image src={imgRuang} alt="room" height={50} className='mt-5' />
        <div className='overlay'>
          <p className='carnevalee text-color-dark'>Ruang {sessionId}</p>
        </div>
      </div>

      <h1 className='carnevalee text-color-light mt-5'>Terima kasih sudah voting</h1>

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

export default WaitingVoters;