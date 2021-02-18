import './style/style3.css';
import axios from 'axios'
import React, {useState,useEffect}from "react";


export default function ComponentThree(){
  const [email,setEmail] = useState("");

  var message;
  const btnHit =()=>{
    axios.request("http://localhost:3001/api/message").then(function (response) {
      const obj = response.data;
      message=obj
      console.log(obj);
      alert(message);
    }).catch(function (error) {
      console.error(error);
    });
  }
  const btnRead = () =>
  {
    axios.request("http://localhost:3001/api/read").then(function (response) {
      const obj = response.data;
      console.log(obj);
      alert(obj);
    }).catch(function (error) {
      console.error(error);
    });
  }


  return (
   
    <div>
     <p> MARAMKHAH SHAYON</p>
     <input id="inOne" type="text" onChange={(e)=>{
          setEmail(e.target.value)
        }} placeholder="email@addr.com" name="email"/>

     <button onClick={btnHit}>click</button>
     <button onClick={btnRead}>Read</button>
    </div>
  );
}
