

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/nodeusers")
            .then((response) => setUsers(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <table className="table table-bordered table-dark table-striped" >
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       users.map((user) => (
                        <tr key={user.id}>  {/* Why we use the key as user.id*/}
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                        </tr>   
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
