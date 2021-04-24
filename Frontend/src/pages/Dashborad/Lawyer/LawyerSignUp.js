import React, { Component } from 'react';
import { FormErrors } from "../../../components/FormErrors"
// import './LoginCMS.css';
import Wrap from "../../../shared/UIElements/Wrap"
import signup from "../../../assets/Images/signL.PNG"
import {Link} from "react-router-dom";
import "./Sign.css"
import axios from "axios"
class LawyerSignUp extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      name:'',
      email: '',
      password: '',
      isLoading:'',
      error:'',
      formErrors: {email: '', password: '',name:''},
      nameValid:false,
      emailValid: false,
      passwordValid: false,
      formValid: false,
      loading:false
    }
  }
  

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }
 
//form validation starts
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
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
        case 'name':
        nameValid = value.length >= 6;
        fieldValidationErrors.name = nameValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    nameValid:nameValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.nameValid &&this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
  //form validation ends
  


  
  authSubmithandler = async event => {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name
    }
    axios.post('http://localhost:2000/api/users/signUp', data).then(res => {
      alert(`You are signUp as ${data.name}`)
      window.location = "http://localhost:3000/LoginLawyer";

      console.log(res);
      this.setState({ email: "", password: "", name: "" });
    }).catch((err) => {
      alert(err);
    })

  }
  fetchData = () => {
    this.setState({ loading: true });

    //Faking API call here
    setTimeout(() => {
      this.setState({ loading: false });
    },7000);
   
  };
  render (props) {
    const {loading}=this.state;

    return (
      <form onSubmit={this.authSubmithandler} className="Form">
        <Wrap>
        <img className="sign-img" src={signup}/>
        <h5 className="Lawyer-sign">Welcome to Lawyer dashboard</h5>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>

        <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
          <label htmlFor="name">Name:</label>
          <input type="passwordd" required className="form-control" name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="passwordd" className="form-control" name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}  />
        </div>
        <button type="submit" className="Lawyer-sign-up"
        disabled={!this.state.formValid}
        alert ={this.state.formValid}
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
          {loading && <span>Sign up ....</span>}
          {!loading && <span>Sign up </span>}
          
          
          
          </button>
          <div className="already-user"><p>Already a user?Need<Link to={'/LoginLawyer'}> Sign In</Link> </p></div>
        </Wrap>
      </form>
    )
  }
}

export default LawyerSignUp;