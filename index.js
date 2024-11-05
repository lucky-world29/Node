 // ALTER TABLE `xyz`.`node_crud` 
 // RENAME TO  `xyz`.`nodeusers` ;

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app  = express();

app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
});

db.connect((err)=>{
    if(err) throw err;
    console.log("MySql Connected");
});

app.listen(5000 , () =>{
    console.log("Server running on port 5000");
})

//  CREATE A User in database (xyz) and table "/*--nodeusers--*/"

app.post("/nodeusers",(req,res)=>{
    const {name,email,age} = req.body;
    const sql = "insert into nodeusers (name,email,age) values(?,?,?)";
    db.query(sql,[name,email,age],(err,result)=>{
        if (err) throw err;
        res.send(result);
    });
});

// app.get("/test", (req, res) => {
//     res.send("Hello, this is a message from the /nodeusers endpoint!");
// });
