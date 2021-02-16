import './style/style2.css';
import ComponentMap from './mapComp'
import React, {useState,useEffect}from "react";


export default function ComponentTwo(){
const[Street,setStreet]=useState("");
const[City,setCity]=useState("");
const[State,setState]=useState("");

//Using states and effects will perform some action upon refresh and actions or events


//Simular to fetch Axios will make a request with the option above.
const btnsubmit =() =>{
  console.log("FIRE");
}

  return (
   
    <div>
        <p id="i">I</p>
      <div id="map"></div>
       <form id="form2">
         <input onChange={(e)=>{
           setStreet(e.target.value)
         }} type="text" placeholder="Street"></input>
         <input onChange={(e)=>{
           setCity(e.target.value)
         }}type="text" placeholder="City"></input>
           <input onChange={(e)=>{
           setState(e.target.value)
         }}type="text" placeholder="State"></input>
        <textarea></textarea>
        <button id="btn" onClick={btnsubmit} type="button">Submit</button>

       </form>
       <div id ="mp">
       <ComponentMap id="cmpMap"/>
       </div>
    </div>
  );
}
