import React, { useEffect, useState } from "react";
import axios from "axios";
 import "./Record.css"
 

import { Container } from "reactstrap";
import {Spinner} from "react-bootstrap"


export const CaseRecord = () => {
  let [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[input,setInput]=useState("");


  useEffect(() => {
    
    axios
      .get("http://localhost:2000/api/CMS/data/updaterecord")
      .then((res) => {
        console.log(res.data)
        setDataList(res.data.dataList);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setIsLoading(false);
      });
  }, []);

  

if(input.length>0){
  dataList=dataList.filter((i)=>{
    return i.caseNumber.match(input);
  })
}

  


  return (
    <div>
    {/* <img className="rec-img" src={rec} />
    <h2 className="cause-list-search">Cause Record:</h2> */}
    <Container className="mt-4" fluid>
      <div className="col-md-12 ">
        {isLoading ? (
          <>
             <Spinner animation="grow" variant="primary" />
          </>
        ) : (

          <div className="row">
            <div className="col-md-12 mb-3 h-80vh">
              
              <br/>
              <br/>
            
              <div className="col-md-12 mb-3 d-flex">
              <div className="col-md-1 d-flex">

                <span className="cause-list-srno">Lawyer </span>
              </div>

              <div className="col-md-3 d-flex">
                <span className="pnr" >Party Name</span>
              </div>

              <div className="col-md-2 d-flex">
                <span className="affre">Affidavit</span>
              </div>

              <div className="col-md-2 d-flex">
                <span className="vql" >Vaqalat Nama</span>
              </div>
              <div className="col-md-2 d-flex">
                <span className="wit">Witness</span>
              </div>
              
            </div>



              {dataList.map((list) => {
                const {
                  Name,
                  Party,
                 
                } = list;
                return (
                 
                  
                  <div
                    key={Name}
                    className="row justify-content-around p-3 align-items-center shadow-sm"
                  >
                    
                    <div className="col-md-2 d-flex">
                    
                      <span className="lawyernamecaserecord">{Name}</span>
                    </div>
                  
                    <div className="col-md-2 d-flex">
                      <span className="partynamecaserecord" >{Party}</span>
                    </div>

                  
          
                   </div>
                  
                );
                
              })}
              
            </div>
            
           
          </div>
        )}
      </div>
      
    </Container>
    </div>
  );
};
export default CaseRecord;

