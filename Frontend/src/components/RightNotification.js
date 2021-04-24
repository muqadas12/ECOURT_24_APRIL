import React from 'react'
import {Image} from "react-bootstrap"
import ii from "../assets/Images/ln.jpg"
import "./Lnoti.css";


const RightNotification = () => {
    return (
        <div>
            {/* className="loginnot"
            className="responssssssive-image" */}
            <Image className="loginnot" src={ii}/>
        </div>
    )
}

export default RightNotification
