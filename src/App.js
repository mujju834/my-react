import './App.css';
import Plan from './plan';
import React, { Component } from 'react'

class App extends Component {
state={
  items:[],
  text:""
}
handlechange=(e)=>
{
  this.setState({text: e.target.value})
}
handleadd=(e)=>{
  if(this.state.text!==""){
    const items=[...this.state.items,this.state.text]
    this.setState({items,text:""});
    console.log(items);
  }else{
    alert("pass the value")
  }
}

handledelete=(id)=>{
const olditems=[...this.state.items]
// console.log(olditems);
const items=olditems.filter((ele,i)=>{
  return i !==id
})
console.log(items);
this.setState({items:items})

}

  render() {
    return (
      <div className='container-fluid my-5'>
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h1 className='text-center'>Todays list</h1>
            <div className="row">
              <div className="col-9">
                <input type="text" className='form-control' placeholder='Write something' value={this.state.text} onChange={this.handlechange} />

              </div>
              <div className="col-2">
                <button className='btn btn-warning px-5 font-weight-bold' onClick={this.handleadd}>ADD</button>
              </div>
              <div className="container-fluid">
                <ul className='list-unstyled row m-5'>

{
  this.state.items.map((value,id
    )=>{
    return <Plan key={id} id={id} handledelete={this.handledelete} value={value} />
  })
}                
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
