import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function WaitingPlayer() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoSubmitPunchline = () => navigate('../submit-punchline')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Waiting Other Player</p>
      <div className='mt-5 mb-2'>
        <Button variant='danger' size='lg' onClick={gotoSubmitPunchline}>
          Refresh
        </Button>
      </div>
    </div>
  )
}

export default WaitingPlayer;