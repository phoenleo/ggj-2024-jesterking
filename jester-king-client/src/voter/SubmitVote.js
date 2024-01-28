import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import whiteCard from '../img/white card.png';
import greenCard from '../img/green card.png';

function SubmitVote() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoWaitingVoters = () => navigate('../waiting-voters')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Submit Punchline</p>
      <p>JOKE SETUP: Cita cita ___</p>
      <p>PUNCHLINE OPTIONS:</p>

      <Container>
        <Row>
          <Col>
            <Button variant="light" size="lg" /*onClick={gotoFinishSubmit}*/>
              <Image src={whiteCard} alt="Card 1" rounded width="130" height="180" rounded />
            </Button>
          </Col>
          <Col>
            <Button variant="light" size="lg" /*onClick={gotoFinishSubmit}*/>
              <Image src={whiteCard} alt="Card 1" rounded width="130" height="180" rounded />
            </Button>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Button variant='danger' size='lg' onClick={gotoWaitingVoters}>
        Submit
      </Button>
    </div>
  )
}

export default SubmitVote;