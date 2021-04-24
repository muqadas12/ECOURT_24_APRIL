import React, { useState, useEffect } from "react";
import axios from 'axios';
 import "./Latest.css";
import judgment from "../../assets/Images/jj.jpg";
import Box from "../../components/BoxJ"

import pdff from "../../assets/Images/pdf.PNG"
const OnlineCaseSearch= () => {

  const [Caseno, setCaseno] = useState("");
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [Caseyear, setCaseyear] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/lawyer/data/cases')
      .then((res) => {
        setData(res.data.dataCases);
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

      <h3 className="j-search">Case Search:</h3>
      <br />
      <Box />
      <br />

      <form className="d-flex flex-column justify-content-center align-items-center">

        <label className="judge-name">Caseno:</label>
        <select
          className="w-50 py-2"
          onChange={handleChangeCaseno}>
          <option name="select judge name" disabled>Select Caseno</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.Caseno}>{el.Caseno}</option>
            ))}
          </> : null}

        </select>
        <label className="party-name">Caseyear:</label>
        <select
          onChange={handleChangeCaseyear}
          className="w-50 py-2">
          <option name="select party name" disabled>Select Caseyear</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.Caseyear}>{el.Caseyear}</option>
            ))}
          </> : null}

        </select>

      </form>
      <button onClick={handleSubmit} className="jud-online-search-btn" > Search </ button>
      <br/>
      <br/>
      {show ? (
        <>

          <div className="row">
            <div className="col-md-12 mb-3 d-flex">
              <div className="col-md-2 d-flex">

                <span className="textcasecode">CaseCode</span>
              </div>

              <div className="case-number">
                <span>CaseName</span>
              </div>

              <div className="co-case-num">
                <span >CaseNo</span>
              </div>

              <div className="co-case-yeear">
                <span >Caseyear</span>
              </div>
              <div className="bennch">
                <span >Bench</span>
              </div>
              <div className="col-coddde">
                <span >Circut code</span>
              </div>
              <div className="col-tittle">
                <span >Case Title</span>
              </div>
             
              <div className="l-hh">
                <span >LastHearing</span>
              </div>
              <div className="n-dd">
                <span >Nextdate</span>
              </div>
              <div className="detailcase">
              <span >Details</span>
              </div>
            </div>
            <div className="col-md-12 mb-3 h-80vh">

              {searchData.map((list) => {
                const {
                 caseCode,
                 caseName,
                 Caseno,
                 Caseyear,
                 Bench,
                 Circuitcode,
                 CASETITLE,
                 Matter,
                 LastHearing,
                 NextDate,
                 pdf

                } = list;
                return (


                  <div
                    key={caseCode}
                    className="row justify-content-around p-3 align-items-center shadow-sm"
                  >


                    <div className="col-md-1 d-flex">

                      <span className="text-capitalize">{caseCode}</span>
                    </div>

                    <div className="col-md-1 d-flex">
                      <span>{caseName}</span>
                    </div>

                    <div className="col-md-1 ">
                      <span >{Caseno}</span>
                    </div>

                    <div className="col-md-1 ">
                      <span >{Caseyear}</span>
                    </div>
                    <div className="col-md-1 ">
                      <span >{Bench}</span>
                    </div>
                    <div className="col-md-1 ">
                    <span >{Circuitcode}</span>
                    </div>
                    <div className="col-md-2">
                    <span >{CASETITLE}</span>
                    </div>
                    
                    <div className="col-md-1 ">
                    <span >{LastHearing}</span>
                    </div>
                    <div className="col-md-1 ">
                    <span >{NextDate}</span>
                    </div>
                    <div className="col-md-1 ">
                    <a href={pdf}><img className="pdf-affi" src={pdff}/></a>	
{/* {pdf} */}
                  
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
export default OnlineCaseSearch;












