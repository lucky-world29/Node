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
 
 //  CREATE A User in database (xyz) and table "/*--department--*/"
 
 app.post("/employee",(req,res)=>{
     const {deptname} = req.body;
     const sql = "insert into department (deptname) values(?)";
     db.query(sql,[deptname],(err,result)=>{
         if (err) throw err;
         res.send(result);
     });
 });
 
 app.get("/test", (req, res) => {
     res.send("Hello, this is a message from the /nodeusers endpoint!");
 });
 
 // READ
 
 app.get("/employee",(req,res)=>{
     const sql = "SELECT * FROM department";
     db.query(sql,(err,result)=>{
         if(err) throw err;
         res.send(result);
     })
 })
 
 app.put("employee/:id",(req,res)=>{
    const {id} = req.params;
    const {name}=req.body;
 })
//  app.put("/users/:id", (req, res) => {
//     const { id } = req.params;
//     const { name, email, age } = req.body;
//     const query = "UPDATE users SET name = ?, email = ?, age = ?
//     WHERE id = ?";
//     db.query(query, [name, email, age, id], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//     });
//     });



// 
// select E.empId , E.empName , E.empSalary,E.deptId,D.deptId
//From Employees E 
//Inner Join
//Department D
// On E.deptId = D.deptId