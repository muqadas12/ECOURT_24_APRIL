
import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Container,Col,Row } from "reactstrap";
import "./automatic.css"
import as from "../../assets/Images/sa.jfif";
import s from "../../assets/Images/sumau.png";

import SLP from  "./SLP"
export const Sumaut = () => {
  const [isLoading, setIsLoading] = useState(true);
  const[input,setInput]=useState("");





  const [Caseno, setCaseno] = useState("");
  const [Caseyr, setCaseyr] = useState("");

  const [data, setDaata] = useState([]);
  const [dataa, setData] = useState([]);

  const [searchData, setSearchData] = useState([]);
  const [caseYear, setcaseYear] = useState("");
  const [show, setShow] = useState(false);
 


  useEffect(() => {
    axios
      .get('http://localhost:2000/api/record')
      .then((res) => {
        setDaata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });  
  }, []);
  const handleChange=(e)=>{
    e.preventDefault();
    setInput(e.target.value);
    
  
  }

  useEffect(() => {
    axios
    .get("http://localhost:2000/api/lawyer/viewaccept")
    .then((res) => {
      console.log(res.dataJudgment)
      setDaata(res.dataa.dataL);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err.response);
      setIsLoading(false);
    }); 
  }, []);
  
  


  const handleSubmitt = () => {
    const search = data.filter(x => x.PartyName  === Caseno || x.caseNumber === Caseyr);


    console.log(data);
    console.log(search);
    
    setSearchData(search);


    setShow(true);
  }
 

  const handleSubmittt = () => {
    const search = data.filter(x => x.partyName  === Caseno );


    console.log(data);
    console.log(search);
    
    setSearchData(search);


    setShow(true);
  }

  const handleChangeCaseno = (e) => {
    setCaseno(e.target.value);
  }
  var showdate=new Date();
  var displaytoaydate=showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getFullYear();
  var dt=showdate.toDateString()
  return (
    <div>
    <form className="d-flex flex-column justify-content-center align-items-center">

        <label className="case-no-summon">Select Party Name:</label>
        <select
        className="summondropdown"
          onChange={handleChangeCaseno}
          name="partyname" 
          onClick={handleSubmitt}
          >
             

          <option name="select judge name" disabled>Select Caseno</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.PartyName }>{el.PartyName }</option>
            ))}
          </> : null}

        </select>
       

      

        
      </form>

      
      
  
    <Container className="mt-4" fluid>
      <div className="col-md-12 ">
      {show ? (
        <>

          <div className="row">
            <div className="col-md-12 mb-3 d-flex">
              

            </div>
            <div className="col-md-12 mb-3 h-80vh">
            

             { searchData.map((list) => {
                const {
                  LawyerName,
                   PartyName,
                   CaseType,
                   Address,
                   Tehsil,
                   caseNumber
                  
                   
                     
                } = list;
                return (

<div className="summonautomatic">                   
<p className="headingone">Summon Document</p>
<img className="imgsummonautomatic" src={as} alt="as"/>
<img className="imgsummons" src={s} alt="as"/>

<p className="fromsummon">From:</p><p className="districsummon">Distric Court of Rawalpindi</p>


                     <p className="toofsummon">To Party Name:</p>
                      <p className="pnsummon">{PartyName}</p>
                      <p className="datesummon">Date:</p> <p className="datedisplaysummon">{displaytoaydate}</p>

                     
                     
                    <p className="casetypeofsummon">Case Type:</p>  <p className="casetypesummondoc">{CaseType}</p>

                     
                     
                     <p className="tehsilofsummon">Tehsil</p>
                     <p className="tehsilsummon"> {Tehsil}</p>
                     

                     <p className="addsummon">Address</p>
                     
                     <p className="addofsummon">{Address}</p>
                     
                      <p className="msgsummon">To the above Party {PartyName} :</p>

                     <p className="msgofsummon">You are summoned to appear on court with case number </p>
                     <p className="anddate">and date of hearing</p>
                      <SLP/>
<p className="lastline">Appear on court with the above mentioned date otherwise court will take decison from it's own prespective</p>
               <p className="thanku">Thank you</p>    
                   </div>
                )
              })}   

        

          
          

              
            
              
              
             
              </div>
          </div>
        </>
      ) : null}
      
        <br/>
        <br/>

      </div>
      
    </Container>
    </div>
  );
};
export default Sumaut;













