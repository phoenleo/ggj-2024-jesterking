import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Register() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoWaitingPlayer = () => navigate('../waiting-player')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Player Register</p>
      <Form class='d-flex justify-content-center align-items-center'>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Carve your legacy here"
          style={{ width: '150px' }}
        />
      </Form>
      <Container>
        <Row className="mt-5 mb-3">
          <Col xs={6} class='col-6 d-flex align-items-center justify-content-center'>
            <Button variant="light" size="lg" block onClick={gotoWaitingPlayer}>
              As Jester X
            </Button>
          </Col>
          <Col xs={6} class='col-6 d-flex align-items-center justify-content-center'>
            <Button variant="dark" size="lg" block onClick={gotoWaitingPlayer}>
              As Jester Y
            </Button>
          </Col>
        </Row>
        <Row>
          <Col class='d-flex align-items-center justify-content-center' xs={12}>
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