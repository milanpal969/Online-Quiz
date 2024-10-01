import React, { useState } from 'react'

function RandomColour() {

    const[colortype, setcolortype] = useState('Hex')
    const [color,setColor] = useState('#000000')

    function handleHex(){

        const a = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        let hex = "#";

        for(let i=0; i<6; i++){
            const i = Math.floor(Math.random()*6)
            hex+= a[i];
        }
        setColor(hex);
    }

    function handleRgb(){

        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);

        setColor(`rgb(${r},${g},${b})`);
    }

  return (
    <div className='wrapper' style={{
        height:"100vh",
        width:"100vw",
        backgroundColor:color
    }}>

        <button onClick={colortype==="Hex" ? handleHex : handleRgb}>Generate Random Colour</button>
        <button onClick={()=>{setcolortype('rgb')}}>Generate rgb Colurs</button>
        <button onClick={()=>{setcolortype('Hex')}}>Generte Hex Colours</button>
        <div>
            {color}
        </div>

    </div>
  )
}

export default RandomColour