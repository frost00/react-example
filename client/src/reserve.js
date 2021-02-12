import './App.css';
import React, {useState,useEffect}from "react";

export default function ComponentTwo(){
const[Name,setName]=useState("");
const[Phone,setPhone]=useState("");

useEffect(()=>{
  var pg = document.getElementById("i");
  pg.innerHTML=Name+" "+Phone;
})

  return (
   
    <div className="App">
      <header className="App-header">
       <form>
         <input onChange={(e)=>{
           setName(e.target.value)
         }} type="text" placeholder="John Doe"></input>
         <input onChange={(e)=>{
           setPhone(e.target.value)
         }}type="text" placeholder="Cell phone"></input>
       </form>
       <p id="i">chg me</p>
      </header>
    </div>
  );
}
