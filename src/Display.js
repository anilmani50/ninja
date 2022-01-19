import React,{useContext, useState} from 'react';

import {store} from './App';

function Display() {

  

  const [data,setData]=useContext(store);
   const [name,setName]=useState("");
   const chageHandler=(e)=>{
     setName(e.target.value);
   }

   const submitHandler=(e)=>{
     e.preventDefault();
     setData([...data,{brandname:name}])
     console.log(data)
   }
  
  return <div className="card">
    <div>hello</div>
       
       <div className="card-body">
         <center>
       {
         data.map((item,index)=><h3 key={index}>Brand Name is:{item.brandname}</h3>)
       }
       <form onSubmit={submitHandler}>
         <input type="text" onChange={chageHandler}/>
         <input type="submit" value="add" />
       </form>

       </center>
       </div>

      
     </div>;
}

export default Display;
