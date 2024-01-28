import './App.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAxios from 'axios-hooks'
import ErrorModal from './utils/ErrorModal';
import LoadingModal from './utils/LoadingModal';


function App() {
  const navigate = useNavigate();

  const gotoPlayer = () => navigate(`../session/${sessionId}/player/register`);
  const gotoVoter = () => navigate(`../session/${sessionId}/voter/waiting-jesters`);
  const createNewSession = () => navigate(`/create-session`);

  const [sessionId, setSessionId] = useState([]);
  const [errorRead, setErrorRead] = useState(false);

  const [{ data: title, loading, error }, refetch] = useAxios('/')  
  
  
  return (
    <div>
      <ErrorModal
        show={error && !errorRead}
        error={error} 
        onHide={() => {
          setErrorRead(true)
        }}  
      />

      <LoadingModal show={loading}/>

      <h1>{title}</h1>

      <h2>Enter Session Code</h2>
      <Form className="d-flex align-items-center justify-content-center mt-4 mb-5">
        <Form.Control
          size="lg"
          type="text"
          placeholder="session code"
          value={sessionId}
          onChange={(e) => setSessionId(e.target.value)}
          style={{ width: '150px' }}
        />
      </Form>
      <br />

      <Button variant="danger" size="lg" onClick={gotoPlayer}>
        Join As Player
      </Button>
      <br />
      <br />

      <Button variant="danger" size="lg" onClick={gotoVoter}>
        Join As Voter
      </Button>
      <br />
      <br />
      
      <Button variant="danger" size="lg" onClick={createNewSession}>
        Create New Session
      </Button>
    </div>
  );
}

export default App;
