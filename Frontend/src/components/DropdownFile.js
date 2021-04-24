import React from "react"
import { Dropdown,DropdownButton } from 'react-bootstrap'
import "./DropdownFile.css"

const DropdownFile=()=>{
    return(
        <div className="drop">
<DropdownButton id="dropdown-basic-button" title="Select department">
  <Dropdown.Item href="#/action-1">Police Station</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Forensic Lab</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>

        </div>
    )
}
export default DropdownFile;