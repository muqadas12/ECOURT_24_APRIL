import React from "react"
import ReactToPrint from 'react-to-print';
import Sumaut from "./Sumaut"
import {Link} from "react-router-dom"
export class ComponentToPrint extends React.PureComponent {
    render() {
      return (
       <div>
         <Sumaut/>
          
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
                  <Link to="/CMS/PoliceCon"><p className="paraconnect">Click here to  connect this summon to  police Station</p></Link>

          <ComponentToPrint ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }
  export default PP;







