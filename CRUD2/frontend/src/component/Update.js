import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/read/`+id) // 
      .then(res => {
        console.log(res);
        setValues(res.data[0]); // Pre-fill the form with fetched data
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.put(`http://localhost:5000/edit/`+id, values)  //http://localhost:3000/edit/1
      .then(res => {
        console.log('Data updated successfully:', res);
        navigate(`/`); // Redirect to the student's details page after updating
      })
      .catch(err => console.log('Error updating data:', err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" 
         style={{ background: 'linear-gradient(to right, #6a11cb, #2575fc)' }} >
      <div className="card p-4" style={{ width: '400px', borderRadius: '10px' }}>
        <h3 className="text-center mb-4">Update Student</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              name="name" 
              value={values.name}
              onChange={handleChange} 
              placeholder="Enter Name" 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              name="email" 
              value={values.email}
              onChange={handleChange} 
              placeholder="Enter Email" 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input 
              type="tel" 
              className="form-control" 
              name="phone" 
              value={values.phone}
              onChange={handleChange} 
              placeholder="Enter Phone" 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea 
              className="form-control" 
              name="address" 
              value={values.address}
              onChange={handleChange} 
              rows="3" 
              placeholder="Enter Address" 
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
