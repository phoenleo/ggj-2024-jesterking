import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';

function SpectatorWaitingJesters() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoWaitingVoters = () => navigate('../waiting-voters')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>JOKE SETUP: Cita cita ___</p>
      <p>Waiting Jesters ...</p>
      <Container className='mt-5 mb-2 d-flex align-items-center justify-content-center'>
        <Button variant='danger' size='lg' onClick={gotoWaitingVoters}>
          Refresh
        </Button>
      </Container>
    </div>
  )
}

export default SpectatorWaitingJesters;