// import React, { useState, useEffect }from "react"
// import axios from 'axios';
// import { saveAs } from 'file-saver';
// import "./Generate.css"
// import gensummon from "../../assets/Images/gensummon.jpg"
// import {Link} from "react-router-dom"

// const GenerateSummon=()=>{
//    const [Casename, setcasename] = useState("");
//    const [judgename, setjudgename] = useState("");
//    const [PartyName, setpartyname] = useState("");
//    const [tehsil, settehsil] = useState("");
//    const [address, setaddress] = useState("");
//    const [from, setfrom] = useState("");
//    const [message, setmessage] = useState("");




//    const [Caseno, setCaseno] = useState("");
//   const [data, setData] = useState([]);
//    const [searchData, setSearchData] = useState([]);
//   const [caseYear, setcaseYear] = useState("");
//   const [show, setShow] = useState(false);

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









//   const handleChangecasename = (e) => {
//     setcasename(e.target.value);
//   }
 

 
//  const  createAndDownloadPdf = () => {
//     axios.post('http://localhost:2000/create-pdf',{Casename,judgename,PartyName,tehsil,address,message,from})
//       .then(() => axios.get('http://localhost:2000/fetch-pdf', { responseType: 'blob' }))
//       .then((res) => {
//         const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

//         saveAs(pdfBlob, 'Summon.pdf');
//       })
     
//   }
  


//   return(
//       <div className="App">
//          <img className="ressssummon-image" src={gensummon} />
//          <p className="summonpdf">Fill the following fields to generate Online summon document</p>
//          <form className="d-flex flex-column justify-content-center align-items-center">

// <label className="case-no-caseinfo">Caseno:</label>
// <select
//   className="caseno-cms"
//   onChange={handleChangeCaseno}
//   name="partyname" 
//   onClick={handleSubmitt}
//   >
     

//   <option name="select judge name" disabled>Select Caseno</option>
//   {data.length > 0 ? <>
//     {data.map(el => (
//       <option name={el.PartyName }>{el.PartyName }</option>
//     ))}
//   </> : null}

// </select>


// </form>
// {searchData.map((list) => {
//                 const {
//                   LawyerName,
//                    PartyName,
//                    CaseType,
                     
//                 } = list;
//                 return (
// <div>      
             
// <label className="summon-casename">Lawyer Name</label>


//                       <input type="summonfrom-text" placeholder="From" name="from"    value={LawyerName}
                      
//                       />
                      
                     
//                       {/* {PartyName} */}
                    
//                       <label className="summon-casename">Party Name</label>
//         <input type="summonpart-text" placeholder="Party name" name="PartyName"
//          value={PartyName}
        
        
        
//         />
//         <br/>
                 
                      
                     

                  

//         <label className="summon-casename">Case Name</label>
//         <input  
//         type="summonfrom-text"
//         name="Casename" 
      
//         onChange={event => {
//         const   value=event.CaseType
//           setcasename(value)
//         }}
         
//         />   


       
        
//           <label className="summon-judgename">From</label>
//         <input type="summonfrom-text" placeholder="From" name="from"  onChange={event => {
//             const { value } = event.target;
//             setfrom(value)
//           }} />
       
//         <br/>
//         <label className="summon-casename">Tehsil</label>
//         <input type="summontehsil-text" placeholder="tehsil" name="tehsil"  onChange={event => {
//             const { value } = event.target;
//             settehsil(value)
//           }} />
//         <br/>
        
//         <label className="summon-casename">Address</label>
//         <input type="summonadd-text" placeholder="address" name="address"  onChange={event => {
//             const { value } = event.target;
//             setaddress(value)
//           }} />
//         <br/>
//         <label className="summonmsgg-casename">Message</label>
//         <textarea type="summonmsg-text" placeholder="Message" name="message"  onChange={event => {
//             const { value } = event.target;
//             setmessage(value)
//           }} />
// <br/>
// <br/>
// <label className="summon-judgename">Judge Name</label>
//         <input type="summonjudge-text" placeholder="Judge name" name="judgename"  onChange={event => {
//             const { value } = event.target;
//             setjudgename(value)
//           }} />
// <br/>
// <br/>

//         <button className="online-summon-generator" onClick={
//          createAndDownloadPdf
         
//         }>
//        download
         
//          </button>
                     
//                    </div>
                   
                   
//                 )
                
//               })}





         
        
//         <Link to="/CMS/PoliceCon"><p className="paraconnect">Click here to  connect this summon to  police Station</p></Link>
//       </div>
//     );

  
// }
// export default GenerateSummon;





 import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import "./Generate.css"
import gensummon from "../../assets/Images/gensummon.jpg"
import {Link} from "react-router-dom"
import LPrac from "../Dashborad/Lawyer/LPrac"
class GenerateSummon extends Component {
  state = {
    casename: '',
    judgename: '',
    partyname: '',
    tehsil: '',
    address:'',
    caseStatus:'',
    message:'',
    loading:false

  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('http://localhost:2000/create-pdf', this.state)
      .then(() => axios.get('http://localhost:2000/fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'Summon.pdf');
      })
  }
  fetchData = () => {
    this.setState({ loading: true });

    //Faking API call here
    setTimeout(() => {
      this.setState({ loading: false });
    }, 11000);
   
  };
  render() {
    const {loading}=this.state;
    return (
      <div className="App">
         <img className="ressssummon-image" src={gensummon} />
         <p className="summonpdf">Fill the following fields to generate Online summon document</p>
          <label className="summon-casename">Case Name</label>
        <input  type="summoncasename-text" placeholder="Name" name="Casename" onChange={this.handleChange }/>
        <br/>
        
        <label className="summon-judgename">From</label>
        <input type="summonfrom-text" placeholder="From" name="from" onChange={this.handleChange} />
        <br/>
        <label className="summon-casename">Party Name</label>
        <input type="summonpart-text" placeholder="Party name" name="PartyName" onChange={this.handleChange} />
        <br/>
        <label className="summon-casename">Tehsil</label>
        <input type="summontehsil-text" placeholder="tehsil" name="tehsil" onChange={this.handleChange} />
        <br/>
        
        <label className="summon-casename">Address</label>
        <input type="summonadd-text" placeholder="address" name="address" onChange={this.handleChange} />
        <br/>
        <label className="summonmsgg-casename">Message</label>
        <textarea type="summonmsg-text" placeholder="Message" name="message" onChange={this.handleChange} />
<br/>
<br/>
<label className="summon-judgename">Judge Name</label>
        <input type="summonjudge-text" placeholder="Judge name" name="judgename" onChange={this.handleChange} />
<br/>
<br/>

        <button className="online-summon-generator" onClick={()=>{
         this.createAndDownloadPdf()
          this.fetchData()
        }}>
        {loading && (
            <i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
            />
          )}
          {loading && <span>Downloading ..</span>}
          {!loading && <span>Download Pdf</span>}
         
         </button>
        <Link to="/CMS/PoliceCon"><p className="paraconnect">Click here to  connect this summon to  police Station</p></Link>
        <Link to="/AutomaticSummon"><p className="paraautomaticsummmon">Click here to  generate automatic Summon</p></Link>

      </div>
    );
  }
}

export default GenerateSummon;