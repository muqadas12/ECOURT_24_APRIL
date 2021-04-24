import React from "react";
import "./LoginCasePro.css"
import Card from "../shared/UIElements/Card"
import court from "../assets/Images/court.jpg";
import LoginForm from "../components/LoginForm"


const LoginCasePro=props=>{
   
    return(
        <div className="authentication">
        <Card>
        <img className="responsive-image" src={court} alt="My logo" />
        <LoginForm/>
       <button className="loginbtn" onClick={() => {
                props.history.push("/CaseProceeding");
              }}>Login</button>
         
  
    
        </Card>
  
      </div>
       
    )
}
export default LoginCasePro;












{/* <button onClick={() => {
                props.history.push("/CaseProceeding");
              }}>Login</button> */}