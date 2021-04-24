
import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./CourtFee.css"
// import "./Latest.css";
import judgment from "../../../assets/Images/offlinemoney.jpg";
import Box from "../../../components/BoxFee"
import "./Status.css"


const CaseStatusLaw= (props) => {

  const [Caseno, setCaseno] = useState("");
  const [data, setData] = useState([]);
  const [Caseyear, setCaseyear] = useState("");
  

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/lawyer/data/fee/all')
      .then((res) => {
        setData(res.data.dataFee);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  const handleChangeCaseno = (e) => {
    setCaseno(e.target.value);
  }

  const handleChangeCaseyear = (e) => {
    console.log(e.target.value);
    setCaseyear(e.target.value);
  }
const handlesubmitedfee=(event)=>{
  
  if(event.target.checked){
    alert('You have already submiited Fee')
    alert('If not Submitted then Click on next to payonline')

 } else {
   window.location = "http://localhost:3000/PayOnline";
 }
    
}



  return (

    <div>
      <img className="responsssssssive-image" src={judgment} alt="courtfee" />

      <h3 className="j-search">Court Fee:</h3>
      <br />
      <Box />
      <br />

      <form className="d-flex flex-column justify-content-center align-items-center">

        <label className="fee-case-no">Case No:</label>
        <select className="option-fee-case-no"
          // className="w-50 py-2"
          onChange={handleChangeCaseno}>
          <option 
          name="select judge name" disabled>Select Caseno</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.Caseno}>{el.Caseno}</option>
            ))}
          </> : null}

        </select>
        <label className="fee-case-year">Case Year:</label>
        <select
          onChange={handleChangeCaseyear}
          className="fee-option-year">
          <option name="select party name" disabled>Select Caseyear</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.Caseyear}>{el.Caseyear}</option>
            ))}
          </> : null}

        </select>
        <label className="check-fee-status">Fee Status: </label>
        <label className="sub" for="myCheck">Submitted:</label> 
        <input className="subcheck" type="Checkbox" name="submitted" onChange={handlesubmitedfee}/>

        


      </form>
      <br/>
      <br/>
      <button onClick={handlesubmitedfee}  className="fee-search-btn">Next </ button>
      {/* <OnlinePay/> */}
      <br/>
      <br/>
     
    </div>

  )
}
export default CaseStatusLaw;


