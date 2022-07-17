import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

const Lists = () => {
  const api='https://jsonplaceholder.typicode.com/posts';
const [users,setusers]=useState([])

useEffect(()=>{
  fetch(api).then((data)=>{
    data.json().then((result)=>{
      console.log(result);
      setusers(result)
    })
  })
},[])

  return (
    <div>
      <h1> listing is here </h1>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.NO</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>

       {
users.map((item,i)=>
<tr key={i}>
  <td> {i} </td>
  <td> {item.title} </td>
  <td> {item.body} </td>
</tr>
)
       }
        
      </tbody>
    </Table>


    </div>
  )
}

export default Lists
