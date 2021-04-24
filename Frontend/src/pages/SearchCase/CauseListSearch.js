
import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./CauseListSearch.css";
import judgment from "../../assets/Images/causelistone.jpg";
import Box from "../../components/BoxJ"


const CauseListSearch = () => {

  const [lawyer, setLawyer] = useState("");
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [caseno, setCase] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/lawyer/data/list/all')
      .then((res) => {
        setData(res.data.dataList);
        console.log(res.data.dataList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = () => {
    const search = data.filter(x => x.caseNumber == caseno || x.lawyer == lawyer);
    console.log(caseno, lawyer);
    console.log(data.dataList);
    console.log(search);
    setSearchData(search);
    setShow(true);
  }

  const handleChangeCase = (e) => {
    setCase(e.target.value);
  }

  const handleChangeLawyer = (e) => {
    console.log(e.target.value);
    setLawyer(e.target.value);
  }




  return (

    <div>
      <img className="responsive-image" src={judgment} />

      <h3 className="j-search">Cause List Search:</h3>
      <br />
      <Box />
      <br />

      <form className="d-flex flex-column justify-content-center align-items-center">

        <label className="judge-name">Lawyer Name:</label>
        <select
          className="w-50 py-2"
          onChange={handleChangeLawyer}>
          <option name="select Lawyer name" disabled>Select lawyer name</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.lawyer}>{el.lawyer}</option>
            ))}
          </> : null}

        </select>
        <label className="party-name">Case no:</label>
        <select
          onChange={handleChangeCase}
          className="w-50 py-2">
          <option name="select case no" disabled>Select case  no</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.caseNumber}>{el.caseNumber}</option>
            ))}
          </> : null}

        </select>

      </form>
      <button onClick={handleSubmit} className="jud-search-btn" style={{ marginLeft: "600px" }}> Search </ button>
      <br/>
      <br/>
      {show ? (
        <>

          <div className="row">
            <div className="col-md-12 mb-3 d-flex">
              <div className="col-md-2 d-flex">

                <span className="text-capitalize h5 font-weight-bold">SrNo</span>
              </div>

              <div className="col-md-2 d-flex h5 font-weight-bold">
                <span>CaseNumber</span>
              </div>

              <div className="col-md-2 font-weight-bold h5">
                <span >PartyName</span>
              </div>

              <div className="law">
                <span >Lawyer</span>
              </div>
              <div className="fix">
                <span >Fixation Time</span>
              </div>
             </div>
            <div className="col-md-12 mb-3 h-80vh">

              {searchData.map((list) => {
               const {
                                  srNo,
                                  caseNumber,
                                  partyName,
                                  lawyer,
                                  FixationTime,
                                  
                                } = list;
                return (


                  <div
                    key={srNo}
                    className="row justify-content-around p-3 align-items-center shadow-sm"
                  >


                    <div className="col-md-2 d-flex">

                      <span className="text-capitalize">{srNo}</span>
                    </div>

                    <div className="cos">
                      <span>{caseNumber}</span>
                    </div>

                    <div className="col-md-2 ">
                      <span >{partyName}</span>
                    </div>

                    <div className="col-md-2 ">
                      <span >{lawyer}</span>
                    </div>
                    <div className="col-md-2 ">
                      <span >{FixationTime}</span>
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
export default CauseListSearch;





