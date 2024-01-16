import './App.css';

fetch("https://api.nasa.gov/planetary/apod?api_key=EZ4gnkdhhUyJs7cfkAZ56SGiY1H2wCgPMbSSQ5qO")
  .then((res) => res.json())
  .then((data) =>{
    console.log(data);

  });

  // test commit

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>HEWO</h1>
      </header>
    </div>
  );
}

export default App;
