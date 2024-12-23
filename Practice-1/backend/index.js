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


// Endpoint to add a new user
app.post('/nodeusers', (req, res) => {
    const { name, email, age } = req.body;
    const sql = 'INSERT INTO nodeusers (name, email, age) VALUES (?, ?, ?)';
  
    db.query(sql, [name, email, age], (error, results) => {
      if (error) {
        console.error('Failed to insert user:', error);
        res.status(500).json({ error: 'Failed to add user' });
      } else {
        // Retrieve the newly created user
        const newUser = { id: results.insertId, name, email, age };
        res.json(newUser);
      }
    });
  });

// READ

app.get("/nodeusers",(req,res)=>{
    const sql = "SELECT * FROM nodeusers";
    db.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

// app.put(
  
// )
