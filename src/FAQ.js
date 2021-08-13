import { useState } from 'react';
import './App.css';

function FAQ() {
    const [currentSlide, setSlide] = useState(0);

    return ( 
    <div className='Page' id='FAQ'>
        <div id="carouselExampleIndicators" class="carousel slide mt-5 w90" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className='carousel-inner carousel-item-mw'>
                <div class={"carousel-item" + (currentSlide == 0 ? 'active' : '')}>
                    <svg xmlns="http://www.w3.org/2000/svg" height='65vh' width='90vw' viewBox="0 0 891.012 535.179">
                    <g id="Group_18" data-name="Group 18" transform="translate(-179.488 -1586.266)">
                        <line id="Line_12" data-name="Line 12" x2="879" transform="translate(185.5 1672.994)" fill="none" stroke="#ee14fa" stroke-width="12"/>
                        <path id="Path_11" data-name="Path 11" d="M2224,4974.266V5444.95l52.5,52.5h826.517V5042.367l-68.1-68.1Z" transform="translate(-2038.512 -3382)" fill="none" stroke="#ee14fa" stroke-width="12"/>
                        <text id="How_Many_" data-name="How Many?" transform="translate(213 1646)" fill="#fff" font-size="35" font-family="ibm-plex-sans, sans-serif" font-weight="700"><tspan x="0" y="0">What's a hackathon?</tspan></text>
                        <text id="Lots" transform="translate(213 1723)" fill="#fff" font-size="32" font-family="ibm-plex-sans, sans-serif"><tspan x="0" y="0">Blah blah blah blah blah</tspan></text>
                    </g>
                    </svg>
                </div>
                <div className={"carousel-item" + (currentSlide == 1 ? 'active' : '')}>
                    <svg xmlns="http://www.w3.org/2000/svg" height='65vh' width='90vw' viewBox="0 0 891.012 535.179">
                        <g id="Group_18" data-name="Group 18" transform="translate(-179.488 -1586.266)">
                            <line id="Line_12" data-name="Line 12" x2="879" transform="translate(185.5 1672.994)" fill="none" stroke="#ee14fa" stroke-width="12"/>
                            <path id="Path_11" data-name="Path 11" d="M2224,4974.266V5444.95l52.5,52.5h826.517V5042.367l-68.1-68.1Z" transform="translate(-2038.512 -3382)" fill="none" stroke="#ee14fa" stroke-width="12"/>
                            <text id="How_Many_" data-name="How Many?" transform="translate(213 1646)" fill="#fff" font-size="35" font-family="ibm-plex-sans, sans-serif" font-weight="700"><tspan x="0" y="0">Who can apply?</tspan></text>
                            <text id="Lots" transform="translate(213 1723)" fill="#fff" font-size="32" font-family="ibm-plex-sans, sans-serif"><tspan x="0" y="0">Hoomans</tspan></text>
                        </g>
                    </svg>
                </div>
                <div class={"carousel-item" + (currentSlide == 2 ? 'active' : '')}>
                    <svg xmlns="http://www.w3.org/2000/svg" height='65vh' width='90vw' viewBox="0 0 891.012 535.179">
                        <g id="Group_18" data-name="Group 18" transform="translate(-179.488 -1586.266)">
                            <line id="Line_12" data-name="Line 12" x2="879" transform="translate(185.5 1672.994)" fill="none" stroke="#ee14fa" stroke-width="12"/>
                            <path id="Path_11" data-name="Path 11" d="M2224,4974.266V5444.95l52.5,52.5h826.517V5042.367l-68.1-68.1Z" transform="translate(-2038.512 -3382)" fill="none" stroke="#ee14fa" stroke-width="12"/>
                            <text id="How_Many_" data-name="How Many?" transform="translate(213 1646)" fill="#fff" font-size="35" font-family="ibm-plex-sans, sans-serif" font-weight="700"><tspan x="0" y="0">Where is it?</tspan></text>
                            <text id="Lots" transform="translate(213 1723)" fill="#fff" font-size="32" font-family="ibm-plex-sans, sans-serif"><tspan x="0" y="0">Discord</tspan></text>
                        </g>
                    </svg>
                </div>
            </div>
            <a class="carousel-control-prev" role="button" data-slide="prev" onClick={() => setSlide(currentSlide - 1)} style={{
                display: currentSlide > 0 ? undefined: 'none'
            }}>
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only" selectable='false'></span>
            </a>
            <a class="carousel-control-next" role="button" data-slide="next" onClick={() => setSlide(currentSlide + 1)} style={{
                display: currentSlide < 2 ? undefined: 'none'
            }}>
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only" selectable='false'></span>
            </a>
        </div>
    </div>
    );
}
 
export default FAQ;