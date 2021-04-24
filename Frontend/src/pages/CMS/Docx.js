
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // import "./Viewfile.css"
// import { Container,Col,Row } from "reactstrap";
// import PictureAsPdfSharpIcon from '@material-ui/icons/PictureAsPdfSharp';
// import judgments from "../../../assets/Images/ve3.jpg";
// import pdf from "../../../assets/Images/pdf.PNG"
// import {Spinner} from "react-bootstrap"


// export const Docx = (props) => {
//   let [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const[input,setInput]=useState("");
//   const [LawyerNameField, setLawyerNameField] = useState("");
//   const [PartyNameField, setPartyNameField] = useState("");
//   const [uploadPlaintField, setuploadPlaintField] = useState("");
//   const [uploadDocxField, setuploadDocxField] = useState("");





  

  
//   useEffect(() => {
    
//     axios
//       .get("http://localhost:2000/api/admin/record")
//       .then((res) => {
//         console.log(res.data)
//         setData(res.data.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.log(err.response);
//         setIsLoading(false);
//       });
//   }, []);

 
//   const handleChange=(e)=>{
//     e.preventDefault();
//     setInput(e.target.value);
    
  
//   }
  

  


//   return (
//     <div>
//      <img className="fileview-image" src={judgments} />
//     <h2 className="cause-list-search">View EFiling:</h2>
   
//     <Container className="mt-4" fluid>
//       <div className="col-md-12 ">
//         {isLoading ? (
         
//             <Spinner animation="grow" />
          
//         ) : (

//           <div className="row">
//              <div className="col-md-12 mb-3 d-flex">
              

              

//               <div className="col-md-2 font-weight-bold h5">
//                 <span >Affidavit</span>
//               </div>
//               <div className="col-md-2 font-weight-bold h5">
//                 <span >Vaqalat nama</span>
//               </div>

//               <div className="col-md-2 font-weight-bold h5">
//                 <span >witness</span>
//               </div>
             
//             </div>



//             <div className="col-md-12 mb-3 h-80vh">

              
            
//               {data.map((list) => {
//                 const {
                   
                  
//                   pathu,
//                   pathq,
//                   pathr

//                 } = list;
//                 return (
                 
                  
//                   <div className="row">
//                   <div className="col-md-12 mb-3 d-flex">
                    
                     
                    
                  

                   
                    
//                     <div className="col-md-2 ">
//                       <a href={pathu}><img className="pdf-affiii" src={pdf}/></a>
//                     </div> 
//                     <div className="col-md-2 ">
//                       <a href={pathq}><img className="pdf-affiii" src={pdf}/></a>
//                     </div> 
//                     <div className="col-md-2 ">
//                       <a href={pathr}><img className="pdf-affiii" src={pdf}/></a>
//                     </div>

                 
                   

                    
                    
          
//                    </div>
                   
//                    </div>
                   
                  
//                 );
                
//               })}
              
//             </div>
            
           
//           </div>
//         )}
//       </div>
      
//     </Container>
//     </div>
//   );
// };
// export default Docx;








import React, { useState } from "react";
// import "./File.css"
import axios from "axios"
import { Modal, Button } from "react-bootstrap";


