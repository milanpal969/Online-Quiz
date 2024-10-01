import React from 'react'

function CustomModelHelper({header,body,footer,close}) {
  return (
    <div className='container3'>

        <div className='header'>
            <h2>{header ? header : "Header"}</h2>
            <span className='colsecall' onClick={close}>x</span>
            {console.log(close)}
        </div>
        <div className='body'>
            {
                body ? body : <div> This is body </div>
            }
        </div>
        <div className='footer'>
        <h2>   {
               footer ? footer : "Foooter" 
            }</h2>
        </div>

    </div>
  )
}

export default CustomModelHelper