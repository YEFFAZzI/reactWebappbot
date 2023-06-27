
import './MainButton.css';

function MainButton(props) {
  return (
    <div className="mainBtn">
        <img src={props.logo}  alt="logo" className='imglogo'/>
        <div>{props.title} </div>
    </div>
  );
}

export default MainButton;
