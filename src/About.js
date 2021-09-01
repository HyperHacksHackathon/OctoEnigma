import './App.css';
import './About.css';
import calendar from './assets/icons/calendar.svg';
import clock from './assets/icons/clock.svg';
import code from './assets/icons/code.svg';
import dollar from './assets/icons/dollar.svg';
import idea from './assets/icons/idea.svg';
import presentation from './assets/icons/presentation.svg';

function About() {
    return ( 
    <div className='Page'>
        <div id='ABOUTMARK' style={{
              transform: 'translate(0, -40vh)'
          }}></div>
        <div className='container' style={{
            width: '80vw',
            fontSize: 50,
            fontFamily: "ibm-plex-sans, sans-serif",
            fontWeight: 'bold'
        }}>
            <div className='row py-5'>
                
                <div className='col'>
                    <img src={calendar} className='icon'></img>
                    Oct 1st - 3rd, 2021
                </div>
                <div className='col'>
                    <img src={clock} className='icon'></img>
                    48 hours
                </div>
                </div>
            <div className='row py-5'>
                <div className='col'>
                    <img src={dollar} className='icon'></img>
                    Thousands in prize value
                </div>
                <div className='col'>
                    <img src={presentation} className='icon'></img>
                    Innovation Focused
                </div>
                </div>
            <div className='row py-5'>
                <div className='col'>
                    <img src={code} className='icon'></img>
                    Workshops
                </div>
                <div className='col'>
                    <img src={idea} className='icon'></img>
                    Talks
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default About;