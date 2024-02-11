import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HelloWorld() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/hello-world')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Hello Mama</h1>
      <p>{message}</p>
    </div>
  );
}

export default HelloWorld;

// This code defines a new React component called HelloWorld that makes an 
// HTTP GET request to the hello-world API endpoint we defined earlier. 
// The response data is stored in the message state, which is displayed on the web page.