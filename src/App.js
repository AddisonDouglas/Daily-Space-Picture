import './App.css';
import Axios from "axios";
import {useEffect, useState} from "react";


function App() {
  const [SpacePicture, setSpacePicture] = useState("");
  const [SpaceDate, setSpaceDate] = useState("");
  const [explanation, setExplantion] = useState("");
  const [Title, setTitle] = useState("");


  useEffect(() => {
  Axios.get("https://api.nasa.gov/planetary/apod?api_key=EZ4gnkdhhUyJs7cfkAZ56SGiY1H2wCgPMbSSQ5qO").then((res) =>{
    console.log(res.data);
    setSpaceDate(res.data.date);
    setExplantion(res.data.explanation);
    setSpacePicture(res.data.hdurl);
    setTitle(res.data.title);

  });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{Title}</h1>
      </header>
      <img src ={SpacePicture} className="photo"></img>
      <h8>{SpaceDate}</h8>
      <h6>{explanation}</h6>
    </div>
  );
}

export default App;
