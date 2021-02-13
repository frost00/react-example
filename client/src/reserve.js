import './App.css';
import React, {useState,useEffect}from "react";
import {Loader} from "@googlemaps/js-api-loader"

export default function ComponentTwo(){
const[Name,setName]=useState("");
const[Phone,setPhone]=useState("");

useEffect(()=>{
  var pg = document.getElementById("i");
  pg.innerHTML=Name+" "+Phone;
})

const google = window.google = window.google? window.google:{};
//let map;

const loader = new Loader({
  apiKey: "AIzaSyA7Ju_Hw6XwlZk9G3GEtwYBerY2wpO9pG8",
  version: "weekly",
  libraries: ["places"]
});
const mapOptions ={
  center:{
   lat:0,
  lng:0
  },
  zoom: 4
};

loader.load().then(()=>{
   new google.maps.Map(document.getElementById("map"),mapOptions);
}).catch(e=>{
  console.log("Do something!");
});


  return (
   
    <div className="App">
      <header className="App-header">
      <p id="i">chg me</p>
      <div id="map">SOMETHING</div>
       <form id="mapForm">
         <input onChange={(e)=>{
           setName(e.target.value)
         }} type="text" placeholder="John Doe"></input>
         <input onChange={(e)=>{
           setPhone(e.target.value)
         }}type="text" placeholder="Cell phone"></input>
       </form>
      </header>
    </div>
  );
}
