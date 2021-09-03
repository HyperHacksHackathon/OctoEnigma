import { useState } from 'react';
import wolfram from './Sponsors/wolfram.png';
import replit from './Sponsors/replit.png';
import echoar from './Sponsors/echoAR.png';
import xyz from './Sponsors/xyz.png';
import voiceflow from './Sponsors/voiceflow.png';
import launchx from './Sponsors/launchx.png';
import axure from './Sponsors/axure.jpg';
import uizard from './Sponsors/uizard.png';



import './Sponsors.css'
import './App.css';

function Sponsors() {
    return ( 
    <div className='Page'>
        <div id='SPONSORSMARK' style={{
            transform: 'translate(0, -30vh)'
        }}></div>
        <div class="container sponsors">
            <div class="row">
                <Sponsor 
                    title='Wolfram'
                    site='https://www.wolfram.com'
                    desc="Compute answers using Wolfram's breakthrough technology & knowledgebase, relied on by millions of students & professionals. "
                    img={wolfram}
                >
                </Sponsor>
                <Sponsor 
                    title='Replit'
                    site='https://replit.com/'
                    desc='Replit is a simple yet powerful online IDE, Editor, Compiler, Interpreter, and REPL. Code, compile, run, and host in 50+ programming languages.'
                    img={replit}
                >
                </Sponsor>
                <Sponsor 
                    title='EchoAR'
                    site='https://www.echoar.xyz'
                    desc='echoAR is a cloud-based 3D-first content management system (CMS) and delivery network (CDN) that provides server-side solutions to help scale augmented and virtual reality (AR/VR) applications.'
                    img={echoar}
                >
                </Sponsor>
                <Sponsor 
                    title='XYZ'
                    site='https://gen.xyz'
                    desc='.xyz is a bold, fresh choice for users who crave creativity and versatility in a domain name. It’s short and memorable without the limitations of a label or language barrier – so you can focus on connecting with your audience anywhere in the world.'
                    img={xyz}
                >
                </Sponsor>
                <Sponsor 
                    title='Voiceflow'
                    site='https://www.voiceflow.com'
                    desc="Voiceflow helps teams create great conversations from start to finish. Bring your conversations to life with the platform used by the world's best teams."
                    img={voiceflow}
                >
                </Sponsor>
                <Sponsor 
                    title='LaunchX'
                    site='https://launchx.com'
                    desc="LaunchX brings together high school entrepreneurs with the resources and network to unleash their entrepreneurial spirit and start real companies."
                    img={launchx}
                >
                </Sponsor>
                <Sponsor 
                    title='Axure'
                    site='https://axure.com'
                    desc="Axure RP is the only UX tool that gives UX professionals the power to build realistic, functional prototypes."
                    img={axure}
                >
                </Sponsor>
                {/* <Sponsor 
                    title='Uizard'
                    site='https://uizard.io'
                    desc="Uizard, the design tool for everyone: the world's first AI-powered digital design assistant for non-designers."
                    img={uizard}
                >
                </Sponsor> */}
            </div>
        </div>
    </div>
    );
}

function Sponsor(props) {
    return (
        <div className='col-6 col-sm-4 d-flex align-items-center justify-content-center'>
            <img data-toggle="modal" data-target={'#' + props.title + 'Modal'} src={props.img} className='sponsor-image'></img>
            <div class="modal fade" id={props.title + 'Modal'} tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-dark" id="exampleModalLongTitle"><a href={props.site}>{props.title}</a></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p className='text-dark'>
                                {props.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Sponsors;