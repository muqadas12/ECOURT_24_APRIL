import React, { useState }  from 'react';
import { NavLink,Link,useHistory } from 'react-router-dom';
 import { Dropdown,DropdownButton,NavDropdown,Nav } from 'react-bootstrap';
 import { Button } from '@material-ui/core';
import {MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBNavItem}from "mdbreact";
import './NavLinks.css';

const NavLinks = (props,isLogged,history) => {
  const [state , setstate] = useState();
  const location = useHistory();
  const handleClick = ()=>{
    history.push("/")
    isLogged(false)
  }
 
  return <ul className="nav-links">
    <li>
      <NavLink to="/About" exact>About Us  <i class='fa fa-users'></i></NavLink>
    </li>
    <li>
      <NavLink to="/LoginCMS">Case Mangament System     <i class="fas fa-book-open"></i></NavLink>
    </li>
    <li>
            

      <NavDropdown  title="Dashboard" id="collasible-nav-dropdown">
      

    <NavDropdown.Item style={{'color':'black'}} as={Link} to="/JudgeSignUp">Judge Dashboard <i class="fas fa-balance-scale"></i></NavDropdown.Item>
    <NavDropdown.Item style={{'color':'black'}} as={Link} to="/LawyerSignUp">Lawyer Dashboard  <i class="fas fa-gavel"></i></NavDropdown.Item>

      </NavDropdown>
    </li>
   

    <li>

     <NavLink to="/EFilling">E-Filling    <i class="fas fa-file-alt"></i></NavLink>
    </li>
    <li>
     

      <NavDropdown  title="Search case" id="basic-nav-dropdown">
        <NavDropdown.Item style={{'color':'black'}}  as={Link} to="/OnlineCaseSearch">Online Case Search      <i class="fas fa-search"></i>
</NavDropdown.Item>
        <NavDropdown.Item style={{'color':'black'}} as={Link} to="/LatestJudgments">Latest Judgments <i class="fas fa-gavel"></i></NavDropdown.Item>

      </NavDropdown>
    </li>
    <li>
    {/* <NavLink to="/Notification">Send Notification</NavLink> */}
    <NavDropdown  title="Send Notification" id="basic-nav-dropdown">
    <NavDropdown.Item style={{'color':'black'}} as={Link} to="/LoginNotification">Send Notification <i class="far fa-envelope"></i></NavDropdown.Item>
    <NavDropdown.Item style={{'color':'black'}} as={Link} to="/ViewNotification">View Calendar <i class="fa fa-calendar-o" aria-hidden="true"></i></NavDropdown.Item>

      </NavDropdown>
    </li>
    <li>
      <NavLink to="/StaticReport">Statistics & Reports    <i class="fas fa-chart-bar"></i>
      </NavLink>
    </li>
    
   
  
  </ul>
};

export default NavLinks;




// import React from 'react';
// import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class App extends React.Component {
//     render() {
//         return (
//             <div ><Navbar className="nav-links" bg="dark" variant="dark" >
//                 <Navbar.Brand href="/About">
//                                        E-COURT</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav >
//                         <Nav.Link href="https://www.knowledgefactory.net/">Home
//                                                         </Nav.Link>
//                         <Nav.Link href="https://www.knowledgefactory.net
//                            /p/knowledefactory-topics.html">SpringBoot</Nav.Link>
//                         <NavDropdown title="Web Development" id="basic-nav-dropdown">
//                             <NavDropdown.Item href="https://www.knowledgefactory.net
//                               /p/reactjs-tutorial.html">ReactJS</NavDropdown.Item>
//                             <NavDropdown.Item href="https://www.knowledgefactory.net
//                              /p/react-native.html">React Native</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="https://www.knowledgefactory.net
//                               /p/node-js.html">NodeJS</NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
                   
//                 </Navbar.Collapse>
//             </Navbar>

//             </div>
//         );
//     }

// }
// export default App;