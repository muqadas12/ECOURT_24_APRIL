import React from "react"
import "./Footer.css"
import {Link} from "react-router-dom"
const Footer=()=>{
  return(
    <div>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* column1 */}
            <div className="col">
            <ul>
             <Link to="OnlineCaseSearch" className="linkng"> <p>Online Case Search</p></Link>
             

            
              </ul>
             


           
            </div>
            {/* column2 */}
            <div className="col">
            <Link to="JudgmentSerach" className="linkng2"> <p>Judgment Search</p></Link>
           
            
            </div>
            {/* column3 */}
            <div className="col">
            <Link to="LatestJudgments" className="linkng4"> <p>Latest Judgment</p></Link>

           
            
            </div>
             {/* column4 */}
             <div className="col">
            <Link to="CauseListSearch" className="linkng4"> <p>CauseList Search</p></Link>

            
            </div>


            <hr className="footerlinelast"/>

           

          </div>
          <hr/>
  <p className="col-smmmmm">
  Copyright&copy; {new Date().getFullYear()} Distric Court of Pakistan

  </p>
        </div>

      </div>
    </div>
  )
   

}

   
export default Footer;


// return(
//   <div>
//     <footer className="footer">
//     <p> &copy; {new Date().getFullYear()} Copyright:All rights reserved</p>
//   </footer>
//   </div>
// )