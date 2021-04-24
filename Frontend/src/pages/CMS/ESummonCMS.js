import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Container,Col,Row } from "reactstrap";
import judgment from "../../assets/Images/es.jpg";
import Box from "../../components/BoxSummon"
 import "./ESummon.css"

export const ESummonCMS = () => {
  let [dataJudgment, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[input,setInput]=useState("");


  useEffect(() => {
    
    axios
      .get("http://localhost:2000/api/lawyer/viewaccept")
      .then((res) => {
        console.log(res.dataJudgment)
        setData(res.data.dataL);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setIsLoading(false);
      });
  }, []);

 
  const handleChange=(e)=>{
    e.preventDefault();
    setInput(e.target.value);
    
  
  }
  

  


  return (
    <div>
     <img className="ressss-image" src={judgment} />
    <h2 className="cause-list-search">List of Accepted Case:</h2>
  
    <Container className="mt-4" fluid>
      <div className="col-md-12 ">
        {isLoading ? (
          <>
            
          </>
        ) : (

          <div className="row">
             <div >
              <div className="acceptedcasenumber">

                <span className="acsummon" >Case number</span>
              </div>

              <div className="accepteddateofhearing">
                <span className="doh">Date of hearing</span>
              </div>
              <div className="acceptepartyesummon">
                <span>Party Name</span>
              </div>

             
            </div>



            <div className="col-md-12 mb-3 h-80vh">

              
            
              {dataJudgment.map((list) => {
                const {
                    caseNumber,
                    DateofHearing,
                    partyName
                } = list;
                return (
                 
                  
                    <div
                    key={caseNumber}
                    className="row justify-content-around p-3 align-items-center shadow-sm"
                  >
                    
                     
                    <div className="col-md-2">
                    
                      <span>{caseNumber}</span>
                    </div>
                  
                    <div className="col-md-2">
                      <span >{DateofHearing}</span>
                    </div>
                    <div className="col-md-2">
                      <span >{partyName}</span>
                    </div>

                   
          
                    
                    
          
                   </div>
                  
                );
                
              })}
              
            </div>
            
           
          </div>
        )}
        <br/>
        <br/>
               <p>Want to generate online summon?<Link to="/GenerateSummon">Click here to go to page that generate online summon </Link></p>

      </div>
      
    </Container>
    </div>
  );
};
export default ESummonCMS;













