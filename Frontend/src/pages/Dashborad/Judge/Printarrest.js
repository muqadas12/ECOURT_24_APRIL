// import React from "react"
// import axios from "axios";
// import arrestwarrant from "../../../assets/Images/aww.jpg";
// import ReactToPrint from 'react-to-print';
// import "./ArrestP.css"
// class ArrestP extends React.PureComponent {
//   render() {
//     return (
//       <div>
//         <ReactToPrint 
//           trigger={() => {
           
//             return <a className="printing" href="#">Print this out!</a>;
//           }}
//           content={() => this.componentRef}
//         />
//         <ComponentToPrint ref={(el) => (this.componentRef = el)} />
//       </div>
//     );
//   }
// }
// export class ComponentToPrint extends React.PureComponent {
//     render() {
//       return (
//         <div>
//           <h2 style={{ textAlign: "center" }}>ARREST WARRANT</h2>
//           <p style={{ textAlign: "center" }}>DISTRICT COURT</p>
//           <br />
//           <p style={{ textAlign: "center" }}>
//             WARRANT OF ARREST
//             <br />
//             PURSUANT TO
//             <br />
//             JUDICIARY LAW § 2-b(3)
//           </p>
//           <br />
//           <br />
//           <p>
//             CASE NUMBER:--------------------DATE:
//             <input type="date" /> POLICE STATION:-------------------- TO RESPECTED
//             -------------------- JUDGE
//           </p>
//           <p>
//             <br />
//             TO ANY PEACE OFFICER OF THE STATE OF
//             PAKISTAN:------------------------------------------------------------------------------------------
//           </p>
//           <br />
//           <p>
//             NAME OF
//             CONTENMOR------------------------------------------------------------------------------------------
//           </p>
//           <br />
//           <p>
//             ADDRESS-----------------------------------------------------Has been
//             charged with a felony----------------------, so you are ordered by
//             this letter to arrest and bring the seasoned man.
//           </p>{" "}
//           <br />
         
//           <br />
//         </div>
//       );
//     }
//   }
 
//   export default ArrestP;



import React, { useState, useEffect }from "react"
import axios from 'axios';
import gensummon from "../../../assets/Images/gensummon.jpg"
import ReactToPrint from 'react-to-print';

const Printarrest=React.forwardRef((props, ref) =>{
   



   const [Caseno, setCaseno] = useState("");
  const [data, setData] = useState([]);
  const [dataa, setDataj] = useState([]);
   const [searchData, setSearchData] = useState([]);
  const [caseYear, setcaseYear] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/lawyer/displayinfo')
      .then((res) => {
        setData(res.data.dataL);
      })
      .catch((err) => {
        console.log(err);
      });  
  }, []);
  
  const handleSubmitt = () => {
    const search = data.filter(x => x.caseNumber == Caseno );
    console.log(Caseno, caseYear);
    console.log(data);
    console.log(search);
    setSearchData(search);
    setShow(true);
  }

  const handleChangeCaseno = (e) => {
    setCaseno(e.target.value);
  }





  return(
      <div className="App">
         <img className="ressssummon-image" src={gensummon} />
         <p className="summonpdf">Fill the following fields to generate Online summon document</p>
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
      <option name={el.caseNumber}>{el.caseNumber }</option>
    ))}
  </> : null}

</select>


</form>
{searchData.map((list) => {
                const {
                  caseNumber,
                  crimeNumber,
                  address,
                  judgeName,
                  policeOfficer,
                  criminalName
                     
                } = list;
                return (
<div>      
             
<div className="col-md-2">
  {caseNumber}
  </div>
  <div className="col-md-4">
  {crimeNumber}
  </div>
  <div className="col-md-6">
  {address}
  </div>
  <div className="col-md-8">
  {judgeName}
  </div>
  <div className="col-md-10">
  {policeOfficer}
  </div>
  <div className="col-md-12">
  {criminalName}
  </div>
                     
        <br/>
                 
                      
                     

                  

      
                     
                   </div>
                   
                   
                )
                
              })}





         
        
      </div>
    );
   
  
})
export default Printarrest;





 