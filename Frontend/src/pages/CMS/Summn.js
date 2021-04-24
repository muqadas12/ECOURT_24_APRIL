import React, { useState } from "react";
import axios from "axios";

import judgment from "../../assets/Images/es.jpg";

export const Summn = () => {
  const [partyName, setPartyName] = useState("");
  const [searchData, setSearchData] = useState([]);
  let [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [judge, setJudge] = useState("");
  const [party, setParty] = useState("");


 

  // useEffect(() => {
    
  //   axios
  //     .get("http://localhost:2000/api/record")
  //     .then((res) => {
  //       console.log(res.data)
  //       setData(res.data.data);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //       setIsLoading(false);
  //     });
  // }, []);

  const form= axios.get("http://localhost:2000/api/record",{
    
  data
  }).then(res=>{
      console.log(res.data)
      this.setData(res.data.data);
    }).catch(err=>{
      console.log(err)
    })
    
  

 
  
  const handleChangeCaseno = (e) => {
    setPartyName(e.target.value);
  }

  const handleSubmit = () => {
    const search = data.filter(x => x.LawyerName == party );
    console.log(party, judge);
    console.log(data);
    console.log(search);
    setSearchData(search);
    setShow(true);
  }



  return (
    <div>
     <img className="resss-image" src={judgment} />
    <h2 className="cause-list-search">List of Accepted Case:</h2>
    <label className="fee-case-no">Case No:</label>
        <select className="option-fee-case-no"
          // className="w-50 py-2"
           onChange={handleChangeCaseno}
          onSubmit={handleSubmit}
          >
         
          <option 
          name="select judge name" disabled>Select </option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.LawyerName}>{el.LawyerName}</option>
            ))}
          </> : null}

        </select>
        {show ? (
        <>

          <div className="row">
            <div className="col-md-12 mb-3 d-flex">
            <div className="col-md-2 d-flex">

<span className="text-capitalize h5 font-weight-bold">LawyerName</span>
</div>

<div className="col-md-2 d-flex h5 font-weight-bold">
<span>PartyName</span>
</div>
<div className="col-md-2 font-weight-bold h5">
<span >Case Type</span>
</div>

            </div>
            <div className="col-md-12 mb-3 h-80vh">

            {data.map((list) => {
                const {
                   LawyerName,
                   PartyName,
                   CaseType,
                  
                 
                } = list;
                return (
                 
                  
                  <div className="row">
                  
                    
                     
                    <div className="col-md-2 d-flex">
                    
                      <span className="text-capitalize">{LawyerName}</span>
                    </div>
                  
                    <div className="col-md-4 d-flex">
                      <span>{PartyName}</span>
                    </div>
                    <div className="col-md-2 d-flex">
                      <span className="typeofcase">{CaseType}</span>
                    </div>
                   
                  

                   
                 
                      
                   
                   

                    
                    
          
                   </div>
                   
                  
                   
                  
                );
                
              })}
            </div>
          </div>
        </>) : null}
        
   
    </div>
  );
};
export default Summn;













