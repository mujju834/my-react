import React, { useState } from 'react'
function Main1( ){
  const[val,setval]=useState('')

const test=(e)=>{
}

    return (
    <div>
<input type="text" onChange={(e)=>setval(e.target.value)}  value={val} />
        <button onClick={()=>{alert(val)}} >Click me</button>
        <h1>{val}</h1>
</div>
  )
}

export default Main1
