import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react';

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
          <button id='showVoteResult' type='button' onClick={() => setShowResult(true)}>
            Show Vote Result
          </button>
        ) :
        (
          <button id='next' type='button' onClick={gotoVoteWinner}>
            Next
          </button>
        )
      }
    </div>
  )
}

export default ShowVoteResult;