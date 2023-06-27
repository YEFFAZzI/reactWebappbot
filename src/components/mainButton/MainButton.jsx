
import './MainButton.css';

function MainButton(props) {
  return (
    <div className='mainBtn'>
        <div></div>
        <div>{props.title} </div>
    </div>
  );
}

export default MainButton;
