import React, { useState, useEffect } from "react";
import axios from 'axios';
// import "./Latest.css";
import judgment from "../../../assets/Images/statuss.jpg";
import Box from "../../../components/BoxStatus"
import "./Status.css"

const CaseStatusLaw= () => {

  const [Caseno, setCaseno] = useState("");
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [Caseyear, setCaseyear] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/lawyer/data/status')
      .then((res) => {
        setData(res.data.dataStatus);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = () => {
    const search = data.filter(x => x.Caseno == Caseno && x.Caseyear == Caseyear);
    console.log(Caseno, Caseyear);
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
    setCaseyear(e.target.value);
  }




  return (

    <div>
      <img className="responsive-image" src={judgment} />

      <h3 className="j-search">Case Status:</h3>
      <br />
      <Box />
      <br />

      <form className="d-flex flex-column justify-content-center align-items-center">

        <label className="judge-name-case-no">Case No:</label>
        <select className="option-judge-case-no"
          // className="w-50 py-2"
          onChange={handleChangeCaseno}>
          <option 
          name="select judge name" disabled>Select Caseno</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.Caseno}>{el.Caseno}</option>
            ))}
          </> : null}

        </select>
        <label className="party-name-case-year">Case Year:</label>
        <select
          onChange={handleChangeCaseyear}
          className="option-party-c-year">
          <option name="select party name" disabled>Select Caseyear</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.Caseyear}>{el.Caseyear}</option>
            ))}
          </> : "No Record to display"}

        </select>

      </form>
      <button onClick={handleSubmit} className="status-search-btn-case-status" > Search </ button>
      <br/>
      <br/>
      {show ? (
        <>

          <div className="row">
            <div className="col-md-12 mb-3 d-flex">
             

              <div className="case-name-status-one">
                <span>CaseName</span>
              </div>

              <div className="case-number-status">
                <span >CaseNo</span>
              </div>

              <div className="case-year-status">
                <span  >Case year</span>
              </div>
            
              <div className="case-title-status">
                <span >Case Title</span>
              </div>
             
              <div className="l-h-s">
                <span >Last Hearing</span>
              </div>
              <div className="n-d-s">
                <span >Nextdate</span>
              </div>
              <div className="n-cs">
                <span >Case Status</span>
              </div>
              <div className="n-law">
                <span >lawyer</span>
              </div>
              <div className="col-md-1 font-weight-bold h5">
              </div>
            </div>
            <div className="col-md-12 mb-3 h-80vh">

              {searchData.map((list) => {
                const {
                 
                 caseName,
                 Caseno,
                 Caseyear,
                 CASETITLE,
                 Matter,
                 LastHearing,
                 NextDate,
                 caseStatus,
                 lawyer

                } = list;
                return (


                  <div
                    key={Caseno}
                    className="row justify-content-around p-3 align-items-center shadow-sm"
                  >


                  

                    <div className="col-md-2 d-flex">
                      <span>{caseName}</span>
                    </div>

                    <div className="case-number-status-div">
                      <span >{Caseno}</span>
                    </div>

                    <div className="col-md-2 ">
                      <span >{Caseyear}</span>
                    </div>
                   
                   
                    <div className="case-titles-status">
                    <span >{CASETITLE}</span>
                    </div>
                    
                    <div className="col-md-1 ">
                    <span >{LastHearing}</span>
                    </div>
                    <div className="col-md-1 ">
                    <span >{NextDate}</span>
                    </div>
                    <div className="col-md-1 ">
                    <span >{caseStatus}</span>
                    </div>
                    <div className="col-md-1 coll">
                    <span className="lawyerofcasestatus" >{lawyer}</span>
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
export default CaseStatusLaw;









