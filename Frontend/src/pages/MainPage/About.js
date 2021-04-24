import React from "react";
import ju from "../../assets/Images/c1.jpg"
import "./About.css"
import Crousel from "../../components/Crousel"
import Card1 from "../../components/Card1"
import Card3 from "../../components/Card3"
const About=(handleLogged)=>{
    return(<div>
    
    <div className="About">
        <Crousel/>
        <br/>
        <br/>
        <p className="ecourt-heaig">Welcome to Distric E-Court</p>
        <hr className="newww"/>
        <br/>
        <p className="paraEcourt">E-Court is a website that not help judges lawyer but also lay man to manage all court related work through this website</p>
        <br/>
        <br/>
        <Card1/>
        <br/>
        <br/>
        <Card3/>

        
    
        
        

  </div>
  </div>
    )
}
export default About;