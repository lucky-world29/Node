import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

function Read() {
  const {id} = useParams();
  const [student,setStudent] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/read/'+id)  //http://localhost:3000/read/2
    .then(res => {
      console.log(res)
      setStudent(res.data[0]); // here the array was changed 
    })
    .catch(err => console.log(err))
  },[id]) 

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <div className="p-2">
          <h2>student Details </h2>
          <h2>{student.id}</h2>
          <h2>{student.name}</h2>
          <h2>{student.email}</h2>
          <h2>{student.phone}</h2>
          <h2>{student.address}</h2>
        </div>
        
        <Link to='/' className='btn btn-primary me-2'>Back</Link>
        <Link to={`/edit/${student.id}`} className='btn btn-info mx-1'>Edit</Link>
      </div>
    </div>
  )
}

export default Read;

