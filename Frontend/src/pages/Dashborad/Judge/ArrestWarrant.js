
import React from "react"
import axios from "axios";
import arrest from "../../../assets/Images/arrest.jpg";
import {Link} from "react-router-dom"
import ReactToPrint from 'react-to-print';
import "./Warrant.css"
class ArrestWarrant extends React.PureComponent {
  render() {
    return (
      <div>

        <ReactToPrint 
          trigger={() => {
           
            return <a className="printing" href="#">Print this out!</a>;
          }}
          content={() => this.componentRef}
        />
                <Link className="sendingtoautomaticwarrantpg" to="/ArrestP">Click here to issue automatic Warrant</Link>

        <ComponentToPrint ref={(el) => (this.componentRef = el)} />

      </div>
    );
  }
}
export class ComponentToPrint extends React.PureComponent {
    render() {
      return (
        
        <div className="backarrest">

          <h2 style={{ textAlign: "center" }}>ARREST WARRANT</h2>
          <img className="imgofarrestwarrant" src={arrest}/> 

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
          <p>
            CASE NUMBER:--------------------DATE:
            <input type="date" /> POLICE STATION:-------------------- TO RESPECTED
            -------------------- JUDGE
          </p>
          <p>
            <br />
            TO ANY PEACE OFFICER OF THE STATE OF
            PAKISTAN:------------------------------------------------------------------------------------------
          </p>
          <br />
          <p>
            NAME OF
            CONTENMOR------------------------------------------------------------------------------------------
          </p>
          <br />
          <p>
            ADDRESS-----------------------------------------------------HAS BEEN
            CHARGED  WITH  A FFELONY----------------------, SO YOU ARE ORDERD BY
            THIS LETTER TO ARREST----------------- AND BRING THE MENTIONED MAN.
          </p>{" "}
          <br />
         
          <br />
        </div>
      );
    }
  }
 
  export default ArrestWarrant;