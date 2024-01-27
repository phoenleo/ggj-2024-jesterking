import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
      <Form>
      <Form.Check
        type="radio"
        id="p_1"
        name="punchline"
        value="Sampah Masyarakat"
        label="Sampah Masyarakat"
      />
      <Form.Check
        type="radio"
        id="p_2"
        name="punchline"
        value="Idol"
        label="Idol"
      />
      <Form.Check
        type="radio"
        id="p_3"
        name="punchline"
        value="Tukang Bangunan"
        label="Tukang Bangunan"
      />
    </Form>
      <br />
      <Button variant="primary" size="lg" onClick={gotoFinishSubmit}>
        Submit
      </Button>
    </div>
  )
}

export default SubmitPunchline;