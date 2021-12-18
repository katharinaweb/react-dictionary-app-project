import "./App.css";
import dictionaryImage from "./dictionaryImage.jpg";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-dictionary">
          <img
            src={dictionaryImage}
            className="img-fluid App-image"
            alt="dictionary"
          />
          <main>
            <Dictionary defaultKeyword="letter" />
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
          . Photos provided by{" "}
          <a href="https://pexels.com/" target="blank" rel="noreferrer">
            Pexels
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
