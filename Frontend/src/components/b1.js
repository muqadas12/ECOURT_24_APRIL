import React from 'react'

function B1(props) {
    return (
        <div>
            <button onClick={()=>{
                props.history.push("/Search")
            }}></button>
        </div>
    )
}

export default B1
