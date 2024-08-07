import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {

  const [excuseName, setExcuseName] = useState("");

  const fetchData = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res) => {
      console.log(res.data);
      setExcuseName(res.data[0].excuse);
    });
  };


  return (
    <div className="App">
      <h1>Generate an Excuse</h1>

      <div>
        <button onClick={() => fetchData("party")}> Party</button>
      </div>

      <div>
        <button onClick={() => fetchData("family")}> Family</button>
      </div>

      <div>
        <button onClick={() => fetchData("office")}> Office</button>
      </div>

      <p>{excuseName}</p>
    </div>
  );
}

export default App;
