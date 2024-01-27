import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ShowVoteResult() {
  const [showResult, setShowResult] = useState(false)

  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoVoteWinner = () => navigate('../vote-winner')

  return (
    <div>
      
      <p>Session: {sessionId}</p>
      <p>JOKE SETUP: Cita cita ___</p>
      <ul>
        <li>Sampah Masyarakat - ({showResult ? "70 - Si A" : '???'})</li>
        <li>Idol - ({showResult ? "10 - Si B" : '???'})</li>
      </ul>

      {
        !showResult ?
        (
          <Button id='showVoteResult' variant='danger' size='lg' onClick={() => setShowResult(true)}>
            Show Vote Result
          </Button>
        ) :
        (
          <Button id='next' variant='danger' size='lg' onClick={gotoVoteWinner}>
            Next
          </Button>
        )
      }
    </div>
  )
}

export default ShowVoteResult;