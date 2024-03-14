import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import { FaShoppingBag } from "react-icons/fa";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
            <FaShoppingBag />
            <h2>Shopify</h2>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <TiThMenu />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">DashBoard</NavLink>
            </li>
            <li>
              <NavLink to="/orders">Orders</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar