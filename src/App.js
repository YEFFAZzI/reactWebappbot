/* НУЖНО IMPORT ПОЛУЧШЕ ИКОНОК*/
import docs from './img/driver-refresh.svg'
import ppl from './img/people.svg'
import qr from './img/scan-barcode.svg'
import set from './img/setting-3.svg'
/* НУЖНО IMPORT ПОЛУЧШЕ ИКОНОК*/
import {React} from 'react'
import './App.css';
import './components/mainButton/MainButton.jsx'
import MainButton from './components/mainButton/MainButton.jsx';



function App() {

  
  return (
      
    <div className="App" >
      <MainButton title="Документы" logo={docs} /> 
      <MainButton title="Персонал" logo={ppl} />
      <MainButton title="QR" logo={qr} />
      <MainButton title="Настройки" logo={set} />
      <button onClick={window.Telegram.WebApp.showScanQrPopup('hi')}>QR</button>
    </div>
  );
}

export default App;

