// import React, {Component} from "react";
//  import court from "../../assets/Images/bgef1.jpg";
//  import bg from "../../assets/Images/Eflb.jpg";
//  import axios from "axios"
//  import FileUpload  from "../../shared/FormElements/FileUpload"
//  import "./Filecase.css";  


// class FileCase extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             LawyerName: "",
//             PartyName: "",
//             file:""
//             // uploadPlaint: "",
//             // uploadDocx: ""
           
//         }

//     }
//     fileChangeHandler=event=>{
//         this.setState({
//           file: event.target.files[0],
//           loaded: 0,
//         })
//       }
      
//     handleLawyernameChange = (event) => {
//         this.setState({
//             LawyerName: event.target.value
           
//         })
       


//     }
//     handlePartynameChange = (event) => {
//         this.setState({
//             PartyName: event.target.value
//         })


//     }



//     //node part
//     authSubmithandler=async event =>{
//         event.preventDefault();
//      const payload={
//       LawyerName:this.state.LawyerName,
//       PartyName:this.state.PartyName,
//       file:this.state.file

//      }
//     const formdata=new FormData();
//     formdata.append('LawyerName',this.state.LawyerName)
//     formdata.append('PartyName',this.state.LawyerName)
//     formdata.append('file',this.state.file)
     
//        try {
//          const response = await fetch('http://localhost:2000/api/lawyer/Efile', {
//            method: 'POST',
//            formdata,
//            headers: {
//              'Content-Type': 'application/json',
//              formdata
//            },
//            body: JSON.stringify(payload)
//          });
     
//          const responseData = await response.json();
//          alert(JSON.stringify(responseData))
//          console.log(responseData);
//        } catch (err) {
//          console.log(err);
//        }
     
//      }
//     handleSubmit = event => {
//         alert(`${this.state.lawyername} ${this.state.lawyername} ${this.state.uploadCase} ${this.state.uploadDocx}`)
//     }
   


    

    


// render(){




//      return (

//             <form onSubmit={this.authSubmithandler}>
//                 <img className="responsive-image" src={court} />
//                 <div>
//                     <label className="l-n">Lawyer Name:</label>

//                     <input id="Lawyername"  type="texts" name="Lawyername"
                   
//                   onClick={this.handleLawyernameChange}
//                   value={this.setState.LawyerName}
                    
//                     />
//                     <br />
//                     <label className="p-n">Party Name:</label>
//                     <input type="textss"  id="PartyName" name="Partyname"
//                     value={this.setState.PartyName}
                    
//                      onClick={this.handlePartynameChange}
                    
//                     />
//                     <br />
//                     <label className="u-c">Upload Case:</label>
//                     <input type="file"
//                     />
                      
                      
                
                    
//                     <br />
//                     <label className="u-c">Upload Docx:</label>
//                     <input type="file" id="file" onChange={this.fileChangeHandler} />

//                     <br/>
                   
//                     <button className="submit-button" type="submit">Submit</button>


//                 </div>

//             </form>

//         )
//     }
// }
// export default FileCase;



import React from "react";
import axios from 'axios'
const FileCase=()=>{
  const send=()=>{
    const filesArray = [];
    

    const formdata = new FormData();
    filesArray.map((file) => formdata.append("image", file));
    axios.post("http://localhost:2000/upload", formdata
    ).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err)
    })
  }
  return(
    <div>
<form action="#" method="post" enctype="multipart/formdata">
<div> 
   <label>Select your profile picture:</label> <input type="file" name="image" />
</div>
<div> 
  <button onClick={send}>Upload</button>
    {/* <input type="submit" name="btn_upload_profile_pic" value="Upload" />  */}
</div>
</form>
    </div>
  )
}
export default FileCase;







