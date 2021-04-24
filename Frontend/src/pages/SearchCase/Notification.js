import React,{Component} from 'react';
import {Button,  Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios"
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Notification.css"
import notify from "../../assets/Images/noti.jpg";
import { Alert } from 'react-st-modal';
  import {Modal} from 'react-bootstrap'
  import MultiSelect from "react-multi-select-component";

//  import { Modal,ModalHeader,ModalBody,ModalFooter } from "react-bootstrap";

 const animatedComponents = makeAnimated();

const Options = [
  { name: "muqaddasshaaban@gmail.com"},
  { name: "ahmadali280298@gmail.com" },
  { name: "hoorainnoor735@gmail.com" },
 
];

class Notification extends Component{
  constructor(){
    super();
   
  
this.state={
  name:"",
  email:"",
  to:"",
  message:"",
  selectedEmails: [],
  modal: false,
  show: false,
  emailNames:{
    muqddas:false,
    ahmad:false,
    horain:false
  }

 
}
this.toggle = this.toggle.bind(this);



this.chkclick = this.chkclick.bind(this);
this.handleChange=this.handleChange.bind(this)
this.handleSubmit=this.handleSubmit.bind(this)







  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }
  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleCheck=e=>{
    this.setState({[e.target.emailname]:e.target.checked})
  }
  
 
  
 
  async handleSubmit(e){
  // alert("Your email have been sent!")
  this.handleShow()
    e.preventDefault()
    const{name,email,to,message}=this.state
    console.log("email to "+name+" message"+message+"email"+email)
    const form=await axios.post("http://localhost:2000/api/mail",{
      name,
      email,
      to,
      message,
      
     
      
    }).then(res=>{
      console.log(res)
        // alert("Your email have been sent!")
    }).catch(err=>{
      console.log(err)
    })
    
  }
 handleclose = () => this.setState({ show: false});
 handleShow = () => this.setState({ show: true});


  componentWillReceiveProps(nextProps){
    if(this.state.show!==nextProps.modal){
      this.setState({show: nextProps.modal})
    }
  }
onSelect=(data)=>{
  console.log(data)
}
chkclick=(e)=>{
  var{name,checked}=e.target;
  this.setState((e)=>{
    var SelectedEmail=e.emailNames;
    return SelectedEmail[name]=checked;
     

  })
}



render(){
   var displayemail=Object.keys(this.state.emailNames).filter((x)=>this.state.emailNames[x])
return(
  <div>
     <img className="responsive-image" src={notify} alt="noti" />
     <br/>
    
     <h3 className="h-send-notice">Send Notification:</h3>

     <br/>
     
     {/* <input type="checkbox"  value="muqaddasshaaban@gmail.com" name="muqaddasshaaban@gmail.com" onChange={this.chkclick}/>muqaddasshaaban@gmail.com
     <input type="checkbox" value="horainnoor735@gmail.com" name="horainnoor735@gmail.com" onChange={this.chkclick}/>horainnoor735@gmail.com
     <input type="checkbox" value="ahmadali280298@gmail.com" name="ahmadali280298@gmail.com" onChange={this.chkclick}/>ahmadali280298@gmail.com */}
    
<Form className="form-not" onSubmit={
this.handleSubmit


}

>
<FormGroup className="form-not">
        <Label className="l-notify-name" for="name">Name:</Label>
        <Input type="textt" 
        name="name" 
        onChange={this.handleChange}
       
        />
      </FormGroup>
      <FormGroup className="formmemail-not">
        <Label for="email">Email:</Label>
       
        <Input 
        type="email" 
        name="email" 
        
        onChange={this.handleChange}
       
        />
        
      </FormGroup>
	  <FormGroup className="form-not">
        <Label for="email">To:</Label>
        <Input 
        type="to"
        name="to" 
       
      onChange={this.handleChange}
                /> 
        
      </FormGroup>
     
      {/* <Label for="email">To:</Label>
        <Input 
        type="to"
        name="to" 
        value={displayemail}
      onChange={this.handleChange}
                /> */}
      
      <FormGroup className="form-not">
        <Label for="message">Message:</Label>
        <Input type="textarea" 
        name="message" 
        onChange={this.handleChange}
       
        />
      </FormGroup>

     
      
      <Button 
  className="formm-not" >Submit</Button>
   <Modal
        show={this.state.show}
        onHide={this.handleclose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your email have been Sent</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleclose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
  </Form>
  
  </div>

  )

}
}
export default Notification;






