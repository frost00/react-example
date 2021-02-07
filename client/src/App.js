import logo from './sphere-black.png';
import './App.css';
// import ComponentOne from './welcome'
import React,{useState,useEffect} from "react";
import axios from 'axios';

//requests made via axion
function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  useEffect(()=>{
    axios.post('http://localhost:3001/api/insert',{
      email:email,
      password: password
    }).then(()=>
      console.log("successful Insert"))
    .catch(console.error);  })

  const submitAcc = (email ,password)=>{

};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <form>
        <input type="text" onChange={(e)=>{
          setEmail(e.target.value)
        }} placeholder="email@addr.com" name="email"/>

        <input type="text" onChange={(e)=>{
          setPassword(e.target.value)
        }} placeholder="Password" name="password"/>
        <button onClick={submitAcc} value="submit">Submit</button>

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

export default App;
