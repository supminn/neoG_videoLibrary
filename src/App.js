import { useEffect } from 'react';
import { serverRequest } from './api/serverRequest';
import './App.css';

function App() {
  useEffect(() => {
    const {data} = serverRequest("api/videos","GET");
    console.log(data);
  })
  return (
    <div className="App">
      <h1>Videoooooo</h1>
    </div>
  );
}

export default App;
