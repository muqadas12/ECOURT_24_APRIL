import React from 'react'
import {Formik,Form, useFormik} from "formik"
import * as Yup from "yup"

import "./LoginForm.css"

const initialValues={
    email:'',
    password:''
  }
  
  
  const validationSchema=Yup.object({
    email:Yup.string().email("Invalid email Format").required("Required!!"),
    password:Yup.string().required("Required")
  
  
  })
  const onSubmit=values=>{
  console.log("Form data",values)
  }
  
function LoginForm(props) {
    const formik=useFormik({
        initialValues,
       validationSchema,
        onSubmit
     })
      console.log("form errors",formik.touched)
    return (
        
        <div>
     <form onSubmit={formik.handleSubmit}>         
      <label className="Email">Email</label>
      <input type="text" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
  {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div>:null}

      <label className="password">Password</label>
      <input type="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div>:null}
      </form>
      </div>
    )
}

export default LoginForm
