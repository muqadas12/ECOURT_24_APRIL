import React from "react"
import referal from "../assets/Images/referal.jpg";
import "./LoginCaseRef.css"
import Card from "../shared/UIElements/Card"
import LoginForm from "../components/LoginForm"
import {useFormik}from "formik"
import * as Yup from "yup"


const validationSchema=Yup.object({
  email:Yup.string().email("Invalid email Format").required("Required!!"),
  password:Yup.string().required("Required")


})
function LoginCaseRef(props) {
  const formik=useFormik({
    validationSchema
  })
  
  
  
  
  return (
    <div className="authentication">
      <Card>
      <img className="responsive-image" src={referal} alt="My logo" />
      <LoginForm/>
     
     <button  className="loginbutton" disabled={!formik.isValid} onClick={() => {
                props.history.push("/CaseReferal");
              }}>Login</button>
        
  

  
      </Card>

    </div>
  )
}

export default LoginCaseRef
   

    
