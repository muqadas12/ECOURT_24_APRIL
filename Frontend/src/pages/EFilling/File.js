import React, { useState } from "react";
import court from "../../assets/Images/bgef1.jpg";
import "./File.css"
import axios from "axios"
import Rotate from 'react-reveal/Rotate';
import { Modal, Button } from "react-bootstrap";


function File() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [LawyerName, setLawyerName] = useState();
  const [PartyName, setPartyName] = useState();
  const [CaseType, setCaseType] = useState();
  const [Address, setAddress] = useState();
  const [Tehsil, setTehsil] = useState();



  const [uploadPlaint, setuploadPlaint] = useState();
  const [uploadDocx, setuploadDocx] = useState();

  const send = event => {
    const filesArray = [];
    filesArray.push(uploadPlaint);
    filesArray.push(uploadDocx);
   
    const formdata = new FormData();
    filesArray.map((file) => formdata.append("image", file));
    formdata.append("LawyerName", LawyerName);
    formdata.append("PartyName", PartyName);
    formdata.append("CaseType", CaseType);
    formdata.append("Address", Address);
    formdata.append("Tehsil",Tehsil);



   
    axios.post("http://localhost:2000/api/upload", formdata
    ).then(res => {
      console.log(res);

    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <img className="responsive-image" src={court} alt="file"/>

      <br/>
      <br/>
      {/* <p className="paafile">Follow the procedure<br/>given on home page <br/> for filing case</p> */}

      <Rotate top left><h5 className="top-lawyer">Please fill the following fields to file online Case</h5>  </Rotate>

      <hr className="new"/>
      <form action="#" method="post" enctype="multipart/form-data" >
        <label className="l-n" htmlFor="lawyername">Lawyer Name:</label>
        <input
          type="texts"
          id="lawyername"
          onChange={event => {
            const { value } = event.target;
            setLawyerName(value)
          }}
        />
        <br />
        <label className="p-n" htmlFor="Partyname">Party Name:</label>
        <input
          type="textss"
          id="Partyname"
          onChange={event => {
            const { value } = event.target;
            setPartyName(value)
          }}
        />
        <br />

      
        <label className="p-n" htmlFor="CaseType">Case Type:</label>
        <select  type="textssscasetype"
          id="CaseType"
          onChange={event => {
            const { value } = event.target;
            setCaseType(value)
          }}>
            <option>Select Case type</option>
          <option>
            Civil
          </option>
          <option>
            Criminal
          </option>


        </select>
        {/* <input
          type="textsss"
          id="CaseType"
          onChange={event => {
            const { value } = event.target;
            setCaseType(value)
          }}
        /> */}
        <br />
        <label className="p-n" htmlFor="CaseType">Tehsil:</label>
        <select  type="textssstehsil"
          id="Tehsil"
          onChange={event => {
            const { value } = event.target;
            setTehsil(value)
          }}
          >
          <option>Select Tehsil</option>

          <option>Sargodha</option>
          <option>Sahiwal</option>

          </select>
        {/* <input
          type="textsss"
          id="Tehsil"
          onChange={event => {
            const { value } = event.target;
            setTehsil(value)
          }}
        /> */}
        <br />
        <label className="p-n" htmlFor="CaseType">Address:</label>
        <input
          type="textsssad"
          id="Address"
          onChange={event => {
            const { value } = event.target;
            setAddress(value)
          }}
        />
        <br />
        <label className="u-c" htmlFor="file">Upload Plaint:</label>
        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const uploadPlaints = event.target.files[0]
          setuploadPlaint(uploadPlaints)
          console.log(uploadPlaints)
        }} />
        <br />
        <label className="u-c" htmlFor="filetwo">Upload Docx:</label>
        <input type="file" id="file" name="filetwo" onChange={event => {
          const uploadDocx = event.target.files[0]
          setuploadDocx(uploadDocx)
          console.log(uploadDocx)


        }} />

      </form>
      <button onClick={()=>{
        send()
        handleShow()
      }}
      
      className="submiitt-button"
      
      
      >Submit</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Submitted!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your Case have been Submitted</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  )
}
export default File;











