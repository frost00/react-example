import React,{useState,useEffect} from "react";
import axios from 'axios';

export default function ComponentOne(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const submitAcc = (email ,password)=>{
  axios.post('http://localhost:3001/api/insert',{
    email:email,
    password: password,
  }).then(()=>
    console.log("successful Insert"))
  .catch(console.error);
};

  return (
    <div>
    <form>
    <input type="text" onChange={(e)=>{
      setEmail(e.target.value)
    }} placeholder="email@addr.com" name="email"/>

    <input type="text" onChange={(e)=>{
      setPassword(e.target.value)
    }} placeholder="Password" name="password"/>
    <button onClick={submitAcc} type="submit" value="submit">Submit</button>

    </form>
    </div>
  );
}
