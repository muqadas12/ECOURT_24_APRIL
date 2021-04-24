
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {Link} from "react-router-dom";
// import { Container,Col,Row } from "reactstrap";


// export const ESummonCMS = () => {
//   // let [dataJudgment, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const[input,setInput]=useState("");





//   const [Caseno, setCaseno] = useState("");
//   const [Caseyr, setCaseyr] = useState("");

//   const [data, setDaata] = useState([]);
//   const [dataa, setData] = useState([]);

//   const [searchData, setSearchData] = useState([]);
//   const [show, setShow] = useState(false);
 

//   useEffect(() => {
    
    // axios
    //   .get("http://localhost:2000/api/lawyer/viewaccept")
    //   .then((res) => {
    //     console.log(res.dataJudgment)
    //     setDaata(res.data.dataL);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //     setIsLoading(false);
    //   });
   
        
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
//     const search = data.filter(x => x.partyName  === Caseno || x.caseNumber === Caseyr);


//     console.log(data);
//     console.log(search);
    
//     setSearchData(search);


//     setShow(true);
//   }


//   const handleChangeCaseno = (e) => {
//     setCaseno(e.target.value);
//   }
  


//   return (
//     <div>
//     <h2 className="cause-list-search">List of Accepted Case:</h2>
//     <form className="d-flex flex-column justify-content-center align-items-center">

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
//               <option name={el.partyName }>{el.partyName }</option>
//             ))}
//           </> : null}

//         </select>


        
//       </form>

      
      
  
//     <Container className="mt-4" fluid>
//       <div className="col-md-12 ">
//       {show ? (
//         <>

//           <div className="row">
//             <div className="col-md-12 mb-3 d-flex">
              

//             </div>
//             <div className="col-md-12 mb-3 h-80vh">
//               {searchData.map((list) => {
//                 const {
//                     caseNumber,
//                     DateofHearing,
                    
//                 } = list;
//                 return (
                 
                  
//                     <div
//                     key={caseNumber}
//                     className="row justify-content-around p-3 align-items-center shadow-sm"
//                   >
                    
                     
//                     <div className="casenumacc">
                    
//                       <span className="cnns">{caseNumber}</span>
//                     </div>
                  
                   
//                     <div>
//                       <span className="spn">{DateofHearing}</span>
//                     </div>

                   
          
                    
                    
          
//                    </div>
                  
//                 );
                
//               })}
              
             
//               </div>
//           </div>
//         </>
//       ) : null}
      
//         <br/>
//         <br/>

//       </div>
      
//     </Container>
//     </div>
//   );
 
// };

// export default ESummonCMS;


// import React from 'react'
// import LP from "./LP";
// import LPrac from "./LPrac"
// function PP () {
//     return (
//         <div>
//             <LP/>
//             <LPrac/>
            
//         </div>
//     )
// }

// export default PP;






// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// // import "./Latest.css";
// import judgment from "../../../assets/Images/statuss.jpg";
// import Box from "../../../components/BoxStatus"
// import "./Status.css"

// const CaseStatusLaw= () => {

//   const [Caseno, setCaseno] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   const [data, setData] = useState([]);
//   const [searchData, setSearchData] = useState([]);
//   const [Caseyear, setCaseyear] = useState("");
//   const [show, setShow] = useState(false);

//   const [dataa, setDaata] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:2000/api/record')
//       .then((res) => {
//         setData(res.data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });  
//       axios
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

//   const handleSubmit = () => {
//     const search = data.filter(x => x.PartyName == Caseno || x.caseNumber == Caseyear);
//     console.log(Caseno, Caseyear);
//     console.log(data);
//     console.log(search);
//     setSearchData(search);
//     setShow(true);
//   }

//   const handleChangeCaseno = (e) => {
//     setCaseno(e.target.value);
//   }

//   const handleChangeCaseyear = (e) => {
//     console.log(e.target.value);
//     setCaseyear(e.target.value);
//   }




//   return (

//     <div>
//       <img className="responsive-image" src={judgment} />

//       <h3 className="j-search">Case Status:</h3>
//       <br />
//       <Box />
//       <br />

//       <form className="d-flex flex-column justify-content-center align-items-center">

//         <label className="judge-name-case-no">Case No:</label>
//         <select className="option-judge-case-no"
//           // className="w-50 py-2"
//           onChange={handleChangeCaseno}>
//           <option 
//           name="select judge name" disabled>Select Caseno</option>
//           {data.length > 0 ? <>
//             {data.map(el => (
//               <option name={el.PartyName}>{el.PartyName}</option>
//             ))}
//           </> : null}

//         </select>
//         <label className="party-name-case-year">Case Year:</label>
//         <select
//           onChange={handleChangeCaseyear}
//           className="option-party-c-year">
//           <option name="select party name" disabled>Select Caseyear</option>
//           {data.length > 0 ? <>
//             {data.map(el => (
//               <option name={el.caseNumber}>{el.caseNumber}</option>
//             ))}
//           </> : "No Record to display"}

//         </select>

//       </form>
//       <button onClick={handleSubmit} className="status-search-btn-case-status" > Search </ button>
//       <br/>
//       <br/>
//       {show ? (
//         <>

//           <div className="row">
//             <div className="col-md-12 mb-3 d-flex">
             

//               <div className="case-name-status-one">
//                 <span>CaseName</span>
//               </div>

//               <div className="case-number-status">
//                 <span >CaseNo</span>
//               </div>

//               <div className="case-year-status">
//                 <span >Case year</span>
//               </div>
            
//               <div className="case-title-status">
//                 <span >Case Title</span>
//               </div>
             
//               <div className="l-h-s">
//                 <span >Last Hearing</span>
//               </div>
//               <div className="n-d-s">
//                 <span >Nextdate</span>
//               </div>
//               <div className="n-cs">
//                 <span >Case Status</span>
//               </div>
//               <div className="n-law">
//                 <span >lawyer</span>
//               </div>
//               <div className="col-md-1 font-weight-bold h5">
//               </div>
//             </div>
//             <div className="col-md-12 mb-3 h-80vh">

//               {searchData.map((list) => {
//                 const {
                 
//                  caseNumber,
//                  LawyerName,
//                  PartyName,
//                  Tehsil,
//                  DateofHearing

//                 } = list;
//                 return (


//                   <div
//                     key={caseNumber}
//                     className="row justify-content-around p-3 align-items-center shadow-sm"
//                   >


                  

//                     <div className="col-md-2 d-flex">
//                       <span>{caseNumber}</span>
//                     </div>

//                     <div className="case-number-status-div">
//                       <span >{PartyName}</span>
//                     </div>

//                     <div className="col-md-2 ">
//                       <span >{DateofHearing}</span>
//                     </div>
                   
                   
//                     <div className="case-titles-status">
//                     <span >{LawyerName}</span>
//                     </div>
                    
//                     <div className="col-md-1 ">
//                     <span >{Tehsil}</span>
//                     </div>
                    



//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </>) : null}
//     </div>

//   )
// }
// export default CaseStatusLaw;







import React from "react"
import ReactToPrint from 'react-to-print';
import LPrac from "./LPrac"
export class ComponentToPrint extends React.PureComponent {
    render() {
      return (
       <div>
         <LPrac/>
          
       </div>
      );
    }
  }
  class PP extends React.PureComponent {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => {
             
              return <a href="#">Print this out!</a>;
            }}
            content={() => this.componentRef}
          />
          <ComponentToPrint ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }
  export default PP;

















