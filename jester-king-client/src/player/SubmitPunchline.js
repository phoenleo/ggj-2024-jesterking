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
          <Col className='mt-2 mb-2 d-flex align-items-center justify-content-center'>
            <Button variant="success" size="lg" onClick={gotoFinishSubmit}>
              Sampah Masyarakat
            </Button>
          </Col>
          <Col className='mt-2 mb-2 d-flex align-items-center justify-content-center'>
            <Button variant="success" size="lg" onClick={gotoFinishSubmit}>
              Idol
            </Button>
          </Col>
          <Col className='mt-2 mb-2 d-flex align-items-center justify-content-center'>
            <Button variant="success" size="lg" onClick={gotoFinishSubmit}>
              Tukang Bangunan
            </Button>
          </Col>
        </Row>
      </Container>
      <br />
      <div className='mt-3 mb-3'>
        <Button variant="danger" size="lg" onClick={gotoFinishSubmit}>
          Submit
        </Button>
      </div>
    </div>
  )
}

export default SubmitPunchline;