import { useParams, useNavigate } from 'react-router-dom'

function VoteResult() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoVoteWinner = () => navigate('../vote-winner')

  return (
    <div>
      <p>Session: {sessionId}</p>
      <p>Submit Punchline</p>
      <p>JOKE SETUP: Cita cita ___</p>
      <ul>
        <li>Sampah Masyarakat - Si A - 100</li>
        <li>Idol - Si B - 30</li>
      </ul>
      
      <button type='button' onClick={gotoVoteWinner}>
        Next
      </button>
    </div>
  )
}

export default VoteResult;