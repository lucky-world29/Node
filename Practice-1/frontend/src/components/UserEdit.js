import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserEdit() {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  // Fetch data on component mount
  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => {setData(response.data);})
      .catch(error => {console.error('There was an error fetching the data!', error);});
  }, []);

  // Handle editing of an entry
  const handleEdit = (item) => {
    setEditing(item.id);
    setName(item.name);
    setEmail(item.email);
    setAge(item.age);
  };

  // Handle saving the updated data
  const handleSave = (id) => {
    axios.put(`http://localhost:5000/nodeusers/${id}`, { name, email ,age})
      .then(response => {
        // Update the local data state
        setData(data.map(item => 
          item.id === id ? { ...item, name, email ,age} : item
        ));
        setEditing(null); // Exit editing mode
      })
      .catch(error => {
        console.error('There was an error saving the data!', error);
      });
  };

  return (
    <div className="App">
      <h1>Data List</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {editing === item.id ? (
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <button onClick={() => handleSave(item.id)}>Save</button>
                <button onClick={() => setEditing(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <p>Name: {item.name}</p>
                <p>Email: {item.email}</p>
                <p>Age: {item.age}</p>
                <button onClick={() => handleEdit(item)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserEdit;
