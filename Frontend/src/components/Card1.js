import React from 'react'
import "./Card1.css"
import { NavLink } from 'react-router-dom';
import contactpic from "../assets/Images/contactusnew.png"

function Card() {
    return (
        <div>
    <div className="container">
  <div className="row">
    <div className="col">
    <div className="card" >
    <NavLink to="/Rules">
<img  src="https://thumbs.dreamstime.com/b/rules-words-hanging-blue-background-d-illustration-79178562.jpg" className="card-img-top" alt="..."/> </NavLink>
  <div className="card-body">
    <h5 className="card-title-rules">Rules</h5>
    <p className="card-text">Click on button to view Court Rules.</p>
    <NavLink to="/Rules" className="btn btn-primary">View Rules</NavLink>
  </div>
</div>
    </div>
   

    <div className="col-sm">
    <div className="card" >
    <NavLink to="/Contact">
  <img  className="cimg"src={contactpic} alt="..."/></NavLink>
  <br/>
  <div className="card-body">
    <h5 className="card-title-contact">Contact Us</h5>
    <p className="card-text">Click on button to view contact </p>
    <NavLink to="/Contact" className="btn btn-primary">View Contact</NavLink>

   
  </div>
</div>
    </div>





   
    <div className="col-sm">
    <div className="card" >
  <img src="https://www.seekpng.com/png/detail/249-2499150_use-photo-or-logo-or-text-custom-wall.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Court Timings</h5>
    <p class="card-text">Monday To Friday</p>
    <p class="card-text">9Am to 5pm</p>
    <p class="card-text">Closed on Saturday and Sunday</p>

   
  </div>
</div>
    </div>
    
    
  </div>
</div>
    

  </div>
    )
}

export default Card;
