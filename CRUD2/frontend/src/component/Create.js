import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {

    const [values,setValues] = useState({
        name : '',
        email : '',
        phone : '',
        address : ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:5000/crud2', values)
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(err =>console.error(err));
    }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" 
      style={{ background: 'linear-gradient(to right, #6a11cb, #2575fc)' }} >

      <div className="card p-4" style={{ width: '400px', borderRadius: '10px' }}>
        <h3 className="text-center mb-4">Create Student</h3>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" onChange={e => setValues({...values,name:e.target.value})} placeholder="Enter Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" onChange={e => setValues({...values,email:e.target.value})} placeholder="Enter Email" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="tel" className="form-control" onChange={e => setValues({...values,phone:e.target.value})} placeholder="Enter Phone" />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea className="form-control" onChange={e => setValues({...values,address:e.target.value})} rows="3" placeholder="Enter Address"></textarea>
          </div>
          <button type="submit" className="btn btn-success w-100">Submit</button>
        </form>
      </div>
    </div>

  )
}

export default Create