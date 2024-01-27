import './App.css';
import { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const gotoPlayer = () => navigate(`../session/${sessionId}/player/register`)
  const gotoVoter = () => navigate(`../session/${sessionId}/voter/waiting-jesters`)
  const createNewSession = () => navigate(`../session/${sessionId}/spectator/new-session`)


  const [isLoading, setLoading] = useState(false);
  const [title, setTitle] = useState([]);
  const [sessionId, setSessionId] = useState([]);

  useEffect(() => {
    const asyncLoadTitle = async() => {
      setLoading(true)
      const response = await axios.get('http://localhost:3000/api')
      setTitle(response.data)
      setLoading(false) 
    }

    asyncLoadTitle()
  }, [])


  return (
    <div className="App">
      {/* Title */}
      {isLoading ? (
        <h1>Loading ...</h1>
      ): (
        <h1>{title}</h1>
      )}

      <h2>Enter Session Code</h2>
      <form>
        <input 
          type="text" 
          value={sessionId} 
          placeholder='session code' 
          onChange={e => setSessionId(e.target.value)}
        />
      </form>

      <button type='button' onClick={gotoPlayer}>
        Join As Player
      </button>
      <br />

      <button type='button' onClick={gotoVoter}>
        Join As Voter
      </button>
      <br />
      
      <button type='button' onClick={createNewSession}>
        Create New Session
      </button>
    </div>
  );
}

export default App;
