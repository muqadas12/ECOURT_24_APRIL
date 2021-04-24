import React from "react"
import "./FormTwo.css"
import Ripples from "react-ripples";
import {useFormik} from "formik"
import { Form, Row, Container, Col } from "react-bootstrap";
import * as Yup from "yup"


const initialValues={
    CaseNo:'1',
    CaseYear:''
}
const onSubmit=values=>{
    console.log('Form data',values)
}
const validate=values=>{
    let errors={}
    if(!values.CaseNo){
        errors.CaseNo="Required"
    }
    if(!values.Caseyear){
        errors.Caseyear="Required"
    }

    return errors
}
const validationSchema=Yup.object({
    CaseNo:Yup.number().required("Required!!"),
    Caseyear:Yup.number().required("Required")


})
const FormTwo=()=>{
    const formik=useFormik({
        initialValues,
        onSubmit,
        validationSchema
        // validate
    })
    console.log("visited fields",formik.touched)

    return(
  
        <div>
            <form onSubmit={formik.handleSubmit}>
        <p className="Caseno">CaseNo</p>
        <input type="text" name="CaseNo" onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.CaseNo}/>
    {formik.touched.CaseNo && formik.errors.CaseNo ? <div className="error">{formik.errors.CaseNo}</div> :null}



        <p className="year">
              Case Year:</p>
            <p className="Caseyr"> <Form.Control name="Caseyear" className="classyr" onChange={formik.handleChange}onBlur={formik.handleBlur} values={formik.values.Caseyear}  as="select" value="Choose...">
                <option className="option" >2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2013</option>
                <option>2012</option>
                <option>2011</option>
                <option>2010</option>
              </Form.Control>
              {/* {formik.touched.Caseyear &&formik.errors.Caseyear ? <div className="error">{formik.errors.Caseyear}</div> :null} */}
              </p>
              
            
    </form>
            

        </div>
    )

}

export default FormTwo;