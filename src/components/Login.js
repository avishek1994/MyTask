// src/components/Login.js

import React, { useState } from 'react';
import { MDBInput , MDBBtn , MDBContainer,MDBCol  } from 'mdb-react-ui-kit';
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here, you can implement your authentication logic
    // For this example, we'll consider it a successful login if the username and password are not empty
    if (username.trim() !== '' && password.trim() !== '') {
      onLogin(username); // Pass the username to the parent component (App.js)
    }
  };

  return (





<MDBContainer fluid>
<div className="d-flex align-items-start bg-light mb-3" style={{ height: "100px" }}>

<MDBCol></MDBCol>

<MDBCol >
    <div className='mt-5' >
      <h2>Login</h2>
      <MDBInput
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <MDBInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <MDBBtn className='me-1 ' color='success' onClick={handleLogin}>Login</MDBBtn>
    </div>
    </MDBCol>
   <MDBCol> </MDBCol>
   </div>
    </MDBContainer>
    
  );
};

export default Login;
