import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {
  const navigate = useNavigate();

  const gotoPlayer = () => navigate(`../session/${sessionId}/player/register`);
  const gotoVoter = () => navigate(`../session/${sessionId}/voter/waiting-jesters`);
  const createNewSession = () => navigate(`/create-session`);

  const [isLoading, setLoading] = useState(false);
  const [title, setTitle] = useState([]);
  const [sessionId, setSessionId] = useState([]);

  useEffect(() => {
    const asyncLoadTitle = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api');
      setTitle(response.data);
      setLoading(false);
    };

    asyncLoadTitle();
  }, []);

  return (
    <div className="App">
      {/* Title */}
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <h1>{title}</h1>
      )}

      <h2>Enter Session Code</h2>
      <Form className="centered-form">
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

      <Button variant="primary" size="lg" onClick={gotoPlayer}>
        Join As Player
      </Button>
      <br />
      <br />

      <Button variant="primary" size="lg" onClick={gotoVoter}>
        Join As Voter
      </Button>
      <br />
      <br />

      <Button variant="primary" size="lg" onClick={createNewSession}>
        Create New Session
      </Button>
    </div>
  );
}

export default App;
