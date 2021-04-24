import React, { Fragment } from "react"
import cms1 from "../../assets/Images/a.jpg";
import admind from "../../assets/Images/admind.jpg";
import ad1 from "../../assets/Images/ad1.PNG";
import info from "../../assets/Images/info.PNG";
import clist from "../../assets/Images/clist.PNG";
import sum from "../../assets/Images/sum.PNG";
import record from "../../assets/Images/record.PNG";
import judgment from "../../assets/Images/lj.PNG";







import "./Modules.css"
import ListIcon from '@material-ui/icons/List';
import InfoIcon from '@material-ui/icons/Info';
import AlbumIcon from '@material-ui/icons/Album';
import ListAltIcon from '@material-ui/icons/ListAlt';
import {Jumbotron,Container} from 'react-bootstrap'
import {Link} from "react-router-dom"


const Modules=(props)=>{
    return(
        <div>
    <img className="responsive-image-admin-dashboard" src={cms1} alt="My logo" />
    <Jumbotron className="jum-laws">
  <Container className="jum-laws">
   <img className="admindash" src={admind}/>
   <img className="ad11" src={ad1}/>


    <p className="para-admin">
      This is the Admin dashboard.Here  Admin can manage all the information related to case.He can update all 
      <br/>
      the information like updating cause list.He can also update all the information related to case
      <br/>
      Admin can also manage  summon document he can serve with judge permission if it is not served
     
    </p>
  </Container>
</Jumbotron>
<img className="case-judgeee-records"  src={info}/>
<Link  to="/CaseInfo"><p className="admindashboard">Update Case Information</p></Link>
<img className="clist-records"  src={clist}/>
<Link  to="/CMS/CauseListCMS"><p className="causelist-law-dashboard">Update Cause List </p></Link>
<img className="summon-judgee-records"  src={record}/>
<Link  to="/CaseRecordCMS"><p className="upd-case-records">Update case Record</p></Link>
<img className="status-lawyer-records"  src={sum}/>
<Link  to="/CMS/ESummonCMS"><p className="proceed-judge-dashboard">E-summon Status</p></Link>
<img className="judgmentcaserecord"  src={judgment}/>
<Link  to="/CMS/UpdateJudgment"><p className="latestjudgmentupdated">Update Judgment</p></Link>




    {/* <button onClick={() => {
          props.history.push("/CaseInfo");
        }}
    
    className="btn-1">Update Case Information<span class="material-icons"><InfoIcon/></span>
    </button>
<button onClick={() => {
          props.history.push("/CMS/CauseListCMS");
        }}

className="btn-2">Update Cause List <span class="material-icons"><ListIcon/></span></button>
     <button onClick={() => {
          props.history.push("/CaseRecordCMS");
        }}
     className="btn-3">Update case Record<span class="material-icons"><AlbumIcon/></span></button>
    <button onClick={() => {
          props.history.push("/CMS/ESummonCMS");
        }}
    
    className="btn-4">E-summon Status<span class="material-icons"><ListAltIcon/></span></button>
 */}

        </div>
       
    )
}
export default Modules

