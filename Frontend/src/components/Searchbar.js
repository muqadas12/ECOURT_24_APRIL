// import React,{useState} from "react";

// const Searchbar=(props)=>{
// const[input,setInput]=useState("");

// let nba=[
//   {name:"PressRelease",value:"PressRelease"},
//   {name:"Court Timings",value:"Court Timings"},
//   {name:"Lawyer List",value:"Lawyer List"},
//   {name:"View Procedure for filing case",value:"View Procedure for filing case"},
//   {name:"Cick here",value:"Cick here"},
//   {name:"Cause list",value:"Cause list"},
//   {name:"Judgment",value:"Judgment"},
//   {name:"Latest Judgment",value:"Latest Judgment"},
//   {name:"online case search",value:"online case search"}








// ]

// const handleChange=(e)=>{
//     e.preventDefault();
//     setInput(e.target.value);
    
  
  
//   if(input.length>0){
//     nba= nba.filter((i)=>{
//       return i.name.match(input);
//     })
//   }
//   if (input.search === "PressRelease" ){
//     props.history.push("/PressRelease")}
// }
  
//     return(
//         <div>
//  <label className="search-b-1">Search By Case No:</label>
// <input type="texttt"  className="search-box-case" placeholder="Search" onChange={handleChange} value={input}/>        </div>
//     )
// }
// export default Searchbar;

// import React, { useState, useEffect  } from "react";
// // *************** 
// import useForm from "../../../utils/useForm"; 
//  // *************** 
// import "./english1.css"; 
// import logo from "../../../assets/PPS5.jpeg"; 
// import { USERNAME } from "../../../Auth";
// // *************** 
// import { TextField } from "@material-ui/core";
// // *************** 
// import { NavLink, useHistory } from "react-router-dom";


// export let Eng1val;

// const English1 = () => {
//   const history = useHistory(); 
//   const [inputValue, handleChangeForInputs, clear] = useForm();

//   const searchHandler = (e) => { 
//     console.log("i am called"); 
//     Eng1val=inputValue.search;
//     console.log(Eng1val);
//     // console.log(inputValue.search)

//     if (inputValue.search === "Greetings (Good Morning/Afternoon/Evening)" ||"Greetings  " ){
//       history.push("/Contents")}

//       if   (inputValue.search ===  "Greeting Teachers and Elders" ){
//         history.push("/Contents")       
//       }
  
//       if   (inputValue.search === "Alphabet (Aa to Zz capital and small)" || "Alphabet" ){
//         history.push("/Contents")
//       }
//       if (inputValue.search ===  "Small and Capital Letters (A to Z)" ){
//         history.push("/Contents")}
  
//       if   (inputValue.search ===   "Sounds of Letters A to Z"){
//         history.push("/Contents")
//       }  
//   };
    


//   const EnglishHandler1 = (e) => { 
//     console.log(e.target.value ); 
//     Eng1val=e.target.value;
//     console.log(Eng1val);

//     if (e.target.value ===  "Greetings (Good Morning/Afternoon/Evening)" ){
//       history.push("/Contents")}

//     if   (e.target.value ===  "Greeting Teachers and Elders" ){
//       history.push("/Contents")       
//     }

//     if   (e.target.value === "Alphabet (Aa to Zz capital and small)" ){
//       history.push("/Contents")
//     }

    
//   };  

  

//   const EnglishHandler2 = (e) => { 
//     console.log(e.target.value ); 
//     Eng1val=e.target.value;
//     console.log(Eng1val);

//     if (e.target.value ===  "Small and Capital Letters (A to Z)" ){
//       history.push("/Contents")}

//     if   (e.target.value ===   "Sounds of Letters A to Z"){
//       history.push("/Contents")
//     }  
//   }; 





//   return (
//     <React.Fragment>
//       <nav className="NavbarItems-english1">
//       <NavLink to="/Student" >
                  
//                   <img className="logo-english1" src={logo} alt="Logo" />
          
//           </NavLink>
//         <h1 className="navbar-logo-english1">{USERNAME}</h1>

//         <ul className="nav-menu-english1 ">
//         <div className="nav-links-english1">
//                     <li>
//                     <NavLink to="/Student" className="nav-links-english1">
//                     Home
//                     </NavLink>
//                     </li>
//                 </div>
//                  <div className="nav-links-english1">
//                     <li>
//                     <NavLink to="/#" className="nav-links-english1">
//                     Worksheets
//                     </NavLink>
//                     </li>
//                 </div>

//                 <div className="nav-links-english1">
//                     <li>
//                     <NavLink to="/#" className="nav-links-english1">
//                     Progress Report
//                     </NavLink>
//                     </li>
//                 </div>

//                 <div className="nav-links-english1">
//                     <li>
//                     <NavLink to="/#" className="nav-links-english1">
//                     Notes
//                     </NavLink>
//                     </li>
//                 </div>

//                 <div className="nav-links-english1">
//                     <li>
//                     <NavLink to="/Student/SpellBee" className="nav-links-english1">
//                     Spell Bee
//                     </NavLink>
//                     </li>
//                 </div>
//         </ul>
//         <NavLink to="/#" > <button className="button-english1">Log out</button>
//         </NavLink> 
        
//       </nav> 
 
       


//       {/* // ***************  */}
//       <form className="searchBox-english1">
//             <TextField
//               type="text"
//               name="search"
//               label="Search Topic"
//               // onClick={searchHandler}
//               value={inputValue.search || ""}
//               onChange={handleChangeForInputs}
//             /> 
//           </form>

//           <button className="searchBtn-english1"  onClick={searchHandler} > Search </button> 
//           {/* // ***************  */}

//       <div className="outerDiv-english1">
//         <div className="all-divs-english1">

//             <div className="body-div-english1"> 
//               <select className="text-english1"  id="Chapter - 1"   
//                onChange={EnglishHandler1 }>  
               
//                 <option value="EnglishGrade1Chapter1"> Chapter - 1: Ice Breaking/ Greetings/ Alphabets  </option>  
//                 <option value="Greetings (Good Morning/Afternoon/Evening)">1.1: Greetings (Good Morning/Afternoon/Evening) </option>  
//                 <option value="Greeting Teachers and Elders">1.2: Greeting Teachers and Elders</option>
//                 <option value="Alphabet (Aa to Zz capital and small)">1.3: Alphabet (Aa to Zz capital and small) </option>
//                 {/* <option value="English1Topic4">1.4: Sing the ABC Song (A to Z) </option>
//                 <option value="English1Topic5">1.5: Listen and Repeat (Names of Objects)</option> */}
//               </select> 
//             </div>
       




//             <div className="body-div-english1"> 
//               <select className="text-english1"  id="Chapter - 2"    
//                onChange={EnglishHandler2  } > 
// {/* <br> </br>  */}
//                 <option value="grade2"> Chapter - 2: The Alphabet Picture Gallery (A to Z)</option> 
//                 <option value="Small and Capital Letters (A to Z)"  >2.1: Small and Capital Letters (A to Z) </option>  
//                 <option value="Sounds of Letters A to Z"  >2.2: Sounds of Letters A to Z</option>   
//               </select> 
//             </div>
 

//         </div>
//         {/* <img className="bow-english1" src={bow} alt="bow" /> */}
//       </div>
//     </React.Fragment>
//   );
// };

// export default  English1;

