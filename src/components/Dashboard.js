import React from 'react';
import Navbar from './Navbar';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBIcon, MDBCardHeader, MDBCardText, MDBBtn
} from 'mdb-react-ui-kit';
import ProductTrendsChart from '../Dashboard/ProductTrendsChart';
import OrdersAnalysisChart from '../Dashboard/OrdersAnalysisChart';
import OrdersByCategoryChart from '../Dashboard/OrdersByCategoryChart';


const Dashboard = () => {
  return (
    <>
      <Navbar />
      <MDBContainer style={{ marginTop: '20px' }}>
        <MDBRow>
          <MDBCol md="6" className="mb-4">
            <MDBCard>
              <MDBCardHeader>Admin Dashboard</MDBCardHeader>
              <MDBCardBody>
                  <MDBCardText>
                    Welcome to the Admin Dashboard. Here, you can monitor various analytics and insights.
                  </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="3" className="mb-4">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Total Users</MDBCardTitle>
                <p className="h1"><MDBIcon icon="users" /> 100</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="3" className="mb-4">
            <MDBCard>
              <MDBCardBody>
              <MDBCardTitle>Total Orders</MDBCardTitle>
                <p className="h1"><MDBIcon icon="shopping-cart" /> 50</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer style={{ marginTop: '20px' }}>
      <MDBRow>
      <MDBCol md="12" className="mb-4">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Orders By Category Distribution</MDBCardTitle>
                <OrdersByCategoryChart />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="12" className="mb-4">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Orders Distribution</MDBCardTitle>
                <OrdersAnalysisChart />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="12" className="mb-4">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Product Trends</MDBCardTitle>
                <ProductTrendsChart />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Dashboard;
