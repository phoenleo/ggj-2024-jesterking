import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function SubmitPunchline() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoFinishSubmit = () => navigate('../finish-submit')
  

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Submit Punchline</p>
      <p>JOKE SETUP: Cita cita ___</p>
      <Card bg="secondary" text={"secondary" === 'light' ? 'dark' : 'white'}>
        <Card.Body>
          <Card.Text>
            Keren banget tuh sepatu. Pasti beli dari ____
          </Card.Text>
        </Card.Body>
      </Card>

      <Container>
        <Row>
          <Col>
            <Button variant="success" size="lg" onClick={gotoFinishSubmit}>
              Sampah Masyarakat
            </Button>
          </Col>
          <Col>
            <Button variant="success" size="lg" onClick={gotoFinishSubmit}>
              Idol
            </Button>
          </Col>
          <Col>
            <Button variant="success" size="lg" onClick={gotoFinishSubmit}>
              Tukang Bangunan
            </Button>
          </Col>
        </Row>
      </Container>
      <br />
      <Button variant="danger" size="lg" onClick={gotoFinishSubmit}>
        Submit
      </Button>

    </div>
  )
}

export default SubmitPunchline;