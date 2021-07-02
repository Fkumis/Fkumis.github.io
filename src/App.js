import logo from './logo.svg';
import images from './images.webp'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={images} height={200} width={200} />
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Designed by Desire
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
