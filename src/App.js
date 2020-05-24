import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2 className="display-2">Sean Lu</h2>
          <h3 className="display-5">Software Engineer</h3>

          <a
            href="https://github.com/Sean2411"
            target="_blank"
            className="App-link"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/sean-lu-7b9ab8192/"
            target="_blank"
            className="App-link"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
