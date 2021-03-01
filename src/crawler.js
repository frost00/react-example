import './style/style3.css';
import React, {useState,useEffect}from "react";
import axios from 'axios';

require('dotenv').config();



export default function ComponentThree(){

  const btnHit =()=>{
    axios.request("http://localhost:3001/test").then(function (response) {
      const obj = response.data;
      console.log(obj);
    }).catch(function (error) {
      console.error(error);
    });
  }

  const btnHit1 =()=>{
   
  }

  return (
   
    <div>
     <p> MARAMKHAH SHAYON</p>
     <input name="site"></input>
     <button onClick={btnHit}>click</button>
     <button onClick={btnHit1}>click1</button>

    </div>
  );
}
