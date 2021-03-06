import logo from './sphere-black.png';
import './App.css';
import React,{useState,useEffect} from "react";
import axios from 'axios';

export default function ComponentOne(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  useEffect(()=>{
   
  })

  //async functions
  function resolveAfter2Seconds()
  {
    return new Promise(resolve =>{
      setTimeout(()=>{
        resolve('Resolved');
      },2000);
    });
  }

  async function asyncCall(){
    console.log('calling');
    const result = await resolveAfter2Seconds();
    axios.request("http://localhost:3001/api/read").then(function (response) {
      alert(response[0]+" "+response[1]);
    }).catch(function (error) {
      console.error(error);
    });
    console.log(result);
  }
//async

  const btnsubmit =()=>
  {
    //check if user exists
    //if not exist post to db
    axios.post('http://localhost:3001/api/insert',{
      email:email,
      password: password
    }).then(()=>
     console.log("successful Insert"))
     .catch(console.error);
      //window.location.reload();
      //window.location.pathname="/change"
    
  }
  return (
   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>

        <form name="form1">
        <p id="me">e</p>
        <input id="inOne" type="text" onChange={(e)=>{
          setEmail(e.target.value)
        }} placeholder="email@addr.com" name="email"/>

        <input id="inTwo" type="password" onChange={(e)=>{
          setPassword(e.target.value)
        }} placeholder="Password" name="password"/>
        <button onClick={btnsubmit} type="button">Submit</button>
        </form>
         
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


/**/