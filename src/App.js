import "./App.css";
import dictionary from "./dictionary.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={dictionary}
            className="img-fluid App-image"
            alt="dictionary"
          />
        </header>
        <footer className="App-footer">
          This project was coded by Katharina Weberberger and is{" "}
          <a
            href="https://github.com/katharinaweb/react-dictionary-app-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://reverent-roentgen-62d65d.netlify.app/"
            target="blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
