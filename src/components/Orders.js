import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import Rating from 'react-rating';
import Navbar from './Navbar';

export default function Orders() {
  const [products, setProducts] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data.slice(0, 4)); // Displaying only first 4 products initially
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const toggleExpanded = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <>
      <Navbar />
      <MDBContainer style={{ marginTop: '20px' }}>
        <MDBRow>
          {products.map((product, index) => (
            <MDBCol key={index} size={12}>
              <MDBCard style={{ marginBottom: '20px' }}>
                <MDBCardBody>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <MDBCardTitle>{product.title}</MDBCardTitle>
                      <p>
                        Category: {product.category} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Rating
                          initialRating={product.rating.rate}
                          readonly
                          emptySymbol={<i className="far fa-star" style={{ color: '#ccc' }}></i>}
                          fullSymbol={<i className="fas fa-star" style={{ color: '#ffc107' }}></i>}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <b>Price: ${product.price}</b>
                      </p>
                    </div>
                    <MDBBtn rounded color='success' onClick={() => toggleExpanded(index)}>
                      View Order Details
                    </MDBBtn>
                  </div>

                  {expandedIndex === index && (
                    <>
                    <p><b>Order Id: </b> 7898ADV789</p>
                    <p><b>Customer Name: </b> John Doe</p>
                    <p><b>Customer Email: </b> example@gmail.com</p>
                    <p><b>Customer Phone: </b> +91 9876543210</p>
                    <p><b>Shipping Address: </b> 123, Main Street, Vizag, India - 535591</p>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                      <div>
                        <p><b>Ordered Date:</b> 05-03-2024 <br/>
                        Pune, India - 535591</p>
                      </div>
                      <div>
                        <p><b>Packed Date:</b> 07-03-2024 <br/>
                        Pune, India - 535591</p>
                      </div>
                      <div>
                        <p><b>Shipped Date:</b> 08-03-2024 <br/>
                        Hyderabad, India - 535591</p>
                      </div>
                      <div>
                        <p><b>Delivered Date:</b> 15-03-2024 <br/>
                        Vizag, India - 535591</p>
                      </div>
                    </div>
                    
                    </>
                  )}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  );
}
