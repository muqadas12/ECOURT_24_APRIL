import React, { Fragment } from "react"
import cms1 from "../../../assets/Images/modd.jpg";
import jum from "../../../assets/Images/jum.PNG";
import Crj from "../../../assets/Images/Crj.PNG";
import efile from "../../../assets/Images/efile.PNG";
import summ from "../../../assets/Images/summ.PNG";
import proceed from "../../../assets/Images/proceed.PNG";




 import "./Mod.css"
import ListIcon from '@material-ui/icons/List';
import InfoIcon from '@material-ui/icons/Info';
import AlbumIcon from '@material-ui/icons/Album';
import ListAltIcon from '@material-ui/icons/ListAlt';
import VideocamIcon from '@material-ui/icons/Videocam';
import {Jumbotron,Container} from 'react-bootstrap'
import {Link} from "react-router-dom"


const JudgeMod=(props)=>{
    return(
        <div>
    <img className="responsive-image" src={cms1} alt="My logo" />
    <Jumbotron className="jum-laws">
  <Container className="jum-laws">
   <img className="pi" src={jum}/>
    <p className="ppp">
      This is the Judge dashboard.Here  Judge  can view caserecords(caserecords contain all information related to case)
      <br/>
      Judge can view case file by lawyer
      <br/>
      Judge can view case status of summon weather it is served or not
      <br/>
      Judge can also proceedonline case
    </p>
  </Container>
</Jumbotron>

<img className="case-judge-records"  src={Crj}/>
<Link  to="/Docu"><p className="case-record-judge-dashboard"> Case Record</p></Link>
<img className="efile-judge-records"  src={efile}/>
<Link  to="/ViewEFilling"><p className="efile-judge-dashboard">View E-Filing of case</p></Link>
<img className="summon-judge-records"  src={summ}/>
<Link  to="/ESummon"><p className="esumon-judge-dashboard">ESummon Status</p></Link>
<img className="proceed-judge-records"  src={proceed}/>
<Link  to="/CaseProceeding"><p className="proceed-judge-dashboard">Case Proceeding</p></Link>


    {/* <button onClick={() => {
          props.history.push("/CaseRecord");
        }}
    
    className="btn-1">Case Record<span class="material-icons"><InfoIcon/></span>
    </button>
<button onClick={() => {
          props.history.push("/ViewEFilling");
        }}

className="btn-2">View EFiling of case<span class="material-icons"><ListIcon/></span></button>
     <button onClick={() => {
          props.history.push("/ESummon");
        }}
     className="btn-3">ESummon Status<span class="material-icons"><AlbumIcon/></span></button>
    <button onClick={() => {
          props.history.push("/CaseProceeding");
        }}
    
    className="btn-4">Case Proceeding<span class="material-icons"><VideocamIcon/></span></button>
 */}

        </div>
       
    )
}
export default JudgeMod;

