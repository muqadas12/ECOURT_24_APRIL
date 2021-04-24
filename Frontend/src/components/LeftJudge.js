import React,{Component} from 'react'
import {Form,Button} from "react-bootstrap"
import axios from "axios"
import { FormErrors } from "../components/FormErrors"
import "./Lf.css"
class Left extends Component{
    constructor (props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          passwordShown:' ',
          formErrors: {email: '', password: '',},
          
          emailValid: false,
          passwordValid: false,
          formValid: false,
          passwordShown:false,
          loading:false
        }
      }
      handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
      }
      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
            
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        
                       
                        
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid:this.state.emailValid && this.state.passwordValid});
      }
      
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }
      //form validation ends
      authSubmithandler = async event => {
        event.preventDefault();
        const data = {
          email: this.state.email,
          password: this.state.password
        }
        try {
          const response = await axios.post(`http://localhost:2000/api/users/login`, data);
          alert(`Logged In Successfully as ${data.email}`);
          window.location = "http://localhost:3000/JudgeMod";
        } catch (error) {
          alert(error);
        }
      }


      fetchData = () => {
        this.setState({ loading: true });
    
        //Faking API call here
        setTimeout(() => {
          this.setState({ loading: false });
        },7000);
       
      };

    render(){
      const {loading}=this.state;


    
    return (
        <div>
      <form onSubmit={this.authSubmithandler} className="Form">
      
        <p className="lawyer-login-form-onerrrr-jugedashboard">Login form</p>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>

        
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label className="email-login-lawyer" htmlFor="email">Email Address:</label>
          <input  type="emailjudge" required className="form-control" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label className="email-login-lawyer" htmlFor="password">Password</label>
          <input type="passworddjuge" hide className="form-control" name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}  />
          
           
       
        </div>
        
        <button type="submit" className="btn btn-primary" 
        disabled={!this.state.formValid }
        onClick={()=>{
          this.fetchData()
        }}
      
       
       >
         {loading && (
            <i
              className="fa fa-spinner fa-spin"
              style={{ marginRight: "5px" }}
            />
          )}
          {loading && <span>Sign In....</span>}
          {!loading && <span>Sign In</span>}
         
          
          
          
          
          </button>
s

          
       
        
      </form>
      
      </div>
     
    )
}
}
export default Left;
       
