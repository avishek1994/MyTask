// src/components/Dashboard.js

import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBBtn, MDBCol , MDBContainer
  } from 'mdb-react-ui-kit';
const Dashboard = ({ username, onLogout }) => {
  return (
<MDBContainer fluid>

<div className="d-flex align-items-start bg-light mb-3 mt-5" style={{ height: "100px" }}>
<MDBCol></MDBCol>

<MDBCol>
    <MDBCard>
    <MDBCardBody>
      <MDBCardTitle>Welcome, {username}!</MDBCardTitle>
      <MDBBtn onClick={onLogout}>Logout</MDBBtn>
    </MDBCardBody>
  </MDBCard>
  </MDBCol>

<MDBCol></MDBCol>
</div>
</MDBContainer>
  );
};

export default Dashboard;
