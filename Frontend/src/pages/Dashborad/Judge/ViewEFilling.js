
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Viewfile.css"
import { Container } from "reactstrap";
import judgments from "../../../assets/Images/ve3.jpg";
import pdf from "../../../assets/Images/pdf.PNG"
import {Spinner} from "react-bootstrap"
import { Modal, Button } from "react-bootstrap";



export const ViewEFiling = (props) => {
  let [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  

  const del = (id) => {
   
    axios.delete(`http://localhost:2000/api/delete/${id}`)
      .then((res) => {
       console.log(res)
       axios.get("http://localhost:2000/api/record")
       .then((res) => {
         console.log(res.data)
         setData(res.data.data);
         setIsLoading(false);
       })      })
      .catch((err) => {
      });
  };
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

 
  
  

  


  return (
    <div>
     <img className="fileview-image" src={judgments} alt="viewfile"/>
    <h2 className="cause-list-search">View EFiling:</h2>
   
    <Container className="mt-4" fluid>
      <div className="col-md-12 ">
        {isLoading ? (
         
            <Spinner animation="grow" />
          
        ) : (

          <div className="row">
             <div className="col-md-12 mb-3 d-flex">
              <div className="col-md-2 d-flex">

                <span className="lawyernameviewfiling">LawyerName</span>
              </div>

              <div className="col-md-2 d-flex">
                <span className="partynamefilingview">PartyName</span>
              </div>
              <div className="col-md-2">
                <span className="casetypefiling">Case Type</span>
              </div>
              <div className="col-md-2 font-weight-bold h5">
                <span className="plaintshift">Plaint</span>
              </div>
              <div className="col-md-2 font-weight-bold h5">
                <span className="docxshift" >Case Docx</span>
              </div>
              

              <div className="col-md-2 font-weight-bold h5">
                <span className="accbtn">Accept</span>
              </div>
              <div className="col-md-2 font-weight-bold h5">
                <span className="dismissbtn" >Dismiss</span>
              </div>
            
             
            </div>



            <div className="col-md-12 mb-3 h-80vh">

              
            
              {data.map((list) => {
                const {
                   LawyerName,
                   PartyName,
                   CaseType,
                  
                  pathu,
                  pathq,
                  Captionone,
                  captiontwo,
                   uploadDocx

                } = list;
                return (
                 
                  
                  <div className="row">
                  <div className="col-md-12 mb-3 d-flex">
                    
                     
                    <div className="col-md-2 d-flex">
                    
                      <span className="lawyernameviewfile">{LawyerName}</span>
                    </div>
                  
                    <div className="col-md-4 d-flex">
                      <span className="partynamefiling">{PartyName}</span>
                    </div>
                    <div className="col-md-2 d-flex">
                      <span className="typeofcase">{CaseType}</span>
                    </div>
                   
                  

                   
                    
                    <div className="col-md-2 ">
                      <a href={pathu}><img className="pdf-affiiii" src={pdf} alt="pdf"/></a>
                      <span className="capone">{Captionone}</span>

                    
                    </div> 
                    <div className="col-md-2 ">
                      <a href={pathq}><img className="pdf-affiiidocx" src={pdf} alt="pdf"/></a>
                      <span className="captwo">{captiontwo}</span>
                    </div>
                   
                     
                    <div className="col-md-2 ">
                      <button  className="button-viewfilingacceptcase"  onClick={() => {
                props.history.push("/AcceptCase");
              }}
                      >Accept Case</button>
                      </div>
<div  className="col-md-2 ">



                      <button className="delbutton" onClick={()=>{
       del(list._id)
        handleShow()
      }}>Dismiss</button>
                      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Deleted!</Modal.Title>
        </Modal.Header>
        <Modal.Body>This  Case have been dismissed</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                      </div>
                   
                   

                    
                    
          
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
export default ViewEFiling;










