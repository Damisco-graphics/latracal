import React from 'react';


import '../css/App.css'
import LSfavicon from '../icon/favicon.png' 

function footer(){
    return (
    <div id='footer'>
        <div style={{display: "flex",float:"left", fontSize:"0.7rem"}}>            
        </div>
            <div className='copyright' >
                Copyright© 2022
        </div>
        <div className='footerLS'>
            <img className='footerLsImg' src={LSfavicon} alt="LatracalSolutions icon"/> Latracal Solutions
        </div>
    </div>
    )
}


export default footer;