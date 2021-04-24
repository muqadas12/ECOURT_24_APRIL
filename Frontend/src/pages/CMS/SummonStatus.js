import React, { useState, useEffect } from "react";
import axios from 'axios';

import { Modal, Button } from "react-bootstrap";
import { saveAs } from 'file-saver';
import updatesummon from "../../assets/Images/updatesummon.jpg";

import "./SummonStatusupdate.css"

const CauseListCMS = () => {
  const [Caseno, setCaseno] = useState("");
  const [data, setData] = useState([]);
  const [dataa, setDataj] = useState([]);


  const [searchData, setSearchData] = useState([]);
  const [caseYear, setcaseYear] = useState("");
  const [show, setShow] = useState(false);
 

  const [Casename, setcasename] = useState("");
  const [judgename, setjudgename] = useState("");
  const [partyName, setpartyname] = useState("");
  const [tehsil, settehsil] = useState("");
  const [address, setaddress] = useState("");
  const [DateofHearing, setDateofHearing] = useState("");
  const [caseNumber, setcasenumber] = useState("");
    const [status, setstatus] = useState("");






  
  useEffect(() => {
    axios
      .get('http://localhost:2000/api/lawyer/viewaccept')
      .then((res) => {
        setData(res.data.dataL);
      })
      .catch((err) => {
        console.log(err);
      });  
  }, []);
  
  const submitHandler=(event)=>{
    event.preventDefault();
    axios.post("http://localhost:2000/api/lawyer/served",{caseNumber,DateofHearing,status}
   
    
    )
    .then(response=>{
      alert('Summon status has been given')
      console.log(response)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  
  const handleSubmitt = () => {
    const search = data.filter(x => x.caseNumber  == Caseno );
    console.log(Caseno, caseYear);
    console.log(data);
    console.log(search);
    setSearchData(search);
    setShow(true);
  }

  const handleChangeCaseno = (e) => {
    setCaseno(e.target.value);
  }
  const handleChange= (e) => {
    const { target: { name, value } } =e
    // setname(e.target.value);
  }
//  var showdate=new Date();
//  var displaytoaydate=showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getFullYear();
//  var dt=showdate.toDateString()
 
  return (

    <div>
    <img className="updatesummmonimg" src={updatesummon}/>
    <br/>
    <br/>
    <p className="summonservedparag">Fill the following fields to update summon status</p>
    <hr className="summonservedhr"/>

      <form onSubmit={submitHandler} className="d-flex flex-column justify-content-center align-items-center">

        <label className="case-no-caseinfocms">Caseno:</label>
        <select
          className="caseno-cmsupdatesummon"
          onChange={event => {
            const { value } = event.target;
            setcasenumber(value)
          }}
          name="caseNumber" 
          onClick={handleSubmitt}
          >
             

          <option name="select judge name" disabled>Select Caseno</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.caseNumber }>{el.caseNumber }</option>
            ))}
          </> : null}

        </select>
       
        <label className="case-no-dohcms">Date of Hearing:</label>
        <select
          className="caseno-cmsdofupdate"
          onChange={handleChangeCaseno}
          id="DateofHearing"
          value={DateofHearing}
          name="DateofHearing"
          onChange={event => {
            const { value } = event.target;
            setDateofHearing(value)
          }}
          onClick={handleSubmitt}
          >
             

          <option name="select judge name" disabled>Select Caseno</option>
          {data.length > 0 ? <>
            {data.map(el => (

              <option name={el.DateofHearing }>{el.DateofHearing}</option>
            ))}
          </> : null}

        </select>
       
<label className="msgsummonstatusupdate">Message:</label>
<textarea type="textsummonstatusupdate" name="status" 
 onChange={event => {
  const {value}=event.target;
  setstatus(value)
}}

/>
<button  type="submit"  className="assignstatus-btn">Update Status</button>

      </form>
      <br />
      <br />
     
     
    </div>

  )
}
export default CauseListCMS;


