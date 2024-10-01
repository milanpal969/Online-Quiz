import React, { useState } from 'react'
import QRCode from 'react-qr-code'
function Qr() {

    const [input,setinput] = useState('');
    const [qr,setqr] = useState('');

  return (
    <div>

        <input onChange={(e)=>{setinput(e.target.value)}} value={input} type='text' placeholder='enter your value'></input>
        <button onClick={()=>{setqr(input); setinput('')}} disabled={input && input.trim()!=="" ? false : true}>Generate QR</button>
        <div>
            <QRCode value={qr} height={200} width={200} />
        </div>
    </div>
  )
}
export default Qr