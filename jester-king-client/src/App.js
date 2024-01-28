import './App.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAxios from 'axios-hooks'
import ErrorModal from './utils/ErrorModal';
import LoadingModal from './utils/LoadingModal';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgPemain from './img/pemain.png';
import imgVoter from './img/pemilih.png';
import imgAdmin from './img/sesibaru.png';
import imgLogo from './img/Logo big.png';
import imgPilihReg from './img/pilih-reg.png'


function App() {
  const navigate = useNavigate();

  const gotoPlayer = () => navigate(`../session/${sessionId}/player/register`);
  const gotoVoter = () => navigate(`../session/${sessionId}/voter/waiting-jesters`);
  const createNewSession = () => navigate(`/create-session`);

  const [sessionId, setSessionId] = useState([]);
  const [errorRead, setErrorRead] = useState(false);

  const [{ data: title, loading, error }] = useAxios('/')  
  
  return (
    <div>
      <ErrorModal
        show={error && !errorRead}
        error={error} 
        onHide={() => {
          setErrorRead(true)
        }}  
      />

      <LoadingModal show={loading}/>

      <Image src={imgLogo} alt="Logo" width={300} className='mt-5' />

      <h2 className='htwoert text-color-light mt-5'>Masukkan nomor ruangan</h2>

      <Form className="d-flex align-items-center justify-content-center mt-3 mb-5">
        <Form.Control
          size="lg"
          type="text"
          placeholder="kode ruangan"
          value={sessionId}
          onChange={(e) => setSessionId(e.target.value)}
          style={{ width: '250px' }}
        />
      </Form>

      <Image src={imgPilihReg} alt="pilih" width={300} className='mb-3' />

      <Container className='mt-3 mb-5'>
        <Row>
          <Col gap="4">
            <Button variant="danger" onClick={gotoPlayer}>
              <Image src={imgPemain} alt="Join As Player" rounded width="80" />
            </Button>
          </Col>
          <Col gap="4">
            <Button variant="danger" onClick={gotoVoter}>
              <Image src={imgVoter} alt="Join As Voter" rounded width="80" />
            </Button>
          </Col>
          <Col gap="4">
            <Button variant="danger" onClick={createNewSession}>
              <Image src={imgAdmin} alt="Join As Admin" rounded width="80" />
            </Button>
          </Col>
        </Row>
      </Container>

      <p className='text-color-light mt-5'>-------- Developed By --------</p>
      <p className='text-color-light'>Phoen Leo, Ilham Narendra, Dharmatita Prajnavira, Jeremie Henokh Pribadi, Vitus Nathan</p>
    </div>
  );
}

export default App;
