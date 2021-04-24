import React, { useState, useEffect }from "react"
import axios from 'axios';
import arrest from "../assets/Images/arrest.jpg"
import "./ArrestPrint.css"
const Arrestprint=React.forwardRef((props, ref) =>{
   



   const [Caseno, setCaseno] = useState("");
  const [data, setData] = useState([]);
   const [searchData, setSearchData] = useState([]);
  const [caseYear] = useState("");
  const [ show,setShow] = useState(false);

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
    const search = data.filter(x => x.caseNumber === Caseno );
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
       
      
        
         <form className="d-flex flex-column justify-content-center align-items-center">

<label className="case-no-casenumberofarrestwarrant"> Select Caseno to display Arrest warrant:</label>
<select
  className="caseno-cmsprintarrestinfo"
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
                  criminalName,
                  locationCrime
                     
                } = list;
                return (
<div className="backarrest">     
<h3 className="toparrestwarrant">ARREST WARRANT</h3>
<img className="imgofarrestwarrant" src={arrest} alt="arrestwarrant"/> 

        <p className="districtcourt">DISTRICT COURT</p>
        <br />
         <p style={{ textAlign: "center" }}>
            WARRANT OF ARREST
            <br />
            PURSUANT TO
            <br />
            JUDICIARY LAW § 2-b(3)
            </p>
          <br />
          <br />
            <p >
            CASE NUMBER:<input type="textcasenum" value={caseNumber}/>
            DATE: <input type="date" />CRIME NUMBER:<input type="textcasenum" value={crimeNumber}/> POLICE STATION: <input type="textcasenum" value={address}/>  TO RESPECTED
            <input type="textcasenum" value={judgeName}/>JUDGE
          </p>
          <p>SECTION:30</p>
           <p>
            <br />
            TO ANY PEACE OFFICER OF THE STATE OF
            PAKISTAN:<input  type="textcasenum" value={policeOfficer}/>
            NAME OF
            CONTENMOR<input type="textcasenum" value={criminalName}/>
          </p>
         
          <br />
          <p>
            ADDRESS<input type="textcasenumaddress" value={locationCrime}/>HAS BEEN
            CHARGED WITH A FELONY <input type="textcasenum" value={crimeNumber}/>, SO YOU ARE ORDERD BY
            THIS LETTER TO ARREST <input type="textcasenum" value={criminalName}/>AND  BRING THE  MENTIONED MAN.
          </p>{" "}
          <br />

         
          <br /> 

  
        
     
      
                     
                   </div>
                   
                   
                )
                
              })}





         
        
      </div>
    );
   
  
})
export default Arrestprint;





 