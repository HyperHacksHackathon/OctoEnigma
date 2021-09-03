import './App.css';
import './Home.css';
import title from './NoGlowTitle.png';
import { useState } from 'react';
import Nav from './Nav';

function Home(props) {
    const [applyHoverState, setApplyHoverState] = useState(false);

    return (
    <div className='container home'>
        <div style={{
            opacity: 1 - props.scrollPosition * 2
        }}>
            <div class="scroll-indicator1"></div>
            <div class="scroll-indicator2"></div>
        </div>
        <img src={title} alt="HyperHacks Logo" className='w-100 px-5 zh' draggable="false" style={{
            maxWidth: props.scrollPosition * document.documentElement.clientHeight < 390 ? Math.max((80 - (90 * props.scrollPosition + 10)), 48) + 'vw' : '48vw',
            position: props.scrollPosition * document.documentElement.clientHeight < 390 ? 'relative' : 'fixed',
            top: 5,
            zIndex: 1000
        }}></img>
        <svg xmlns="http://www.w3.org/2000/svg" width='25%' viewBox="0 0 421.131 121.138" className='mt-3 apply-button' 
        onMouseEnter={() => setApplyHoverState(true)}
        onMouseLeave={() => setApplyHoverState(false)}
        style={{
            zIndex: 500,
            opacity: 1 - props.scrollPosition * 2
        }}
        >
        <g id="Group_10" data-name="Group 10" transform="translate(-1043.999 -832.069)">
            <a href="https://apply.hyperhacks.org">
            <path className="apply-button" id="Path_6" data-name="Path 6" d="M3378.629,3784.57H2972.5V3860.7l28.6,30h377.535Z" transform="translate(-1921 -2945)" fill={applyHoverState ? 'white' : 'black'} stroke="#ffffff" strokeWidth="15"/>
            <text id="APPLY" fill={applyHoverState ? 'black' : 'white'} transform="translate(1173 914)" fontSize="56" fontFamily="ibm-plex-sans, sans-serif" fontWeight="700">APPLY</text>
            </a>
        </g>
        </svg>
        <hr style={{
            color: 'white',
            width: '13vw',
            marginTop: '13px',
            marginBottom: '5px'
        }}></hr>
        <div style={{
            width: '20%'
        }}>
        <a href='https://mentors.hyperhacks.org' style={{
            color: 'white',
            fontFamily: "ibm-plex-sans, sans-serif",
            fontSize: '2vh',
            opacity: 1 - props.scrollPosition * 2
        }}>Mentor Application</a>
        </div>
    </div>
    );
}
 
export default Home;