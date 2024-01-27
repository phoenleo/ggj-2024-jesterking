import { useParams, useNavigate } from 'react-router-dom'

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
      <input type="radio" id="p_1" name="punchline" value="Sampah Masyarakat" />
      <label for="p_1">Sampah Masyarakat</label>
      <br />
      <input type="radio" id="p_2" name="punchline" value="Idol" />
      <label for="p_2">Idol</label>
      <br />
      
      <button type='button' onClick={gotoWaitingVoters}>
        Submit
      </button>
    </div>
  )
}

export default SubmitVote;