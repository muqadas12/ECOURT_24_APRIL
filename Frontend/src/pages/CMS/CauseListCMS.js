import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./CauseList.css";
import caseInfo from "../../assets/Images/cau.jpg";
import Box from "../../components/Box"
import { Modal, Button } from "react-bootstrap";
import ModalComp from "../../components/ModalComp";

const CauseListCMS = () => {
  const [shows, setShows] = useState(false);

  const handleClose = () => setShows(false);
  const handleShow = () => setShows(true);
  const [Caseno, setCaseno] = useState("");
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [caseYear, setcaseYear] = useState("");
  const [show, setShow] = useState(false);
  const [caseNumberField, setCaseNumberField] = useState("");
  const [caseYearField, setCaseYearField] = useState("");
  const [partyNameField, setpartyNameField] = useState("");
  const [FixationTimeField, setFixationTimeField] = useState("");
  const [lawyerField, setLawyerField] = useState("");
  const [srno, setsrField] = useState("");

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const onSubmit = (id) => {
    console.log(id,srno, caseNumberField, caseYearField, FixationTimeField, partyNameField, lawyerField);
    const newData = {};
    if (caseYearField !== "") {
      newData.caseYear = caseYearField;
    };
    if (FixationTimeField !== "") {
      newData.FixationTime = FixationTimeField;
    };
    if (caseNumberField !== "") {
      newData.caseNumber = caseNumberField;
    };
    if (lawyerField !== "") {
      newData.lawyer = lawyerField;
    };
    if (partyNameField !== "") {
      newData.partyName = partyNameField;
    };
    if (srno !== "") {
      newData.srNo = srno;
    };
    console.log(newData);
    axios
      .patch(`http://localhost:2000/api/lawyer/update/causelist/data/${id}`, newData)
      .then((res) => {
        data.map(dataa => {
          if (dataa._id === id) {
            if (caseYearField !== "") {
              dataa.caseYear = caseYearField;
            };
            if (FixationTimeField !== "") {
              dataa.FixationTime = FixationTimeField;
            };
            if (caseNumberField !== "") {
              dataa.caseNumber = caseNumberField;
            };
            if (lawyerField !== "") {
              dataa.lawyer = lawyerField;
            };
            if (partyNameField !== "") {
              dataa.partyName = partyNameField;
            };
            if (srno !== "") {
              dataa.srNo = srno;
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
      .get('http://localhost:2000/api/lawyer/data/list/all')
      .then((res) => {
        setData(res.data.dataList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmitt = () => {
    const search = data.filter(x => x.caseNumber === Caseno && x.caseYear === caseYear);
    console.log(Caseno, caseYear);
    console.log(data);
    console.log(search);
    setSearchData(search);
    setShow(true);
  }

  const handleChangeCaseno = (e) => {
    setCaseno(e.target.value);
  }

  const handleChangecaseYear = (e) => {
    console.log(e.target.value);
    setcaseYear(e.target.value);
  }



  return (

    <div>
      <img className="causelists-image" src={caseInfo} alt="causelist" />

      <h3 className="j-search">Update Cause List:</h3>
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
              <option name={el.caseNumber}>{el.caseNumber}</option>
            ))}
          </> : null}

        </select>
        <label className="caseyear-caseinfo">Caseyear:</label>
        <select
          onChange={handleChangecaseYear}
          className="caseyear-cms">
          <option name="select party name" disabled>Select case year</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.caseYear}>{el.caseYear}</option>
            ))}
          </> : null}

        </select>

      </form>
      <button onClick={handleSubmitt} className="cms-update-asd" > Search </ button>
      <br />
      <br />
      {show ? (
        <>

          <div className="row">
            <div className="col-md-12 mb-3 d-flex">
              <div className="col-md-2 d-flex">
               <span className="srnocmsupdate">Sr No</span> 
              </div>

              <div className="case-number">
                <span>CaseNumber</span>
              </div>
              <div className="case-year-cause">
                <span className="pncauselist">Caseyear</span>
              </div>

              <div className="party-list-update">
                <span className="pncauselist" >PartyName</span>
              </div>

              <div className="lawyer-update-list">
                <span className="pncauselist" >Lawyer</span>
              </div>
              <div className="fix-update-cause">
                <span className="pncauselist" >Fixation Time</span>
              </div>


            </div>
            <div className="col-md-12 mb-3 h-80vh">

              {searchData.map((list) => {
                const {
                  srNo,
                  caseNumber,
                  caseYear,
                  partyName,
                  lawyer,
                  FixationTime
                } = list;
                return (

                  <form >
                    <div
                      key={srNo}
                      className="row justify-content-around p-3 align-items-center shadow-sm"
                    >
                      <div className="col-md-1">
                        <input  placeholder={srNo}
                         name="srno"
                         type="textsrnocms"
                         onChange={(e) => setsrField(e.target.value)}
                        
                        />
                      </div>

                      <div className="col-md-2 text-left">
                        <input
                          type="textcasenumbercms"
                          name="caseNumber"
                          placeholder={caseNumber}
                          onChange={(e) => setCaseNumberField(e.target.value)}
                        />
                      </div>
                      <div className="col-md-1 text-left">
                        <input
                          className=" case-year-cause"
                          type="textcaseyearcms"
                          name="caseYear"
                          placeholder={caseYear}
                          onChange={(e) => setCaseYearField(e.target.value)}
                        />
                      </div>

                      <div className="col-md-3 text-left">
                        <textarea
                          rows={7}
                          type="textpartynamecms"
                          className="party-list-update"
                          name="partyName"
                          placeholder={partyName}
                          onChange={(e) => setpartyNameField(e.target.value)}
                        />
                      </div>
                      <div className="col-md-2 text-left">
                        <textarea
                          rows={7}
                          className=" lawyer-update-list"
                          type="textlawyernamecms"
                          name="lawyer"
                          placeholder={lawyer}
                          onChange={(e) => setLawyerField(e.target.value)}
                        />
                      </div>
                      <div className="col-md-2 pl-5 text-left">
                        <input
                          className=" fix-update-cause"
                          name="FixationTime"
                          type="textfixtimecms"
                          placeholder={FixationTime}
                          onChange={(e) => setFixationTimeField(e.target.value)}
                        />
                      </div>
                      <div class="col-md-1">
                        <div className="btn-update-causelist-cmsinf" type="submit"  
                          onClick={()=>{
                            onSubmit(list._id)
                            handleShow()
                          }}
                          
                          >
                            
                            Update</div>
                            <Modal show={shows} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Updated</Modal.Title>
        </Modal.Header>
        <Modal.Body>Data have been Successfully Updated!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                        
                      
                      </div>
                     
               
                     

                      {/* <button onClick={()=>update(list._id)} className="update-case-info-cms">Update</button> */}




                    </div>
                    
                  </form>
                  
                )
              })}
              
            </div>
          </div>
        </>
      ) : null}
    </div>

  )
}
export default CauseListCMS;






