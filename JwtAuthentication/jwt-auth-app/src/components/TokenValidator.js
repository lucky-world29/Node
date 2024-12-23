import React, { useState } from 'react';
import { validateToken } from '../services/api';

const TokenValidator = () => {
    const [validationMessage, setValidationMessage] = useState('');

    const handleValidate = async () => {
        try {
            const { data } = await validateToken();
            setValidationMessage(`Token is valid: ${JSON.stringify(data)}`);
        } catch {
            setValidationMessage('Invalid token');
        }
    };

    return (
        <div>
            <h2>Validate Token</h2>
            <button onClick={handleValidate}>Check Authentication</button>
            <p>{validationMessage}</p>
        </div>
    );
};

export default TokenValidator;
