import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]); // State to store fetched data
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    axios
      .get('http://localhost:5000/crud2') 
      .then((res) => {
        setData(res.data); // Assuming the API returns an array of students
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch data'); // Handle error
      });
  }, []);


  const handleDelete = (id) =>{
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
  if (!confirmDelete) return;
    axios.delete('http://localhost:5000/delete/'+id) // 
    .then((res) => {
      // location.reload();

      // Update the state to remove the deleted item
      setData((prevData) => prevData.filter((student) => student.id !== id));

    })
    .catch((err) => {
      console.error(err);
      setError('Failed to fetch data'); // Handle error
    });
  }

  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center '>
      <div className='w-75 bg-white rounded p-3'> {/* Increased width to accommodate the buttons */}
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error if exists */}
        <h2>Student List </h2>
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success">CREATE +</Link>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>ADDRESS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((student, index) => (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.address}</td>
                  <td>
                    <div className="d-flex justify-content-between"> {/* Flex container for buttons */}
                      <Link to={`/read/${student.id}`} className='btn btn-sm btn-info'> Read </Link> {/* the path should be correct*/}
                      <Link to={`/edit/${student.id}`} className='btn btn-sm btn-primary mx-1'>Edit</Link> {/* Adjusted margin */}
                      <button onClick={() => handleDelete(student.id)} className='btn btn-sm btn-danger'>Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
  
}

export default Home;
