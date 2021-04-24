
 import React from "react"
import ReactToPrint from 'react-to-print';
import Printarrest from "../../../components/Arrestprint"
export class ComponentToPrint extends React.PureComponent {
    render() {
      return (
       <div>
         <Printarrest/>
          
       </div>
      );
    }
  }
  class ArrestP extends React.PureComponent {
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
  export default ArrestP;