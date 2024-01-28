import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import useAxios from 'axios-hooks';
import ErrorModal from './utils/ErrorModal';
import LoadingModal from './utils/LoadingModal';
import Card from 'react-bootstrap/Card'
import useStore from './store';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import whiteCard from './img/white card.png';
import greenCard from './img/green card.png';
import imgLogoMed from './img/logo-med.png';
import imgRuang from './img/ruang.png';
import buttonWhite from './img/button_white.png';


function CreateSession() {
  const navigate = useNavigate();
  const gotoSpectator = () => navigate(`/session/${session.sessionCode}/spectator/waiting-jesters`)

  useEffect(() => {
    createSession()
  }, [])

  // Vars
  const loading = useStore((state) => state.loading)
  const error = useStore((state) => state.error)
  const clearError = useStore((state) => state.clearError)
  const session = useStore((state) => state.session)

  // APIs
  const createSession = useStore((state) => state.createSession)
  const getSession = useStore((state) => state.getSession)


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
      <Image src={imgLogoMed} alt="Logo" height={80} className='mt-5' />
      
      <div className='img-container'>
        <Image src={imgRuang} alt="room" height={50} className='mt-5' />
        <div className='overlay'>
          <p className='carnevalee text-color-dark'>Ruang {session.sessionCode}</p>
        </div>
      </div>

      <Card className='bg-transparent border-0 mt-3' text={"secondary" === 'light' ? 'dark' : 'white'}>
        <Card.Body>
          <Card.Text className="card-content">
            <Image className='iot' src={greenCard} alt="Card(?)" rounded width="130" height="200" />
            <span className="toi htwoert" style={{fontSize: '1.5em' }}>{ session.jokeSetup }</span>            
          </Card.Text>
        </Card.Body>
      </Card>

      <h1 className='carnevalee text-color-light mt-5'>Menunggu Badut & Voting ...</h1>

      {
        session.canVote ?(
          <div className='mt-5 mb-2'>
            <Button className='bg-transparent' size="lg" onClick={gotoSpectator}>
              <div class="stackParent position-relative">
                <Image className='stack-Img' src={buttonWhite} alt="Card 0" rounded width="200" height="70" />
                <div class="stack-Txt position-absolute top-50 start-50 translate-middle">
                  <div class="fourWsText stack-Txt-child carnevalee text-color-dark">Lanjut</div>
                </div>
              </div>
            </Button>
          </div>
        ) : (
          <div className='mt-5 mb-2'>
            <Button className='bg-transparent' size="lg" onClick={() => getSession(session.sessionCode)}>
              <div class="stackParent position-relative">
                <Image className='stack-Img' src={buttonWhite} alt="Card 0" rounded width="200" height="70" />
                <div class="stack-Txt position-absolute top-50 start-50 translate-middle">
                  <div class="fourWsText stack-Txt-child carnevalee text-color-dark">Cek Hasil</div>
                </div>
              </div>
            </Button>
          </div>
        )
      }
    </div>
  )
}

export default CreateSession;