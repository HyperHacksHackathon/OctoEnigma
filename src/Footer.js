import { Component } from 'react';
import FAQ from './FAQ';
import Home from './Home';
import Nav from './Nav';
import Sponsors from './Sponsors';
// import seperator16 from './assets/img/seperator-16x16.png';
import seperator32 from './assets/img/seperator-32x32.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './socialMedia.css'
import {
    faYoutube,
    faDiscord,
    faTwitter,
    faInstagram,
    faTwitch
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
      <div className="container mb-4">
        <div className='row my-3'>
            <div className='col'>
                <a href='mailto:info@hyperhacks.org'>Contact</a>
                <img src={seperator32} alt="Icon Seperator" className="mx-3" draggable="false" cl></img>
                <a href='https://hyperhacks.devpost.com/'>Devpost</a>
                <img src={seperator32} alt="Icon Seperator" className="mx-3" draggable="false" cl></img>
                <a href='https://sponsors.hyperhacks.org/'>Sponsors</a>
                <br></br>
                <a href="https://www.youtube.com/channel/UC1ql_UDrZ1SR5Estfjv5zgA"
        className="youtube social mt-3">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.twitch.tv/hyper_hacks"
                  className="twitch social">
                  <FontAwesomeIcon icon={faTwitch} size="2x" />
                </a>
                <a href="https://discord.green/hyperhacks"
                  className="discord social">
                  <FontAwesomeIcon icon={faDiscord} size="2x" />
                </a>
                <a href="https://www.twitter.com/hyper_hacks" className="twitter social">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com/hyper.hacks"
                  className="instagram social">
                  <FontAwesomeIcon icon={faInstagram} size="2x" color='#FF7700'/>
                </a>
            </div>
        </div>
      HyperHacks © 2021
      </div>
    );
}

export default Footer;