function Docu() {

  const [show, setShow] = useState(false);

 
  const [affidavitone, setaffidavitone] = useState();
  const [affidavitTwo, setaffidavitTwo] = useState();
  const [affidavitThree, setaffidavitThree] = useState();
  const [affidavitFour, setaffidavitFour] = useState();
  const [affidavitFive, setaffidavitFive] = useState();

  const [Vaqalatone, setVaqalatone] = useState();
  const [Vaqalattwo, setVaqalattwo] = useState();
  const [Vaqalatthree, setVaqalatthree] = useState();
  const [Vaqalatfour, setVaqalatfour] = useState();
  const [Vaqalatfive, setVaqalatfive] = useState();

  const [Witnessone, setWitnessone] = useState();
  const [Witnesstwo, setWitnesstwo] = useState();
  const [Witnessthree, setWitnessthree] = useState();
  const [Witnessfour, setWitnessfour] = useState();
  const [Witnessfive, setWitnessfive] = useState();


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  

  const send = event => {
    const filesArray = [];
    filesArray.push(affidavitone);
    filesArray.push(affidavitTwo);

    filesArray.push(affidavitThree);
    filesArray.push(affidavitFour);
    filesArray.push(affidavitFive);
    filesArray.push(affidavitone);

    filesArray.push(Vaqalatone);
    filesArray.push(Vaqalattwo);
    filesArray.push(Vaqalatthree);
    filesArray.push(Vaqalatfour);
    filesArray.push(Vaqalatfive);
    filesArray.push(Witnessone);
    filesArray.push(Witnesstwo);
    filesArray.push(Witnessthree);
    filesArray.push(Witnessfour);
    filesArray.push(Witnessfive);



   
    const formdata = new FormData();
    filesArray.map((file) => formdata.append("image", file));
  
   
    axios.post("http://localhost:2000/api/admin/doc", formdata
    ).then(res => {
      console.log(res);
      alert("Your case has been filed!")

    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>

      <br/>
      <br/>
      
      <hr className="new"/>
      <form action="#" method="post" enctype="multipart/form-data" >
       
        <label className="u-c" htmlFor="file">Upload Affidavit:</label>
        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const affidavitone = event.target.files[0]
          setaffidavitone(affidavitone)
          console.log(affidavitone)
        }} />
        <br />
        <label className="u-c" htmlFor="file">Upload Vaqalat:</label>
        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const Vaqalatone = event.target.files[0]
          setVaqalatone(Vaqalatone)
          console.log(Vaqalatone)
        }} />
        
        <br />
        <label className="u-c" htmlFor="file">Upload witness:</label>
        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const Witnessone = event.target.files[0]
          setWitnessone(Witnessone)
          console.log(Witnessone)
        }} />
        <br/>
		//second
		<label className="u-c" htmlFor="file">Upload Affidavittwo:</label>
        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const affidavitTwo = event.target.files[0]
          setaffidavitTwo(affidavitTwo)
          console.log(affidavitTwo)
        }} />
        <br />
        <label className="u-c" htmlFor="file">Upload Vaqalat:</label>
        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const Vaqalattwo = event.target.files[0]
          setVaqalattwo(Vaqalattwo)
          console.log(Vaqalattwo)
        }} />
        
        <br />
        <label className="u-c" htmlFor="file">Upload witness:</label>
        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const Witnesstwo = event.target.files[0]
          setWitnesstwo(Witnesstwo)
          console.log(Witnesstwo)
        }} />
        <br/>
        <label className="u-c" htmlFor="file">Upload Affidavit three:</label>
        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const affidavitThree = event.target.files[0]
          setaffidavitThree(affidavitThree)
          console.log(affidavitThree)
        }} />
        <br />
        <label className="u-c" htmlFor="file">Upload Vaqalat:</label>
        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const Vaqalatthree = event.target.files[0]
          setVaqalatthree(Vaqalatthree)
          console.log(Vaqalatthree)
        }} />
        
        <br />
        <label className="u-c" htmlFor="file">Upload witness:</label>
        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const Witnessthree = event.target.files[0]
          setWitnessthree(Witnessthree)
          console.log(Witnessthree)
        }} />
        <br/>
<label className="u-c" htmlFor="file">Upload Affidavit four:</label>
        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const affidavitFour = event.target.files[0]
          setaffidavitFour(affidavitFour)
          console.log(affidavitFour)
        }} />
        <br />
        <label className="u-c" htmlFor="file">Upload Vaqalat:</label>
        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const Vaqalatfour = event.target.files[0]
          setVaqalatfour(Vaqalatfour)
          console.log(Vaqalatfour)
        }} />
        
        <br />
        <label className="u-c" htmlFor="file">Upload witness:</label>
        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const Witnessfour = event.target.files[0]
          setWitnessfour(Witnessfour)
          console.log(Witnessfour)
        }} />
        <br/>
		<label className="u-c" htmlFor="file">Upload Affidavit five:</label>
        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const affidavitFive = event.target.files[0]
          setaffidavitFive(affidavitFive)
          console.log(affidavitFive)
        }} />
        <br />
        <label className="u-c" htmlFor="file">Upload Vaqalat:</label>
        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const Vaqalatfive = event.target.files[0]
          setVaqalatfive(Vaqalatfive)
          console.log(Vaqalatfive)
        }} />
        
        <br />
        <label className="u-c" htmlFor="file">Upload witness:</label>
        <input type="file" id="file" name="image" multiple accept=".pdf,.jpg" onChange={event => {

          const Witnessfive = event.target.files[0]
          setWitnessfive(Witnessfive)
          console.log(Witnessfive)
        }} />
        <br/>
      </form>
      <button onClick={()=>{
         send()
         handleShow()
      }}
      
      
      className="submiitt-button"
      
      
      >Submit</button>
       <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Submitted!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Updated Files have been successfully Submitted</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  )
}
export default Docu;













