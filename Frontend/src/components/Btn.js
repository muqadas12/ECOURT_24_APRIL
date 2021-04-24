import React from 'react'

function Btn(props) {
    return (
        <div>
            <button onClick={()=>{
                props.history.push("/Search")
            }}>move</button>
        </div>
    )
}

export default Btn
