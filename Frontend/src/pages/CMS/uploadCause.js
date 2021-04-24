// import React, { useState } from 'react';
// import { storage } from './Auth/storage'
// import axios from 'axios'
// import Input from './Common/Input';
// const UploadCause = () => {
//     const [causeFile, setCauseFile] = useState("")
//     const [causeTitle, setCauseTitle] = useState("")
//     const [date, setDate] = useState("")
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (causeFile == "") {
//             alert("wait for file to upload")
//             return
//         }
//         axios({
//             method: 'post',
//             url: 'http://localhost:3001/api/cause/addCause',
//             data: {
//                 title: causeTitle,
//                 date: date,
//                 causeFile: causeFile
//             }
//         }).then(res => {
//             alert(`Your Cause Record Added Successfull`)
//         }).catch(err => {
//             alert(err)
//         });

//     }
//     const handleFile = async (file) => {
//         await storage
//             .ref(`pdf / ${file.name}`)
//             .put(file)
//             .then((snapshot) => {
//                 alert("File Uploded");
//             });
//         await storage
//             .ref(`pdf / ${file.name}`)
//             .getDownloadURL()
//             .then((url) => {
//                 setCauseFile(url);
//             });
//     };
//     return (
//         <>
//             <form onSubmit={handleSubmit}>


//                 <Input
//                     type='text'
//                     placeholder='title'
//                     name='title'
//                     value={causeTitle}
//                     onChange={(e) => setCauseTitle(e.target.value)}
//                 />
//                 <Input
//                     type='date'
//                     placeholder='Date'
//                     name='date'
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                 />
//                 <Input
//                     type='file'
//                     placeholder='Case File'
//                     name='case'
//                     onChange={(e) => handleFile(e.target.files[0])}
//                 /> <button
//                     // disabled={this.validate() || isProcessing}
//                     className='login-btn continue-to-shipping'
//                 >
//                     Submit
//                 </button></form>
//         </>
//     );
// }

// export default UploadCause;