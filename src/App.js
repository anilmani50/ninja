import logo from './logo.svg';
import './App.css';
import Postdata from './Postdata';
import Count from './Count';
import Display from './Display';
import React,{createContext, useState} from 'react';

export const store=createContext();
function App() {
 
  const [data,setData]=useState([
    {
      brandname:"nokia"
    },
    {
      brandname:"Sansung"

    },
  ]);
  
  
  
  return (
    <>
  {/*<Postdata/>*/}  
  <store.Provider value={[data,setData]} >
    <Count/>
    <Display />

    </store.Provider>
    </>
  );
}

export default App;
