import React from "react"

const FileUpload=()=>{
    return(
        <form method="POST" encType="multipart/form-data" action="/">
            <inputy type="file" id="filename"/>
        </form>
    )
}
export default FileUpload;