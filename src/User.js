import React, { useState } from 'react'

const User = () => {
const [name,setname]=useState("")
const [age,setage]=useState("")
const [address,setaddress]=useState("")


function makeuser(){  
   let data={name,age,address}
console.log(data);

}

  return (
    <div>
<h1>Make a new user</h1>
<input type="text" name='username' onChange={(e)=>setname(e.target.value)} value={name} placeholder='' /> <br />
<input type="text" name='age' onChange={(e)=>setage(e.target.value)} value={age} /> <br />
<input type="text" name='address' onChange={(e)=>setaddress(e.target.value)} value={address} /><br />
<button onClick={makeuser}> Create user</button>
<h1>  </h1>


    </div>
  )
}

export default User
