import React from 'react'
import Image from '../../asserts/error.gif'
import './404.css'
export default function page404(props) {
    return (
        <div className="Page404">
            <img className="pic" src={Image} alt="404 Not Found"/>
            <h3>Looks like you have broken link</h3>
            <h6>Back to <span style={{color:"green",cursor:"pointer"}} onClick={()=>props.history.push("/")}><u>home</u></span></h6>
        </div>
    )
}
