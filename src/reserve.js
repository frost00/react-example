import './App.css';
import React, {useState,useEffect}from "react";
import {Loader} from "@googlemaps/js-api-loader"
import axios from "axios"

export default function ComponentTwo(){
const[Name,setName]=useState("");
const[Phone,setPhone]=useState("");

useEffect(()=>{
  var pg = document.getElementById("i");
  pg.innerHTML=Name+" "+Phone;
})


const options = {
  method: 'GET',
  url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
  params: {address: '164 Townsend St., San Francisco, CA', language: 'en'},
  headers: {
    'x-rapidapi-key': '91f52bc93cmsh54e965aa41a23d9p16e486jsn1418eef8f96f',
    'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com'
  }
};



const btnsubmit =() =>{
  axios.request(options).then(function (response) {
    const obj = response.data;
    console.log(obj.results[0].formatted_address);
  }).catch(function (error) {
    console.error(error);
  });
}

const google = window.google = window.google? window.google:{};
//let map;

const loader = new Loader({
  apiKey: "AIzaSyA7Ju_Hw6XwlZk9G3GEtwYBerY2wpO9pG8",
  version: "weekly",
  libraries: ["places"]
});
const mapOptions ={
  center:{
   lat:41.19374829854264,
  lng:-73.21673112434215
  },
  zoom: 11
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
      <div id="map"></div>
       <form id="mapForm">
         <input onChange={(e)=>{
           setName(e.target.value)
         }} type="text" placeholder="Street"></input>
         <input onChange={(e)=>{
           setPhone(e.target.value)
         }}type="text" placeholder="Cell phone"></input>
        <button id="btn" onClick={btnsubmit} type="button">Submit</button>
       </form>
      </header>
    </div>
  );
}
