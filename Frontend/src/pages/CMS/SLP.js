
import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Container,Col,Row } from "reactstrap";

import "./automatic.css"
export const SLP = () => {
  // let [dataJudgment, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[input,setInput]=useState("");





  const [Caseno, setCaseno] = useState("");
  const [Caseyr, setCaseyr] = useState("");

  const [data, setDaata] = useState([]);
  const [dataa, setData] = useState([]);

  const [searchData, setSearchData] = useState([]);
  const [show, setShow] = useState(false);
 

  
 
  
  

   
  useEffect(() => {
    axios
    .get("http://localhost:2000/api/lawyer/viewaccept")
    .then((res) => {
      console.log(res.dataJudgment)
      setDaata(res.data.dataL);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err.response);
      setIsLoading(false);
    }); 
  }, []);
  
  


  return (
    <div>



    <form className="d-flex flex-column justify-content-center align-items-center">

        <select className="selectingcasenumberofjudge"
         
          >
             

          <option name="select judge name" disabled>Select Caseno</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.caseNumber }>{el.caseNumber }</option>
            ))}
          </> : null}

        </select>
<br/>
<br/>

        <select
        className="dateofhearingselectsummon"
          
          >
             

          <option name="select judge name" disabled>Select Caseno</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.DateofHearing}>{el.DateofHearing}</option>
            ))}
          </> : null}

        </select>


        
      </form>

      
      
  
   
      
         
        <br/>
        <br/>

      </div>
      
 
  );
 
};

export default SLP;













