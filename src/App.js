/* НУЖНО IMPORT ПОЛУЧШЕ ИКОНОК*/
import docs from './img/driver-refresh.svg'
import ppl from './img/people.svg'
import qr from './img/scan-barcode.svg'
import set from './img/setting-3.svg'
/* НУЖНО IMPORT ПОЛУЧШЕ ИКОНОК*/
import './App.css';
import './components/mainButton/MainButton.jsx'
import MainButton from './components/mainButton/MainButton.jsx';


function App() {
  return (
    
    <div className="App">
      <MainButton title="Документы" logo={docs}/> 
      <MainButton title="Персонал" logo={ppl}/>
      <MainButton title="QR" logo={qr} />
      <MainButton title="Настройки" logo={set} />
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