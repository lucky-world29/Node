
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
 
 //  CREATE A crud2 in database (xyz) and table

 /**
  * CREATE TABLE `xyz`.`crud2` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  */
 
 app.post("/crud2",(req,res)=>{
     const {name} = req.body;
     const {email} = req.body;
     const {phone} = req.body;
     const {address} = req.body;
     const sql = "insert into crud2 (name,email,phone,address) values(?,?,?,?)";

     // for values [name,email,phone,address]  -->

     /*const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.address
     ] 
       db.query(sql,[values],(err,result)=>{  cond...     });  /// ************* [values]^*
     */  

     db.query(sql,[name,email,phone,address],(err,result)=>{
         if (err) throw err;
         res.send(result);
     });

 });
 

 // READ
 
 app.get("/crud2",(req,res)=>{
     const sql = "SELECT * FROM crud2";
     db.query(sql,(err,result)=>{
         if(err) throw err;
         res.send(result);
     })
 })

//
 app.get("/read/:id",(req,res)=>{
    const sql = "SELECT * FROM crud2 where id = ?";
    const id = req.params.id;

    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

//

app.put("/edit/:id",(req,res)=>{
    const sql = "UPDATE crud2 SET `name` = ?,`email` = ?,`phone` = ?,`address` = ?  WHERE `id` = ?";
    const id = req.params.id;

    const {name,email,phone,address} =req.body

    db.query(sql,[name,email,phone,address,id],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})


//

app.delete("/delete/:id",(req,res)=>{
    const sql = "DELETE FROM crud2 WHERE id = ?"
    const id = req.params.id;

    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})


