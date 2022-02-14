import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>kubernetes 101</h1>
        <a
          className="App-link"
          href="https://kubernetes.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn kubernetes
        </a>
      </header>
    </div>
  );
}

export default App;
