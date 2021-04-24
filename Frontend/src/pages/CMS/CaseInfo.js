import React, { useState, useEffect } from "react";
import axios from 'axios';
 import "./CaseInfo.css";
import caseInfo from "../../assets/Images/cinfo.jpg";
import Box from "../../components/Box"

import { useForm } from 'react-hook-form';
import { Modal, Button } from "react-bootstrap";


const CaseInfo= () => {
  const [shows, setShows] = useState(false);

  const handleClose = () => setShows(false);
  const handleShow = () => setShows(true);
  const { register, handleSubmit, errors, reset } = useForm();

  const [Caseno, setCaseno] = useState("");
  const [show, setShow] = useState(false);

  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [CaseYear, setCaseYear] = useState("");
  const [caseNumberField, setCaseNumberField] = useState("");
  const [caseYearField, setCaseYearField] = useState("");
  const [partyNameField, setpartyNameField] = useState("");
  const [lastHearingField, setlastHearing] = useState("");
  const [nextDateField, setnextDate] = useState("");
  const [caseStatusField, setcaseStatus] = useState("");

  const onSubmit = (id) => {
    console.log(id, caseNumberField, caseYearField, lastHearingField, partyNameField, nextDateField,caseStatusField);
    const newData = {};
    if (caseYearField !== "") {
      newData.Caseyear = caseYearField;
    };
    if (lastHearingField !== "") {
      newData.LastHearing= lastHearingField;
    };
    if (caseNumberField !== "") {
      newData.Caseno = caseNumberField;
    };
    if (nextDateField !== "") {
      newData.NextDate = nextDateField;
    };

    if (caseStatusField !== "") {
      newData.caseStatus = caseStatusField;
    };
    if (partyNameField !== "") {
      newData.partyName = partyNameField;
    };
    console.log(newData);
    axios
      .patch(`http://localhost:2000/api/CMS/update/caseInfo/dataa/${id}`, newData)
      .then((res) => {
        data.map(dataa => {
          if (dataa._id === id) {
            if (caseYearField !== "") {
              dataa.Caseyear = caseYearField;
            };
            if (lastHearingField !== "") {
              dataa.LastHearing = lastHearingField;
            };
            if (caseNumberField !== "") {
              dataa.Caseno= caseNumberField;
            };
            if (nextDateField !== "") {
              dataa.NextDate = nextDateField;
            };
            if (partyNameField !== "") {
              dataa.partyName = partyNameField;
            };
            if (caseStatusField  !== "") {
              dataa.caseStatus = caseStatusField ;
            };
          }
        });
        handleSubmitt();
        // alert("updated!")

      })
      .catch((err) => {
      });
  };



  

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/CMS/data/updateInfo')
      .then((res) => {
        setData(res.data.dataCaseInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmitt = () => {
    const search = data.filter(x => x.Caseno == Caseno && x.Caseyear == CaseYear);
    console.log(Caseno, CaseYear);
    console.log(data);
    console.log(search);
    setSearchData(search);
    setShow(true);
  }

  const handleChangeCaseno = (e) => {
    setCaseno(e.target.value);
  }

  const handleChangeCaseyear = (e) => {
    console.log(e.target.value);
    setCaseYear(e.target.value);
  }

  return (

    <div>
      <img className="caseinfo-image" src={caseInfo} />

      <h3 className="j-search">Case Info:</h3>
      <br />
      <Box />
      <br />

      <form className="d-flex flex-column justify-content-center align-items-center">

        <label className="case-no-caseinfo">Caseno:</label>
        <select
          className="caseno-cms"
          onChange={handleChangeCaseno}>
          <option name="select judge name" disabled>Select Caseno</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.Caseno}>{el.Caseno}</option>
            ))}
          </> : null}

        </select>
        <label className="caseyear-caseinfo">Caseyear:</label>
        <select
          onChange={handleChangeCaseyear}
          className="caseyear-cms">
          <option name="select party name" disabled>Select Caseyear</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.Caseyear}>{el.Caseyear}</option>
            ))}
          </> : null}

        </select>

      </form>
      <button onClick={handleSubmitt} className="cms-update-asd" > Search </ button>
      <br/>
      <br/>
      {show ? (
        <>

          <div className="row">
            <div className="col-md-12 mb-3 d-flex">
              <div className="col-md-2 d-flex">

                <span className="text">CaseNumber</span>
              </div>

              <div className="case-number">
                <span>Caseyear</span>
              </div>

              <div className="co-case-num">
                <span >PartyName</span>
              </div>

              <div className="co-case-yearrrrr">
                <span >LastHearing</span>
              </div>
              <div className="benchhhhh">
                <span >NextDate</span>
              </div>
              <div className="colll-code">
                <span >Case Status</span>
              </div>
              
            </div>
            <div className="col-md-12 mb-3 h-80vh">

              {searchData.map((list) => {
                const {
                 Caseno,
                 Caseyear,
                 partyName,
                LastHearing,
                 NextDate,
                 caseStatus

                } = list;
                return (


                  <form >
                    <div
                      key={Caseno}
                      className="row justify-content-around p-3 align-items-center shadow-sm"
                    >
                      <div className="col-md-2 text-left">
                        <input
                          type="teexxt"
                          name="Caseno"
                          placeholder={Caseno}
                          onChange={(e) => setCaseNumberField(e.target.value)}
                        />
                      </div>
                      <div className="col-md-1 text-left">
                        <input
                          
                          type="ttextt"
                          name="caseYear"
                          placeholder={Caseyear}
                          onChange={(e) => setCaseYearField(e.target.value)}
                        />
                      </div>

                      <div className="col-md-3 text-left">
                        <textarea
                          
                          type="tttext"
                          name="partyName"
                          placeholder={partyName}
                          onChange={(e) => setpartyNameField(e.target.value)}
                        />
                      </div>
                      <div className="col-md-2 text-left">
                        <input
                          
                          type="ttttext"
                          
                          name="LastHearing"
                          placeholder={LastHearing}
                          onChange={(e) => setlastHearing(e.target.value)}
                        />
                      </div>
                      <div className="col-md-2 pl-5 text-left">
                        <input
                         
                          name="NextDate"
                          type="textnext"
                          placeholder={NextDate}
                          onChange={(e) => setnextDate(e.target.value)}
                        />
                      </div>
                      <div className="col-md-2 pl-5 text-left">
                        <input
                         
                          name="caseStatus"
                          type="textstatus"
                          placeholder={caseStatus}
                          onChange={(e) => setcaseStatus(e.target.value)}
                        />
                      </div>
                      <div >
                        <div className="update-case-info-cms-btn" type="submit" 
                         onClick={()=>{
                          onSubmit(list._id)
                          handleShow()
                        }}
                         >Update</div>
                      </div>
                      <Modal show={shows} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Updated</Modal.Title>
        </Modal.Header>
        <Modal.Body>Data have been Successfully Updated!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                      {/* <button onClick={()=>update(list._id)} className="update-case-info-cms">Update</button> */}




                    </div>
                  </form>
                
                )
                
              })}
            </div>
            
          </div>
          
        </>) : null}
       
       
       

    </div>

  )
}
export default CaseInfo;


