import './style/style2.css';
import ComponentMap from './mapComp'
import React, {useState,useEffect}from "react";


export default function ComponentTwo(){
  return (
   
    <div>
      <div id="map"></div>
       <div id ="mp">
       <ComponentMap id="cmpMap" />
       </div>
    </div>
  );
}
