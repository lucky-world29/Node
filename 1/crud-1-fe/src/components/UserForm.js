import React, { useState } from "react";
import axios from "axios";
const UserForm = ({ onUserAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/nodeusers", { name, email, age })
      .then((response) => {
        onUserAdd(response.data);
        setName("");
        setEmail("");
        setAge("");
      })
      .catch((error) => console.error(error));
  };


  return (
    <form onSubmit={handleSubmit} className="container">
      <br />
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
          <input
            className="form-control p-2"
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input
            className="form-control p-2"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Age</label>
        <div className="col-sm-10">
          <input
            className="form-control p-2"
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>
  
      <button type="submit" className="btn btn-warning">Add User</button>
    </form>
  );
  

};

export default UserForm;
