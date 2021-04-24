import React from "react";

const Header=(props)=>{
    return(
        <div>
             <button className="loginbtn" onClick={() => {
                props.history.push("/CaseProceeding");
              }}>move</button>
        </div>
    )
}
export default Header;