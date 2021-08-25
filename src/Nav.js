import './Nav.css'
import { useState } from 'react';

function Nav(props) {
  const [faqHoverState, setFAQHoverState] = useState(false);
  const [aboutHoverState, setAboutHoverState] = useState(false);
  const [sponsorsHoverState, setSponsorsHoverState] = useState(false);

  return (
    <div className='zh'>
        <svg xmlns="http://www.w3.org/2000/svg" width="2740.179" height="280.331" viewBox="0 0 2740.179 280.331" className='bar' style={{
            //maxWidth: props.scrollPosition < 0.41 ? 100 - (90 * props.scrollPosition + 10) + '%' : '48%',
            position: 'fixed',
            opacity: ((document.documentElement.clientWidth * 0.48 * 0.139957264957265) - 140) < ((1 - props.scrollPosition) * document.documentElement.clientHeight) ? '0' : '1',
            top: ((document.documentElement.clientWidth * 0.48 * 0.139957264957265) - 140),
            left: '-45vw'
        }}>
            <defs>
                <filter id="Path_7" x="0" y="0" width="2740.179" height="280.331" filterUnits="userSpaceOnUse">
                <feOffset dy="5" input="SourceAlpha"/>
                <feGaussianBlur stdDeviation="25" result="blur"/>
                <feFlood flood-opacity="0.161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
                </filter>
            </defs>
            <g id="Group_16" data-name="Group 16" transform="translate(126 -1066.384)">
                <g transform="matrix(1, 0, 0, 1, -126, 1066.38)" filter="url(#Path_7)">
                <path id="Path_7-2" data-name="Path 7" d="M1940,4341.884h698.766L2754.1,4457.214h977.876L3847.3,4341.884h682.876" transform="translate(-1865 -4264.38)" fill="none" stroke="#fff" stroke-width="15"/>
                </g>
                <g id="Group_14" data-name="Group 14" transform="translate(6.646 113)">
                <line id="Line_15" data-name="Line 15" y2="63" transform="translate(1087.5 1108.5)" fill="none" stroke="#fff" strokeWidth="6"/>
                <line id="Line_16" data-name="Line 16" y2="63" transform="translate(1401.5 1108.669)" fill="none" stroke="#fff" strokeWidth="6"/>
                </g>
                <g id="Group_17" data-name="Group 17">
                <a href='#FAQMARK'>
                <path id="Path_13" data-name="Path 13" d="M2787.822,4491.669l-27.361-27.361v-37.441h272.977v64.8Z" transform="translate(-1940 -3207)" stroke="#fff" strokeWidth="10" fill={faqHoverState ? 'white' : 'black'}
                    onMouseEnter={() => setFAQHoverState(true)}
                    onMouseLeave={() => setFAQHoverState(false)}
                />
                </a>
                <a href='#SPONSORSMARK'>
                <path id="Path_15" data-name="Path 15" d="M3006.079,4426.868l27.361,27.36v37.442H2760.461v-64.8Z" transform="translate(-1354.024 -3207)" stroke="#fff" strokeWidth="10" fill={sponsorsHoverState ? 'white' : 'black'}
                    onMouseEnter={() => setSponsorsHoverState(true)}
                    onMouseLeave={() => setSponsorsHoverState(false)}
                />
                </a>
                <a href='#ABOUTMARK'>
                <path id="Path_14" data-name="Path 14" d="M2760.461,4491.669v-64.8h313v64.8Z" transform="translate(-1667.023 -3207)" stroke="#fff" strokeWidth="10" fill={aboutHoverState ? 'white' : 'black'}
                    onMouseEnter={() => setAboutHoverState(true)}
                    onMouseLeave={() => setAboutHoverState(false)}
                />
                </a>
                </g>
                <a href='#FAQMARK'>
                <text id="FAQ" transform="translate(927.146 1265.937)" fill={faqHoverState ? 'black' : 'white'} font-size="35" font-family="ibm-plex-sans, sans-serif" font-weight="700"
                    onMouseEnter={() => setFAQHoverState(true)}
                    onMouseLeave={() => setFAQHoverState(false)}
                ><tspan x="0" y="0" clickable="false">FAQ</tspan></text></a>
                <a href='#ABOUTMARK'>
                <text id="About" transform="translate(1201.236 1265.937)" fill={aboutHoverState ? 'black' : 'white'} font-size="35" font-family="ibm-plex-sans, sans-serif" font-weight="700"
                    onMouseEnter={() => setAboutHoverState(true)}
                    onMouseLeave={() => setAboutHoverState(false)}
                ><tspan x="0" y="0" clickable="false">About</tspan></text></a>
                <a href='#SPONSORSMARK'>
                <text id="Sponsors" transform="translate(1463.236 1265.937)" fill={sponsorsHoverState ? 'black' : 'white'} font-size="35" font-family="ibm-plex-sans, sans-serif" font-weight="700"
                    onMouseEnter={() => setSponsorsHoverState(true)}
                    onMouseLeave={() => setSponsorsHoverState(false)}
                ><tspan x="0" y="0" clickable="false">Sponsors</tspan></text></a>
                <path d={"M" + ((props.scrollPosition - 1) * 295 + 2640) + ",4510.669 h-200"} transform="translate(-1667.023 -3207)" strokeWidth='10' stroke={props.scrollPosition < 0.2 ? 'transparent' : 'white'}></path>
            </g>
         </svg>

         <svg xmlns="http://www.w3.org/2000/svg" width="2740.179" height="280.331" viewBox="0 0 2740.179 280.331" className='bar' style={{
            opacity: ((document.documentElement.clientWidth * 0.48 * 0.139957264957265) - 140) > ((1 - props.scrollPosition) * document.documentElement.clientHeight) ? '0' : '1',
            left: '-45vw'
        }}>
            <defs>
                <filter id="Path_7" x="0" y="0" width="2740.179" height="280.331" filterUnits="userSpaceOnUse">
                <feOffset dy="5" input="SourceAlpha"/>
                <feGaussianBlur stdDeviation="25" result="blur"/>
                <feFlood flood-opacity="0.161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
                </filter>
            </defs>
            <g id="Group_16" data-name="Group 16" transform="translate(126 -1066.384)">
                <g transform="matrix(1, 0, 0, 1, -126, 1066.38)" filter="url(#Path_7)">
                <path id="Path_7-2" data-name="Path 7" d="M1940,4341.884h698.766L2754.1,4457.214h977.876L3847.3,4341.884h682.876" transform="translate(-1865 -4264.38)" fill="none" stroke="#fff" stroke-width="15"/>
                </g>
                <g id="Group_14" data-name="Group 14" transform="translate(6.646 113)">
                <line id="Line_15" data-name="Line 15" y2="63" transform="translate(1087.5 1108.5)" fill="none" stroke="#fff" strokeWidth="6"/>
                <line id="Line_16" data-name="Line 16" y2="63" transform="translate(1401.5 1108.669)" fill="none" stroke="#fff" strokeWidth="6"/>
                </g>
                <g id="Group_17" data-name="Group 17">
                <a href='#FAQMARK'>
                <path id="Path_13" data-name="Path 13" d="M2787.822,4491.669l-27.361-27.361v-37.441h272.977v64.8Z" transform="translate(-1940 -3207)" stroke="#fff" strokeWidth="10" fill={faqHoverState ? 'white' : 'black'}
                    onMouseEnter={() => setFAQHoverState(true)}
                    onMouseLeave={() => setFAQHoverState(false)}
                />
                </a>
                <a href='#SPONSORSMARK'>
                <path id="Path_15" data-name="Path 15" d="M3006.079,4426.868l27.361,27.36v37.442H2760.461v-64.8Z" transform="translate(-1354.024 -3207)" stroke="#fff" strokeWidth="10" fill={sponsorsHoverState ? 'white' : 'black'}
                    onMouseEnter={() => setSponsorsHoverState(true)}
                    onMouseLeave={() => setSponsorsHoverState(false)}
                />
                </a>
                <a href='#ABOUTMARK'>
                <path id="Path_14" data-name="Path 14" d="M2760.461,4491.669v-64.8h313v64.8Z" transform="translate(-1667.023 -3207)" stroke="#fff" strokeWidth="10" fill={aboutHoverState ? 'white' : 'black'}
                    onMouseEnter={() => setAboutHoverState(true)}
                    onMouseLeave={() => setAboutHoverState(false)}
                />
                </a>
                </g>
                <text id="FAQ" transform="translate(927.146 1265.937)" fill={faqHoverState ? 'black' : 'white'} font-size="35" font-family="ibm-plex-sans, sans-serif" font-weight="700"
                    onMouseEnter={() => setFAQHoverState(true)}
                    onMouseLeave={() => setFAQHoverState(false)}
                ><tspan x="0" y="0">FAQ</tspan></text>
                <text id="About" transform="translate(1201.236 1265.937)" fill={aboutHoverState ? 'black' : 'white'} font-size="35" font-family="ibm-plex-sans, sans-serif" font-weight="700"
                    onMouseEnter={() => setAboutHoverState(true)}
                    onMouseLeave={() => setAboutHoverState(false)}
                ><tspan x="0" y="0">About</tspan></text>
                <text id="Sponsors" transform="translate(1463.236 1265.937)" fill={sponsorsHoverState ? 'black' : 'white'} font-size="35" font-family="ibm-plex-sans, sans-serif" font-weight="700"
                    onMouseEnter={() => setSponsorsHoverState(true)}
                    onMouseLeave={() => setSponsorsHoverState(false)}
                ><tspan x="0" y="0">Sponsors</tspan></text>
                <path d={"M" + ((props.scrollPosition - 1) * 295 + 2640) + ",4510.669 h-200"} transform="translate(-1667.023 -3207)" strokeWidth='10' stroke={props.scrollPosition < 0.2 ? 'transparent' : 'white'}></path>
            </g>
         </svg>
         <div style={{
             backgroundColor: '#181a1f',
             width: '100vw',
             height: 'calc(' + ((document.documentElement.clientWidth * 0.8 * 0.139957264957265)) + 'px)',
             position: 'fixed',
             top: 0,
             left: 0,
             zIndex: '-1000'
         }}>

         </div>
    </div>
  );
}

export default Nav;
