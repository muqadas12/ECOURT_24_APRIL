import React,{useState} from "react";
 import { Button } from '@material-ui/core';
 import {Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
 import { Link,NavLink ,useHistory} from 'react-router-dom';
//  import ii from "../assets/Images/"

 import "./Searchbar.css"
const Searchbar=()=>{
    const [state , setstate] = useState();
  const location = useHistory();

  const onSubmitSearch = () =>{
        
    if (state){
        console.log(state);
        location.push(`/${state}`);
    }

        // <p>No Such data found</p>
    
    }
    return(
        <div>
 <Form inline>
                <FormControl 
                type="textsearchpage" 
                placeholder="Search" 
                value={state}
                onChange={e => setstate(e.target.value)}
               className="textsearchredirectpage" 
                />

                
                <Button 
                type="submit"
                className="btnofsearchpagetop"
                onClick={onSubmitSearch}
                ><i 
                class="fas fa-search" 
               style={{'marginTop':'50px','marginLeft':'20px','width':'30px'}}
                ></i></Button>
            </Form>
        </div>
            )
}
export default Searchbar;