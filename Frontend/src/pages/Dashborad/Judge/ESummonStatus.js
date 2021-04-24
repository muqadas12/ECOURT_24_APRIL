

import React, { useState, useEffect } from "react";
import axios from 'axios';
import arrestwarrant from "../../../assets/Images/abc.jpg";
import arrestwarranticon from "../../../assets/Images/awi.PNG";
import {Link } from "react-router-dom"
import { MDBNotification } from "mdbreact";

import { saveAs } from 'file-saver';
import "./SummonStatus.css"


const ESumonStatus = () => {
  const [Caseno, setCaseno] = useState("");
  const [data, setData] = useState([]);


  const [searchData, setSearchData] = useState([]);
  const [caseYear, setcaseYear] = useState("");
  const [show, setShow] = useState(false);
 

  const [caseNumber, setcaseNumber] = useState("");
  const [PartyName, setpartyname] = useState("");
  





  
  useEffect(() => {
    axios
      .get('http://localhost:2000/api/lawyer/viewserved')
      .then((res) => {
        setData(res.data.dataL);
      })
      .catch((err) => {
        console.log(err);
      });  
  }, []);
  
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
 

  return (

    <div>
        <img className="arrestwarr-image" src={arrestwarrant}/>
            <h3 className="heading-one-issue-warrant">Esummon Status:</h3>
     
     
      <form className="d-flex flex-column justify-content-center align-items-center">

      <label className="case-no-summonserve">Select Caseno to View Summon status:</label>
      <select
          className="caseno-cms"
          onChange={handleChangeCaseno}
          name="partyname" 
          onClick={handleSubmitt}
          >
             

          <option name="select judge name" disabled>Select Caseno</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.caseNumber }>{el.caseNumber}</option>
            ))}
          </> : null}

        </select>
       

      </form>
      <br />
      <br />
      {show ? (
        <>

          <div className="row">
            <div className="col-md-12 mb-3 d-flex">
              

            </div>
            <div className="col-md-12 mb-3 h-80vh">

              {searchData.map((list) => {
                const {
                 
                   status
                   
                     
                } = list;
                return (

<div>                   
                     
                      <div className="summonservedstatus">
                      {status}
                      </div>

                     
                   </div>
                )
              })}
            
            </div>
          </div>
        </>
      ) : null}
     <p>If the Summon is serve and person not appeared within due days in court the juge issue arrest warrant</p>
           
           <Link to="/ArrestWarrant"><img className="icon-arrest"  src={arrestwarranticon}/></Link> 
           <Link to="/ArrestWarrant"  className="click-arrest">Click here to issue arrest warrant</Link>
    </div>

  )
}
export default ESumonStatus;


