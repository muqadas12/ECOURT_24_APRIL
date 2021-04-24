
import React,{Component} from "react";
import Accept from "../../../assets/Images/ac.jpg";
import "./AcceptCase.css";
import axios from "axios"
import PartyName from "../../../components/PartyName"
class AcceptCase extends Component{
  constructor(props){
    super(props);
    this.state={
      caseNumber:'',
      DateofHearing:'',
      partyName:''
    }
  }
  ChangeHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  submitHandler=(event)=>{
    event.preventDefault();
    console.log(this.state)
    axios.post("http://localhost:2000/api/lawyer/accept",this.state,
   
    
    )
    .then(response=>{
      alert('Case number have been assigned')
      console.log(response)
    })
    .catch(error=>{
      console.log(error)
    })
  }

 
  render(){
    const {caseNumber,DateofHearing,partyName}=this.state;
    return(
      <div>
         <img className="fileview-image" src={Accept} />
    <p className="acceptcase">Accept Case:</p>
    <p className="caseaccptprocedd">Fill the following fields to proceed further</p>
    <hr className="accc"/>
    <br/>
<form onSubmit={this.submitHandler}>
<label className="casenumberlabel">Party Name:</label>
        <input type="texttexttextpn" id="partyName"
        value={partyName}
        name="partyName"
        onChange={this.ChangeHandler}
         
          />
<label className="casenumberlabel">Case Number:</label>
        <input type="texttexttext" id="caseNumber"
        value={caseNumber}
        name="caseNumber"
        onChange={this.ChangeHandler}
         
          />
        <br/>
        

       
        <label className="dateofhearinglabel">Date of hearing:</label>
        <input type="date" id="DateofHearing"
        value={DateofHearing}
        name="DateofHearing"
        onChange={this.ChangeHandler}

         />
        <br/>
        <br/>
        <button  type="submit"  className="assign-btn">Assign</button>

</form>
      </div>
    )
  }
}
export default AcceptCase;


