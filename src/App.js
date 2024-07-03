import './App.css';
import logo from './logo.svg';

function App() {
  return (
    // The noselect class is used to enhance the app user experience by preventing text and image selection,
    // creating a more immersive application-like feel.
    <div className="App noselect">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The core of the app is here.</p>
      </header>
    </div>
  );
}

export default App;
