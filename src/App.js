import "./App.css";
import dictionaryImage from "./dictionaryImage.jpg";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-dictionary">
          <header className="App-header">
            <img
              src={dictionaryImage}
              className="img-fluid App-image"
              alt="dictionary"
            />
          </header>
          <main>
            <Dictionary />
          </main>
        </div>
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
