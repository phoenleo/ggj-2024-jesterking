import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import axios from "axios"

function App() {
  const [isLoading, setLoading] = useState(false);
  const [title, setTitle] = useState([]);

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {isLoading ? (
            <p>Loading ...</p>
          ): (
            <p>{title}</p>
          )}
      </header>
    </div>
  );
}

export default App;
