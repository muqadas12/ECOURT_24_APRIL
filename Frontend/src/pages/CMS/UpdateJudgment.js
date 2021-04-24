import React, { useState, useEffect } from "react";
import axios from 'axios';
 import "./Updatejud.css";
 import caseInfo from "../../assets/Images/uclll.png";
 import Box from "../../components/Box"
 import { Modal, Button } from "react-bootstrap";

// import {
//  ColumnsDirective, Page, Inject, Filter, Edit, Toolbar, ToolbarItems,
//   EditSettingsModel
// }
//   from "@syncfusion/ej2-react-grids"
import { useForm } from 'react-hook-form';




const UpdateJudgment = () => {
  const [shows, setShows] = useState(false);

  const handleClose = () => setShows(false);
  const handleShow = () => setShows(true);

  const [caseNo, setcaseNo] = useState("");
  const [show, setShow] = useState(false);

  const [caseTitle, setcaseTitle] = useState("");

  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [caseNoField, setcaseNoField] = useState("");
  const [caseTitleField, setcaseTitleField] = useState("");
  const [caseSubjectField, setCaseSubjectField] = useState("");
  const [judgmentDateField, setJudgmentDateField] = useState("");
  const [authorJudgeField, setauthorJudgeField] = useState("");

 
  const onSubmit = (id) => {
    console.log(id, caseNoField, caseTitleField, caseSubjectField, judgmentDateField, authorJudgeField);
    const newData = {};
    if (caseNoField !== "") {
      newData.caseNo = caseNoField;
    };
    if (caseTitleField!== "") {
      newData.caseTitle = caseTitleField;
    };
    if (caseSubjectField !== "") {
      newData.caseSubject = caseSubjectField;
    };
    if (judgmentDateField !== "") {
      newData.judgmentDate = judgmentDateField;
    };
    if (authorJudgeField !== "") {
      newData.authorJudge =authorJudgeField;
    };
    console.log(newData);
    axios
      .patch(`http://localhost:2000/api/lawyer/update/judgment/data/${id}`, newData)
      .then((res) => {
        data.map(dataa => {
          if (dataa._id === id) {
            if (caseNoField !== "") {
              dataa.caseNo = caseNoField;
            };
            if (caseTitleField !== "") {
              dataa.caseTitle = caseTitleField;
            };
            if (caseSubjectField !== "") {
              dataa.caseSubject = caseSubjectField;
            };
            if (judgmentDateField !== "") {
              dataa.judgmentDate = judgmentDateField;
            };
            if (authorJudgeField !== "") {
              dataa.authorJudge = authorJudgeField;
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
      .get('http://localhost:2000/api/lawyer/data/judgment')
      .then((res) => {
        setData(res.data.dataJudgment);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmitt = () => {
    const search = data.filter(x => x.caseNo === caseNo && x.caseTitle === caseTitle);
    console.log(caseNo, caseTitle);
    console.log(data);
    console.log(search);
    setSearchData(search);
    setShow(true);
  }

  const handleChangeCaseno = (e) => {
    setcaseNo(e.target.value);
  }

  const handleChangecaseTitle = (e) => {
    console.log(e.target.value);
    setcaseTitle(e.target.value);
  }



  return (

    <div>
      <img className="causelist-image" src={caseInfo} alt="updatejudgment"/>

      <h3 className="j-search">Update Judgment:</h3>
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
              <option name={el.caseNo}>{el.caseNo}</option>
            ))}
          </> : null}

        </select>
        <label className="caseyear-caseinfo">caseTitle:</label>
        <select
          onChange={handleChangecaseTitle}
          className="caseyear-cms">
          <option name="select party name" disabled>Select case Title</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.caseTitle}>{el.caseTitle}</option>
            ))}
          </> : null}

        </select>
      
      </form>
      <button onClick={()=>{
        handleSubmitt()
   
      }} className="cms-update-asd" > Search </ button>
       
      <br />
      <br />
      {show ? (
        <>

          <div className="row">
            <div className="col-md-12 mb-3 d-flex">
              <div className="col-md-2 d-flex ">
                <span className="judcms">judgmentDate</span>
              </div>

              <div className="case-number">
                <span>Case subject</span>
              </div>
              <div className="case-year-cause">
                <span className="cncms">Case No</span>
              </div>

              <div className="party-list-update">
                <span className="ctcms">Case Title</span>
              </div>

              <div className="lawyer-update-listcms">
                <span >Author Judge</span>
              </div>
            


            </div>
            <div className="col-md-12 mb-3 h-80vh">

              {searchData.map((list) => {
                const {
                 judgmentDate,
                 caseSubject,
                 caseNo,
                 caseTitle,
                 authorJudge
                 
                } = list;
                return (

                  <form >
                    <div
                      key={judgmentDate}
                      className="row justify-content-around p-3 align-items-center shadow-sm"
                    >
                      {/* <div className="col-md-1">
                        <span className="srno-update-list">{judgmentDate}</span>
                      </div> */}

                      <div className="col-md-2 text-left">
                        <textarea
                          className="w-50 caase-number"
                          type="textcasenumberjudgmet"
                          name="caseNumber"
                          placeholder={judgmentDate}
                          onChange={(e) => setJudgmentDateField(e.target.value)}
                        />
                      </div>
                      <div className="col-md-1 text-left">
                        <textarea
                          type="textcasesubjectjudgment"
                          name="caseYear"
                          placeholder={caseSubject}
                          onChange={(e) => setCaseSubjectField(e.target.value)}
                        />
                      </div>

                      <div className="col-md-3 text-left">
                        <textarea
                          rows={7}
                          type="textcasenojudgment"
                          className="party-list-updatejudgnment"
                          name="partyName"
                          placeholder={caseNo}
                          onChange={(e) => setcaseNoField(e.target.value)}
                        />
                      </div>
                      <div className="col-md-2 text-left">
                        <textarea
                          rows={7}
                          className=" lawyer-update-list"
                          type="textcaseetitleejudg"
                          name="lawyer"
                          placeholder={caseTitle}
                          onChange={(e) => setcaseTitleField(e.target.value)}
                        />
                      </div>
                      <div className="col-md-2 pl-5 text-left">
                        <textarea
                          className=" fix-update-cause"
                          name="FixationTime"
                          type="textfixtime"
                          placeholder={authorJudge}
                          onChange={(e) => setauthorJudgeField(e.target.value)}
                        />
                      </div>
                      <div class="col-md-1">
                        <div className="btn-update-judg-cms" type="submit" onClick={()=>{
                          onSubmit(list._id)
                          handleShow()
                        }}>
                         
                          
                          Update</div>
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
export default UpdateJudgment;






