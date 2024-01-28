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
import Image from 'react-bootstrap/Image';
import jesterX from '../img/pemain1.png';
import jesterY from '../img/pemain2.png';
import imgLogoMed from '../img/logo-med.png';
import imgRuang from '../img/ruang.png';

function Register() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoSubmitPunchline = (playerId) => navigate(`../player/${playerId}/submit-punchline`)

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
    gotoSubmitPunchline(session.player1._id)
  }
  
  const selectPlayer2 = async () => {
    await registerPlayer(sessionId, session.player2._id, playerName)
    gotoSubmitPunchline(session.player2._id)
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
      <Image src={imgLogoMed} alt="Logo" height={80} className='mt-5' />
      
      <div className='img-container'>
        <Image src={imgRuang} alt="room" height={50} className='mt-5' />
        <div className='overlay'>
          <p className='carnevalee text-color-dark'>Ruang {sessionId}</p>
        </div>
      </div>
      
      <h2 className='htwoert text-color-light mt-5'>Masukkan nama anda</h2>
      
      <Form className='d-flex justify-content-center align-items-center ms-5 me-5'>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Masukkan Nama"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </Form>

      <h2 className='htwoert text-color-light mt-5 mb-3'>Pilih posisi bermain</h2>

      <Container>
        <Row>
          <Col></Col>
          <Col className='d-flex align-items-center justify-content-center'>
            <Button variant="danger" size="lg" block onClick={selectPlayer1}>
              <Image src={jesterX} alt="Pemain 1" rounded width="120" />
            </Button>
          </Col>
          <Col className='d-flex align-items-center justify-content-center'>
            <Button variant="dark" size="lg" block onClick={selectPlayer2}>
              <Image src={jesterY} alt="Pemain 2" rounded width="120" />
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register;