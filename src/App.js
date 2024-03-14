import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import Products from './components/Products';

function App() {

  React.useEffect(() => {
    document.title = 'ERP System'; 
  }, []);
  return (
    <Router> 
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default App;
