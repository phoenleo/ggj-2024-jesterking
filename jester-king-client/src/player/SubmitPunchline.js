import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function SubmitPunchline() {
  let { sessionId } = useParams()
  const navigate = useNavigate();
  const gotoFinishSubmit = () => navigate('../finish-submit')
  

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
      <input type="radio" id="p_3" name="punchline" value="Tukang Bangunan" />
      <label for="p_3">Tukang Bangunan</label>
      <br />
      
      <button type='button' onClick={gotoFinishSubmit}>
        Submit
      </button>
    </div>
  )
}

export default SubmitPunchline;