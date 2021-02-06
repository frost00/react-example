//server side
const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser =require('body-Parser');
const cors = require('cors');

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "%83#G!xyZ2$4S",
  database: "mydb"
});
app.use(cors);
app.use(bodyParser.urlencoded({extended: false}));


app.post('/api/insert',(req,res)=>{

const emailIN = req.body.email;
const passwordIN = req.body.password;

  const sqlInsert = "INSERT INTO login (email,password) VALUES (?,?)";
  db.query(sqlInsert,[emailIN,passwordIN],(err,result)=>{});
  console.log(err)
});

app.listen(3001, ()=>{
  console.log("PORT 3001");
});
