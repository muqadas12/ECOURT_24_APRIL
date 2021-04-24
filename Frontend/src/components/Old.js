// import React from "react"
// import "./FormTwo.css"
// import Ripples from "react-ripples";
// import {useFormik} from "formik"
// import { Form, Row, Container, Col } from "react-bootstrap";
// import * as Yup from "yup"


// const initialValues={
//     CaseNo:'1',
//     CaseYear:''
// }
// const onSubmit=values=>{
//     console.log('Form data',values)
// }
// const validate=values=>{
//     let errors={}
//     if(!values.CaseNo){
//         errors.CaseNo="Required"
//     }
//     if(!values.Caseyear){
//         errors.Caseyear="Required"
//     }

//     return errors
// }
// const validationSchema=Yup.object({
//     CaseNo:Yup.number().required("Required!!"),
//     Caseyear:Yup.number().required("Required")


// })
// const FormTwo=()=>{
//     const formik=useFormik({
//         initialValues,
//         onSubmit,
//         validationSchema
//         // validate
//     })
//     console.log("visited fields",formik.touched)

//     return(
  
//         <div>
//             <form onSubmit={formik.handleSubmit}>
//         <p className="Caseno">CaseNo</p>
//         <input type="text" name="CaseNo" onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.CaseNo}/>
//     {formik.touched.CaseNo && formik.errors.CaseNo ? <div className="error">{formik.errors.CaseNo}</div> :null}



//         <p className="Caseyr">
//               Case Year:
//               <Form.Control name="Caseyear" onChange={formik.handleChange}onBlur={formik.handleBlur} values={formik.values.Caseyear}  as="select" value="Choose...">
//                 <option className="option" >2020</option>
//                 <option>2019</option>
//                 <option>2018</option>
//                 <option>2017</option>
//                 <option>2016</option>
//                 <option>2015</option>
//                 <option>2013</option>
//                 <option>2012</option>
//                 <option>2011</option>
//                 <option>2010</option>
//               </Form.Control>
//               {formik.touched.Caseyear &&formik.errors.Caseyear ? <div className="error">{formik.errors.Caseyear}</div> :null}
//               </p>
              
            
//     </form>
            

//         </div>
//     )

// }

// export default FormTwo;
















import React from "react"
import court from "../assets/Images/court.jpg";
import "./LoginCaseRef.css"
import Card from "../shared/UIElements/Card"
import {Formik,Form, useFormik} from "formik"
import * as Yup from "yup"


const initialValues={
  email:'',
  password:''
}
// const validationSchema=Yup.object({
//   email:Yup.string().email("Invalid Format").required("Required"),
//   password:Yup.string().required("Required")

// })
const validate=values=>{
  let errors={}
  if(!values.email){
      errors.email="Required"
  }
  if(!values.password){
      errors.password="Required"
  }

  return errors
}
const validationSchema=Yup.object({
  email:Yup.string().email("Invalid email Format").required("Required!!"),
  password:Yup.string().required("Required")


})
const onSubmit=values=>{
console.log("Form data",values)
}


function LoginCaseRef(props) {
  const formik=useFormik({
     initialValues,
    validationSchema,
     onSubmit
  })
   console.log("form errors",formik.touched)
  
  
  return (
    <div className="authentication">
      <Card>
      <img className="responsive-image" src={court} alt="My logo" />

      <form onSubmit={formik.handleSubmit}>         
      <label className="Email">Email</label>
      <input type="text" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
  {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div>:null}

      <label className="password">Password</label>
      <input type="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div>:null}
      <button type="submit">Login</button>
       

        </form>
      </Card>

    </div>
  )
}

export default LoginCaseRef
   

    
