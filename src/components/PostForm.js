import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
    const [data, setData] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://your-heroku-app.herokuapp.com/bfhl', { data: data.split(',') });
            setResponse(res.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Data (comma-separated values):
                    <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
            {response && (
                <div>
                    <h3>Response:</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default PostForm;
