import "./App.css";
import dictionary from "./dictionary.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={dictionary}
          className="img-fluid App-image"
          alt="dictionary"
        />
      </header>
    </div>
  );
}

export default App;
