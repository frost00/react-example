import './style/style1.css';
import React, {useState,useEffect}from "react";
import {Loader} from "@googlemaps/js-api-loader"
import axios from "axios"
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
 let lat,lng ,poly;
 geolocation.getCurrentPosition(function (err,position){
  lat = position.coords.latitude;
  lng = position.coords.longitude;

  if(err) throw err
});

 var map;
loader.load().then(()=>{
     map = new google.maps.Map(document.getElementById("map"),mapOptions);
    const marker =  new google.maps.Marker(
      {
        position:{lat:lat,lng:lng},
        map:map,
        title: "NEW MARKER"
      });
      const infowindow = new google.maps.InfoWindow({
        content: "example",
      });

      marker.addListener("click",()=>{
        infowindow.open(map,marker)
      })


      poly = new google.maps.Polyline({
            strokeColor: "#000000",
            strokeOpacity: 1.0,
            strokeWeight: 3,
      });
      poly.setMap(map);
      map.addListener("click", addLatLng);

      function addLatLng(event)
      {
          const path = poly.getPath();

          path.push(event.latLng)
          
          new google.maps.Marker({
              position: event.latLng,
              title:"#"+path.getLength(),
              map:map,
          });
      }

      
    });

    //END OfLOADER
   
    
  return (
    <div>
       <form id="mapForm">
       </form>
    </div>
  );
}
