import title from './NoGlowTitle.png';
import './App.css';
import { useState } from 'react';

function App() {
  const [applyHoverState, setApplyHoverState] = useState(false);

  return (
    <div className="App d-flex align-items-center">
      <div className='container'>
        <img src={title} className='w-100 px-5'></img>
        <svg xmlns="http://www.w3.org/2000/svg" width='25%' viewBox="0 0 421.131 121.138" className='mt-3 apply-button' 
          onMouseEnter={() => setApplyHoverState(true)}
          onMouseLeave={() => setApplyHoverState(false)}
        >
          <g id="Group_10" data-name="Group 10" transform="translate(-1043.999 -832.069)">
            <a href="#">
              <path className="apply-button" id="Path_6" data-name="Path 6" d="M3378.629,3784.57H2972.5V3860.7l28.6,30h377.535Z" transform="translate(-1921 -2945)" fill={applyHoverState ? 'white' : 'black'} stroke="#ffffff" strokeWidth="15"/>
              <text id="APPLY" fill={applyHoverState ? 'black' : 'white'} transform="translate(1173 914)" fontSize="56" fontFamily="ibm-plex-sans, sans-serif" fontWeight="700">APPLY</text>
              </a>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default App;
