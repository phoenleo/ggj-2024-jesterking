import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import jesterX from '../img/pemain1.png';
import jesterY from '../img/pemain2.png';

function Register() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoWaitingPlayer = () => navigate('../waiting-player')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Player Register</p>
      <Form className='d-flex justify-content-center align-items-center'>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Anda ingin dikenal sebagai si- "
          style={{ width: '150px' }}
        />
      </Form>
      <Container>
        <Row className="mt-5 mb-3">
          <Col></Col>
          <Col className='d-flex align-items-center justify-content-center'>
            <Button variant="danger" size="lg" block onClick={gotoWaitingPlayer}>
              <Image src={jesterX} alt="Pemain 1" rounded width="180" height="275" rounded />
            </Button>
          </Col>
          <Col className='d-flex align-items-center justify-content-center'>
            <Button variant="danger" size="lg" block onClick={gotoWaitingPlayer}>
              <Image src={jesterY} alt="Pemain 2" rounded width="180" height="275" rounded />
            </Button>
          </Col>
          <Col></Col>
        </Row>
        <br></br>
        <Row>
          <Col className='d-flex align-items-center justify-content-center' xs={12}>
            <Button variant="danger" size="lg" block onClick={gotoWaitingPlayer}>
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register;