
// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import caseInfo from "../../../assets/Images/cau.jpg";
// import LP from "./LP"


// const CauseListCMS = () => {
//   const [Caseno, setCaseno] = useState("");
//   const [data, setData] = useState([]);
//   const [dataa, setDataj] = useState([]);
//   let [dataJudgment, setDaata] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const [searchData, setSearchData] = useState([]);
//   const [caseYear, setcaseYear] = useState("");
//   const [show, setShow] = useState(false);
 

  



//   useEffect(() => {
    
//     axios
//       .get("http://localhost:2000/api/lawyer/viewaccept")
//       .then((res) => {
//         console.log(res.dataJudgment)
//         setData(res.data.dataL);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.log(err.response);
//         setIsLoading(false);
//       });
//   }, []);

  
//   useEffect(() => {
//     axios
//       .get('http://localhost:2000/api/record')
//       .then((res) => {
//         setData(res.data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });  
//   }, []);
  
//   const handleSubmitt = () => {
//     const search = data.filter(x => x.PartyName  == Caseno );
//     console.log(Caseno, caseYear);
//     console.log(data);
//     console.log(search);
//     setSearchData(search);
//     setShow(true);
//   }

//   const handleChangeCaseno = (e) => {
//     setCaseno(e.target.value);
//   }
//   const handleChange= (e) => {
//     const { target: { name, value } } =e
//     // setname(e.target.value);
//   }
 
  
//   return (

//     <div>
     
     
//       <form className="d-flex flex-column justify-content-center align-items-center">

//         <label className="case-no-caseinfo">Caseno:</label>
//         <select
//           className="caseno-cms"
//           onChange={handleChangeCaseno}
//           name="partyname" 
//           onClick={handleSubmitt}
//           >
             

//           <option name="select judge name" disabled>Select Caseno</option>
//           {data.length > 0 ? <>
//             {data.map(el => (
//               <option name={el.PartyName }>{el.PartyName }</option>
//             ))}
//           </> : null}

//         </select>
       

//       </form>
//       <br />
//       <br />
//       {show ? (
//         <>

//           <div className="row">
//             <div className="col-md-12 mb-3 d-flex">
              

//             </div>
//             <div className="col-md-12 mb-3 h-80vh">
            

//              {searchData.map((list) => {
//                 const {
//                   LawyerName,
//                    PartyName,
//                    CaseType,
//                    Address,
//                    Tehsil,
//                    caseNumber,
//                    DateofHearing,
//                    partyName
                   
                     
//                 } = list;
//                 return (

// <div>                   
//   <LP/>
//                       <div className="col-md-1">
//                       {LawyerName}
//                       </div>

//                       <div className="col-md-2 text-left">
//                       <input type="summontehsil-text" 
//                        name={PartyName}
//                        value={PartyName}

                      

//                         />

                      
//                       </div>
//                       <div className="col-md-1 text-left">
//                       <input   name="Casename" 
//                       value= {CaseType}
//                       onChange={handleChange}/>

                     
//                       </div>
//                       <div className="col-md-1 text-left">
//                       <input 
//                       name="tehsil"  
//                       value= {Tehsil}
//                       onChange={handleChange}/>

                     
//                       </div>
//                       <div className="col-md-1 text-left">
//                       <input   
//                       value= {caseNumber}
//                       onChange={handleChange}/>

                     
//                       </div>
                     
//                    </div>
//                 )
//               })}  
            
//             </div>
//           </div>
//         </>
//       ) : null}
     
//     </div>

//   )
// }
// export default CauseListCMS;


import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Container,Col,Row } from "reactstrap";


export const PartyName = () => {
  // let [dataJudgment, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[input,setInput]=useState("");





  const [Caseno, setCaseno] = useState("");
  const [Caseyr, setCaseyr] = useState("");

  const [data, setDaata] = useState([]);
  const [dataa, setData] = useState([]);

  const [searchData, setSearchData] = useState([]);
  const [caseYear, setcaseYear] = useState("");
  const [show, setShow] = useState(false);
 

  useEffect(() => {
    
    axios
      .get("http://localhost:2000/api/lawyer/viewaccept")
      .then((res) => {
        console.log(res.dataJudgment)
        setData(res.data.dataL);
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
  

   
  useEffect(() => {
    axios
      .get('http://localhost:2000/api/record')
      .then((res) => {
        setDaata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });  
  }, []);
  useEffect(() => {
    axios
      .get('http://localhost:2000/api/record')
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });  
  }, []);
  
  


  const handleSubmitt = () => {
    const search = data.filter(x => x.PartyName  === Caseno || x.caseNumber === Caseyr);


    console.log(data);
    console.log(search);
    
    setSearchData(search);


    setShow(true);
  }
  

  const handleChangeCaseno = (e) => {
    setCaseno(e.target.value);
  }
  


  return (
    <div>
    <h2 className="cause-list-search">List of Accepted Case:</h2>
    <form className="d-flex flex-column justify-content-center align-items-center">

        <label className="case-no-caseinfo">Caseno:</label>
        <select
          className="caseno-cms"
          onChange={handleChangeCaseno}
          name="partyname" 
          onClick={handleSubmitt}
          >
             

          <option name="select judge name" disabled>Select Caseno</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.PartyName }>{el.PartyName }</option>
            ))}
          </> : null}

        </select>


        
      </form>

      
      
  
   
    </div>
  );
};
export default PartyName;













