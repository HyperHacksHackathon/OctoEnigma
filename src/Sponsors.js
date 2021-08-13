import { useState } from 'react';
import wolfram from './Sponsors/wolfram.png';
import replit from './Sponsors/replit.png';
import echoar from './Sponsors/echoAR.png';
import xyz from './Sponsors/xyz.png';
import voiceflow from './Sponsors/voiceflow.png';

import './Sponsors.css'
import './App.css';

function Sponsors() {
    return ( 
    <div className='Page'>
        <div class="container sponsors">
            <div class="row">
                <div class="col-6">
                    <Sponsor 
                        title='Wolfram'
                        desc="Compute answers using Wolfram's breakthrough technology & knowledgebase, relied on by millions of students & professionals. "
                        img={wolfram}
                    >
                    </Sponsor>
                 
                </div>
                <div class="col-6">
                    <Sponsor 
                        title='Replit'
                        desc='Replit is a simple yet powerful online IDE, Editor, Compiler, Interpreter, and REPL. Code, compile, run, and host in 50+ programming languages.'
                        img={replit}
                    >
                    </Sponsor>
                </div>
                <div class="col-6">
                    <Sponsor 
                        title='EchoAR'
                        desc='echoAR is a cloud-based 3D-first content management system (CMS) and delivery network (CDN) that provides server-side solutions to help scale augmented and virtual reality (AR/VR) applications.'
                        img={echoar}
                    >
                    </Sponsor>
                </div>
                <div class="col-6">
                    <Sponsor 
                        title='XYZ'
                        desc='.xyz is a bold, fresh choice for users who crave creativity and versatility in a domain name. It’s short and memorable without the limitations of a label or language barrier – so you can focus on connecting with your audience anywhere in the world.'
                        img={xyz}
                    >
                    </Sponsor>
                </div>
                <div class="col-6">
                    <Sponsor 
                        title='Voiceflow'
                        desc="Voiceflow helps teams create great conversations from start to finish. Bring your conversations to life with the platform used by the world's best teams."
                        img={voiceflow}
                    >
                    </Sponsor>
                </div>
            </div>
        </div>
        
    </div>
    );
}

function Sponsor(props) {
    return (
        <div>
            <img data-toggle="modal" data-target={'#' + props.title + 'Modal'} src={props.img} className='sponsor-image'></img>
            <div class="modal fade" id={props.title + 'Modal'} tabindex="-1" role="dialog" aria-labelledby="echoARModalTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-dark" id="exampleModalLongTitle">{props.title}</h5>
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