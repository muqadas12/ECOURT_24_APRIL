import React, { useState, useEffect } from "react";
import axios from 'axios';
import judgment from "../../../assets/Images/judg1.jpg";
import Box from "../../../components/BoxLaw"
import pdf from "../../../assets/Images/pdf.PNG"

import "./Judgment.css"

const Judgment= () => {

  const [judge, setJudge] = useState("");
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [party, setParty] = useState("");
  const [show, setShow] = useState(false);

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

  const handleSubmit = () => {
    const search = data.filter(x => x.caseTitle == party || x.authorJudge == judge);
    console.log(party, judge);
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
      <img className="responsive-image" src={judgment} />

      <h3 className="j-search">Judgment Search:</h3>
      <br />
      <Box/>
      <br />

      <form className="d-flex flex-column justify-content-center align-items-center">

        <label className="judge-name-judg">Judge Name:</label>
        <select
          className="select-judge-name-option"
          onChange={handleChangeJudge}>
          <option name="select judge name" disabled>Select Judge name</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.authorJudge}>{el.authorJudge}</option>
            ))}
          </> : null}

        </select>
        <label className="party-name-judgment">Party Name:</label>
        <select
          onChange={handleChangeParty}
          className="select-prty-jugmnt">
          <option name="select party name" disabled>Select Party Name</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.caseTitle}>{el.caseTitle}</option>
            ))}
          </> : "No Record  Found"}

        </select>

      </form>
      <button onClick={handleSubmit} className="search-btn-of-judg" > Search </ button>
      <br/>
      <br/>
      {show ? (
        <>

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

              {searchData.map((list) => {
                const {
                  judgmentDate,
                  caseSubject,
                  caseNo,
                  caseTitle,
                  authorJudge,
                  download
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
                )
              })}
            </div>
          </div>
        </>) : null}
    </div>

  )
}
export default Judgment;




