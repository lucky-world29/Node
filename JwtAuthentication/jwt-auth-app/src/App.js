import React, { useState } from 'react';
import Login from './components/Login';
import TokenValidator from './components/TokenValidator';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <div>
            <h1>JWT Authentication</h1>
            {token ? (
                <TokenValidator />
            ) : (
                <Login setToken={setToken} />
            )}
        </div>
    );
};

export default App;
