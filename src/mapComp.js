import './style/style1.css';
import React, {useState,useEffect}from "react";
import {Loader} from "@googlemaps/js-api-loader"
require('dotenv').config();
var geolocation = require('geolocation');

export default function ComponentMap(){
const[Street,setStreet]=useState("");
const[City,setCity]=useState("");
const[State,setState]=useState("");

//Using states and effects will perform some action upon refresh and actions or events
useEffect(()=>{
  var pg = document.getElementById("i");
 
})

//API option with hardcoded API. TRY to hide API key with 
//.env OR place these option on the server side and make an axios request to the server
let map,l,ll,ctn;

geolocation.getCurrentPosition(function(err,position){
  if(err) throw err
alert("Lat: "+position.coords.latitude+" \nLng: "+position.coords.longitude);
l = position.coords.latitude;
ll=position.coords.longitude;
})

//Google API 
const google = window.google = window.google? window.google:{};
const loader = new Loader({
  apiKey: process.env.API_KEY_G,
  version: "weekly",
  libraries: ["places"]
});
const mapOptions ={
  center:{
   lat:41.19374829854264,
   lng:-73.21673112434215
  },
  zoom: 15
};

 //geolocation get's current location
 
 function shootMAP(){
      loader.load().then(()=>{
            map = new google.maps.Map(document.getElementById("map"),mapOptions);

            const infowindow = new google.maps.InfoWindow({
              content: ctn ,
            });
            const marker = new google.maps.Marker({
              position:{lat:l,lng:ll},
              map,
              title: "Rocks",
            });
            marker.addListener("click",()=>{
              infowindow.open(map,marker);
            });
    });
  }

  const btnsubmit =() =>{
    console.log("FIRE");
    shootMAP();
    ctn = document.getElementById("trg").innerText
  }
  


    
  return (
    <div>
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
        <textarea id="trg"></textarea>
        <button id="btn" onClick={btnsubmit} type="button">Submit</button>
       </form>
    </div>
  );
}
