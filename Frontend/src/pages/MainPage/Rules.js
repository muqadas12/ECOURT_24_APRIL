import React from 'react'
import rules from "../../assets/Images/rules2.jpg"
import "./Rules.css"
function Rules() {
    return (
        <div>
            <img className="responsive-image " src={rules} alt="My logo" /> 
            <h1 className="rules-top-heading">Rules & Orders</h1>
            <h4 className="heading-two">District Court Rules and Orders</h4>
            <h5 >Volume I:<a href="https://www.lhc.gov.pk/system/files/Volume1.pdf">Instructions to Civil Courts</a></h5>
            <h5 >Volume II:<a href="https://lhc.gov.pk/system/files/volume2.pdf">Instructions to Civil Courts</a></h5>
            <h5 >Volume III:<a href="https://lhc.gov.pk/system/files/volume3.pdf">Instructions to Criminal Courts </a></h5>
            <h5 >Volume IV:<a href="https://lhc.gov.pk/system/files/volume4.pdf">Instructions to Civil Courts </a></h5>

        </div>
        
    )
}

export default Rules
