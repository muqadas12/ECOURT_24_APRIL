import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Causelist.css"
import causeList from "../../../assets/Images/cll.jpg";


import { Container } from "reactstrap";
import {Spinner} from "react-bootstrap"


export const CauseList = () => {
  let [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[input,setInput]=useState("");


  useEffect(() => {
    
    axios
      .get("http://localhost:2000/api/lawyer/data/list/all")
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

  
const handleChange=(e)=>{
  e.preventDefault();
  setInput(e.target.value);
  

}
if(input.length>0){
  dataList=dataList.filter((i)=>{
    return i.caseNumber.match(input);
  })
}

  


  return (
    <div>
    <img className="responsive-image" src={causeList} alt="causelist"/>
    <h2 className="cause-list-search">Cause List :</h2>
    <Container className="mt-4" fluid>
      <div className="col-md-12 ">
        {isLoading ? (
          <>
             <Spinner animation="grow" variant="primary" />
          </>
        ) : (

          <div className="row">
            <div className="col-md-12 mb-3 h-80vh">
              <div className="divi">
              <label className="search-b-1">Search By Case No:</label>
              <input type="texttt"  className="search-box-case" placeholder="Search" onChange={handleChange} value={input}/>
              </div>
              <br/>
              <br/>
            
              <div className="col-md-12 mb-3 d-flex">
              <div className="col-md-1 d-flex">

                <span className="cause-list-srno">SrNo</span>
              </div>

              <div className="cause-list-cno">
                <span>Case Number</span>
              </div>

              <div className="cause-list-pno">
                <span >Party Name</span>
              </div>

              <div className="cause-list-lawyer-name">
                <span >Lawyer</span>
              </div>
              <div className="cause-list-fix-time">
                <span >Fixation Time</span>
              </div>
              
            </div>



              {dataList.map((list) => {
                const {
                  srNo,
                  caseNumber,
                  partyName,
                  lawyer,
                  FixationTime
                } = list;
                return (
                 
                  
                  <div
                    key={srNo}
                    className="row justify-content-around p-3 align-items-center shadow-sm"
                  >
                    
                    <div className="col-md-1 d-flex">
                    
                      <span className="srnocauselist">{srNo}</span>
                    </div>
                  
                    <div className="col-md-1 d-flex">
                      <span className="case-no-h" >{caseNumber}</span>
                    </div>

                    <div className="col-md-4 d-flex ">
                      <span className="party-name-h1">{partyName}</span>
                    </div>
                    <div className="col-md-3 ">
                      <span >{lawyer}</span>
                    </div>
                    <div className="col-md-3 ">
                      <span >
                     <tr>{FixationTime}</tr>
                        
                        </span>
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
export default CauseList;




