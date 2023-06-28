
import { useState } from 'react';
import './MainButton.css';

function MainButton(props) {
  const [anime, setAnime] = useState(true)
  
  const toggle = () => setAnime(!anime);

  return (
    <div className={anime ? 'mainBtn ' : 'mainBtn animeBtn'} onClick={toggle}>
        <img src={props.logo}  alt="logo" className='imglogo'/>
        <div>{props.title} </div>
    </div>
  );
}

export default MainButton;
