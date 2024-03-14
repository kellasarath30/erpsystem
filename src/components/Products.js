import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBInputGroup,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import Rating from 'react-rating';
import Navbar from './Navbar';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <MDBContainer style={{ marginTop: '20px' }}>
        <MDBRow className='align-items-center'>
          <MDBCol className='text-center'>
            <MDBInputGroup>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="form-control"
              />
              <MDBBtn rippleColor='dark' onClick={() => handleSearch(searchQuery)}>
                <MDBIcon icon='search' />
              </MDBBtn>
            </MDBInputGroup>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer style={{ marginTop: '20px' }}>
        <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
          {filteredProducts.map((product) => (
            <MDBCol key={product.id}>
              <MDBCard style={{ height: '370px' }}>
              <MDBCardImage
                src={product.image}
                alt={product.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                position='top'
                className="img-fluid"
              />

                <MDBCardBody>
                    <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginBottom: '0' }}><b>{product.title}</b></p>
                    <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginBottom: '0' }}>{product.category}</p>
                    <p>
                    {product.rating.count}&nbsp;
                      <Rating
                        initialRating={product.rating.rate}
                        readonly
                        emptySymbol={<i className="far fa-star" style={{ color: '#ccc' }}></i>}
                        fullSymbol={<i className="fas fa-star" style={{ color: '#ffc107' }}></i>}
                      />
                      &nbsp;&nbsp; 
                      <b>${product.price}</b> 
                      
                  </p>
                  <div style={{ display: 'flex' }}>
                    <MDBBtn rounded className='mx-2' color='secondary'>
                      Cart
                    </MDBBtn>
                    <MDBBtn rounded color='success'>
                      Buy Now
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  );
}
