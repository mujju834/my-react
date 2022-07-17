import React from 'react'

const Plan = (props) => {
  return (
    <div>
      <li className="shadow p-2 my-2 col-sm-9">{ props.value }</li>
      <button className="btn btn-danger my-2 col-sm-10 " onClick={()=>{props.handledelete(props.id)}} >
       X
      </button>


    </div>
  )
}

export default Plan;