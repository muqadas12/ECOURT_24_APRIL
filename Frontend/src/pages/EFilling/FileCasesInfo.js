
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container,Col,Row } from "reactstrap";
import PictureAsPdfSharpIcon from '@material-ui/icons/PictureAsPdfSharp';

import {Spinner} from "react-bootstrap"
import { Modal, Button } from "react-bootstrap";



export const FileCasesInfo = (props) => {
  let [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let [dataJudgment, setDataj] = useState([]);
  const [searchData, setSearchData] = useState([]);
  let [PartyName, setParty] = useState([]);



  const[input,setInput]=useState("");
  const [LawyerNameField, setLawyerNameField] = useState("");
  const [PartyNameField, setPartyNameField] = useState("");
  const [uploadPlaintField, setuploadPlaintField] = useState("");
  const [uploadDocxField, setuploadDocxField] = useState("");
   const [show, setShow] = useState(false);
   const [judge, setJudge] = useState("");


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  

  
  useEffect(() => {
    
    axios
      .get("http://localhost:2000/api/record")
      .then((res) => {
        console.log(res.data)
        setData(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {
    
    axios
      .get("http://localhost:2000/api/lawyer/viewaccept")
      .then((res) => {
        console.log(res.dataJudgment)
        setDataj(res.data.dataL);
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
  

  const handleSubmit = () => {
    const search = data.filter(x => x.partyName == PartyName );
    // console.log(party, judge);
    console.log(data);
    console.log(search);
    setSearchData(search);
    setShow(true);
  }

  const handleChangeParty = (e) => {
    setParty(e.target.value);
  }

  const handleChangeJudge = (e) => {
    console.log(e.target.value);
    setJudge(e.target.value);
  }


  return (
    <div>
    <h2 className="cause-list-search">View EFiling:</h2>
    <label className="judge-name-judg">Party Name:</label>
        <select
          className="select-judge-name-option"
          onChange={handleChangeJudge}>
          <option name="select judge name" disabled>Select Party name</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.PartyName}>{el.PartyName}</option>
            ))}
          </> : null}

        </select>
   
    <Container className="mt-4" fluid>
      <div className="col-md-12 ">
        {isLoading ? (
         
            <Spinner animation="grow" />
          
        ) : (

          <div className="row">
             <div className="col-md-12 mb-3 d-flex">
              <div className="col-md-2 d-flex">

                <span className="text-capitalize h5 font-weight-bold">LawyerName</span>
              </div>

              <div className="col-md-2 d-flex h5 font-weight-bold">
                <span>PartyName</span>
              </div>
              <div className="col-md-2 font-weight-bold h5">
                <span >Case Type</span>
              </div>
             
            
             
            </div>



            <div className="col-md-12 mb-3 h-80vh">

              
            
              {data.map((list) => {
                const {
                   LawyerName,
                   PartyName,
                   CaseType,
                  
                 
                } = list;
                return (
                 
                  
                  <div className="row">
                  <div className="col-md-12 mb-3 d-flex">
                    
                     
                    <div className="col-md-2 d-flex">
                    
                      <span className="text-capitalize">{LawyerName}</span>
                    </div>
                  
                    <div className="col-md-4 d-flex">
                      <span>{PartyName}</span>
                    </div>
                    <div className="col-md-2 d-flex">
                      <span className="typeofcase">{CaseType}</span>
                    </div>
                   
                  

                   
                 
                      
                      </div>
                   
                   

                    
                    
          
                   </div>
                   
                  
                   
                  
                );
                
              })}
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
                    
                     
                    <div className="casenumacc">
                    
                      <span className="cnns">{caseNumber}</span>
                    </div>
                  
                    <div className="hearingdate">
                      <span className="doh">{DateofHearing}</span>
                    </div>
                    <div>
                      <span className="spn">{partyName}</span>
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
export default FileCasesInfo;










