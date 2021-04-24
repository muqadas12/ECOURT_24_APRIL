import React from 'react'

function FormRadio() {
    return (
        <div>
            <form>
        <label>
        <input className="rd-1" type="radio" value="option1" checked={true} />
        Pending
      </label>
      <label>
        <input className="rd-2" type="radio" value="option1" checked={false} />
        Serve
      </label>
            </form>
        </div>
    )
}

export default FormRadio
