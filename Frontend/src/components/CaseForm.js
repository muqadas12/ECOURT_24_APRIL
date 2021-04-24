import React from "react"
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";


const headings = [
    { id: "Judicial System of Pakistan", name:  "Judicial System of Pakistan", pdf: "Pdf" },
  ];
const CaseForm=(props)=>{
    const columns = [
        {
          dataField: "id",
          text: "CaseType"
        },
        {
          dataField: "name",
          text: "Attorney"
        },
        {
          dataField: "pdf",
          text: "CaseFile"
        }
      ];
    return(
        <div>
        <BootstrapTable keyField="id" data={headings} columns={columns} />
        

            </div>
    )
}
export default CaseForm