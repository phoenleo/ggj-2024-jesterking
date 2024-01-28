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

      <h1>{title}</h1>

      <Image src={imgLogo} alt="Logo" />

      <h2>Enter Session Code</h2>
      <Form className="d-flex align-items-center justify-content-center mt-4 mb-5">
        <Form.Control
          size="lg"
          type="text"
          placeholder="session code"
          value={sessionId}
          onChange={(e) => setSessionId(e.target.value)}
          style={{ width: '150px' }}
        />
      </Form>
      <br />
      
      <Container>
        <Row>
          <Col>
            <Button variant="danger" size="lg" onClick={gotoPlayer}>
              <Image src={imgPemain} alt="Join As Player" rounded width="180" height="270" rounded />
            </Button>
          </Col>
          <Col>
            <Button variant="danger" size="lg" onClick={gotoVoter}>
              <Image src={imgVoter} alt="Join As Voter" rounded width="180" height="270" rounded />
            </Button>
          </Col>
          <Col>
            <Button variant="danger" size="lg" onClick={createNewSession}>
              <Image src={imgAdmin} alt="Join As Admin" rounded width="180" height="270" rounded />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
