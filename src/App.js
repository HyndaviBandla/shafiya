// App.js

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [filter, setFilter] = useState('none');
  const [response, setResponse] = useState(null);

  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numbers = data.split(',').filter(item => !isNaN(item));
    const alphabets = data.split(',').filter(item => isNaN(item));
    const highestAlphabet = alphabets.sort().reverse()[0];

    let filteredResponse = {
      is_success: true,
      user_id: 'john_doe_17091999',
      email: 'john@xyz.com',
      roll_number: 'ABCD123',
    };

    if (filter === 'numbers') {
      filteredResponse.numbers = numbers.join(',');
    } else if (filter === 'highest_alphabet') {
      filteredResponse.highest_alphabet = highestAlphabet;
    } else if (filter === 'both') {
      filteredResponse.numbers = numbers.join(',');
      filteredResponse.highest_alphabet = highestAlphabet;
    } else {
      filteredResponse.numbers = numbers.join(',');
      filteredResponse.alphabets = alphabets.join(',');
      filteredResponse.highest_alphabet = highestAlphabet;
    }

    setResponse(filteredResponse);
  };

  return (
    <div className="App">
      <Helmet>
        <title>AP21110010983</title>
      </Helmet>
      <header className="App-header">
        <h1>Frontend by Shafiya Begum</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Data (comma separated):
            <input type="text" value={data} onChange={handleInputChange} />
          </label>
          <label>
            Filter:
            <select value={filter} onChange={handleFilterChange}>
              <option value="none">None</option>
              <option value="numbers">Numbers</option>
              <option value="highest_alphabet">Highest Alphabet</option>
              <option value="both">Numbers & Highest Alphabet</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
        {response && (
          <div className="response">
            <h2>Filtered Response:</h2>
            {response.numbers && <p>Numbers: {response.numbers}</p>}
            {response.highest_alphabet && <p>Highest Alphabet: {response.highest_alphabet}</p>}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
