import React, { useState } from 'react';
import axios from 'axios';

const GetOperationCode = () => {
    const [operationCode, setOperationCode] = useState(null);

    const handleGetRequest = async () => {
        try {
            const res = await axios.get('https://your-heroku-app.herokuapp.com/bfhl');
            setOperationCode(res.data.operation_code);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div>
            <button onClick={handleGetRequest}>Get Operation Code</button>
            {operationCode !== null && (
                <div>
                    <h3>Operation Code:</h3>
                    <p>{operationCode}</p>
                </div>
            )}
        </div>
    );
};

export default GetOperationCode;
