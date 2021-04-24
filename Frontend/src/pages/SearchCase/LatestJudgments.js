
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CauseListSearch.css"
import { Container } from "reactstrap";
import "./Latest.css"
// import Death_sentence from "../../Judgments_pdf/Death_sentence.pdf"
import judgments from "../../assets/Images/latest.jpg";
import pdf from "../../assets/Images/pdf.PNG"
import {Spinner} from "react-bootstrap";

export const LatestJudgments = () => {
  let [dataJudgment, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[input,setInput]=useState("");


  useEffect(() => {
    
    axios
      .get("http://localhost:2000/api/lawyer/data/judgment")
      .then((res) => {
        console.log(res.dataJudgment)
        setData(res.data.dataJudgment);
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
  if(input.length>0){
    dataJudgment=dataJudgment.filter((i)=>{
      return i.caseNo.match(input);
    })
  }


  


  return (
    <div>
     <img className="responsive-image" src={judgments} alt="latestjudgments"/>
    <h2 className="cause-list-search">Judgment Search:</h2>
    <div className="divi">
              <label className="search-b-1">Search By Case No:</label>
              <input type="texttt"  className="search-box-case" placeholder="Enter Case number" onChange={handleChange} value={input}/>
              </div>
    <Container className="mt-4" fluid>
      <div className="col-md-12 ">
        {isLoading ? (
          <Spinner animation="border" variant="danger" />
        ) : (

          <div className="row">
             <div className="col-md-12 mb-3 d-flex">
              <div className="col-md-2 d-flex">

                <span className="text-capitalize h5 font-weight-bold">JudgmentDate</span>
              </div>

              <div className="col-md-2 d-flex h5 font-weight-bold">
                <span>CaseSubject</span>
              </div>

              <div className="col-md-2 font-weight-bold h5">
                <span >CaseNo</span>
              </div>

              <div className="col-md-2 font-weight-bold h5">
                <span >CaseTitle</span>
              </div>
              <div className="col-md-2 font-weight-bold h5">
                <span >AuthorJudge</span>
              </div>
              <div className="col-md-2 font-weight-bold h5">
              <span >Download</span>
              </div>
            </div>



            <div className="col-md-12 mb-3 h-80vh">

              
            
              {dataJudgment.map((list) => {
                const {
                    judgmentDate,
                    caseSubject,
                    caseNo,
                    caseTitle,
                    authorJudge,
                    download,
                    Tag
                } = list;
                return (
                 
                  
                    <div
                    key={judgmentDate}
                    className="row justify-content-around p-3 align-items-center shadow-sm"
                  >
                    
                     
                    <div className="col-md-2 d-flex">
                    
                      <span className="text-capitalize">{judgmentDate}</span>
                    </div>
                  
                    <div className="col-md-2 d-flex">
                      <span>{caseSubject}</span>
                    </div>

                    <div className="col-md-2 ">
                      <span >{caseNo}</span>
                    </div>
                    
                    <div className="col-md-2 ">
                      <span >{caseTitle}</span>
                    </div>
                    <div className="col-md-2 ">
                      <span >{authorJudge}</span>
                    </div>
                    <div className="col-md-2 ">
                    <a href= {download}><img className="pdf-affi" src={pdf}/></a>
                     
                   

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
export default LatestJudgments;










