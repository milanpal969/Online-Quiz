import React from 'react'

function Admin() {
  return (
    <div>
        <div style={{display:"flex", justifyContent:"space-around"}}>
        <input />
        <button>search</button>
        </div>

        <div>
            <form onSubmit={handleSubmit}>
            <input placeholder='enter question' />
            <input placeholder='enter answer' />
            </form>
        </div>
    </div>
  )
}

export default Admin