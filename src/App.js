import './App.css';
import Axios from "axios";
import {useEffect, useState} from "react";







  // test commit 2

function App() {
  const [SpacePicture, setSpacePicture] = useState("");

  useEffect(() => {
  Axios.get("https://api.nasa.gov/planetary/apod?api_key=EZ4gnkdhhUyJs7cfkAZ56SGiY1H2wCgPMbSSQ5qO").then((res) =>{
    setSpacePicture(res.data.hdurl);
  });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <h1>{SpacePicture}</h1>
      </header>
    </div>
  );
}

export default App;
