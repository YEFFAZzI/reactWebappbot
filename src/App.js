import logo from './logo.svg';
import './App.css';
import './components/mainButton/MainButton.jsx'
import MainButton from './components/mainButton/MainButton.jsx';

function App() {
  return (
    <div className="App">
      <MainButton title="mainbutton " /> 
    </div>
  );
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MainButton title="mainbutton " /> 


    </div>
  );
}

export default App;
*/