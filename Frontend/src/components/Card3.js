import React from 'react'
import "./Card3.css"
import EFilingProcedure  from "../pdfs/Procedure for E-Filing.pdf"
import { NavLink,Link } from 'react-router-dom';



function Card3() {
    return (
        <div>
    <div className="container">
  <div className="row">
    <div className="col">
    <div class="card" >
    <a href={EFilingProcedure}>
  <img src="https://webstockreview.net/images/judge-clipart-law-and-order-2.jpg" class="card-img-top" alt="..."/></a>
  <div class="card-body">
    <h5 className="card-title-one">ViewProcedure </h5>
    <p class="card-text">Click on button to view procedure for filling case</p>
    <a href={EFilingProcedure} class="btn btn-primary">View Procedure</a>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div class="card" >
    <NavLink to="/PressRelease">
  <img src="https://static.vecteezy.com/system/resources/previews/000/150/042/original/press-release-vector-art.jpg" class="card-img-top" alt="..."/></NavLink>
  <div className="card-body">
    <h5 className="card-title">Press Release</h5>
    <p className="card-text">Click on button to view press release.</p>
    <NavLink to="/PressRelease" className="btn btn-primary">View Press Release</NavLink>
  </div>
</div>
    </div>

    <div className="col-sm">
    <div className="card" >
    <NavLink  to="/LawyerList">
  <img src="https://www.vakilno1.com/wp-content/uploads/2018/06/lawyer.jpg" className="card-img-top" alt="..."/></NavLink>
  <div className="card-body">
    <h5 className="card-title-list">Lawyer List</h5>
    <p className="card-text">Click on button to view Lawyer List.</p>
    <NavLink  to="/LawyerList" className="btn btn-primary">View Lawyers</NavLink>
  </div>
</div>
    </div>



    {/* <div className="col-sm">
    <div className="card" >
  <img src="https://www.americangaragedoorsllc.com/wp-content/uploads/2015/07/CONTACT-US-LOGO.gif" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title-contact">Contact Us</h5>
    <p className="card-text">Click on button to view contact </p>
    <NavLink to="/Contact" className="btn btn-primary">View Contact</NavLink>

   
  </div>
</div>
    </div> */}
    
    
  </div>
</div>
    

  </div>
    )
}

export default Card3;
