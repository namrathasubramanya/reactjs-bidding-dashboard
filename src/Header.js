import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Nav, NavItem, Navbar, NavbarBrand } from 'react-bootstrap';

const Header = () => (
<Navbar inverse collapseOnSelect style={{display:"flex", flexDirection:"row"}}>
    <Navbar.Header >
          	<Navbar.Brand className="brand">
            	Online Bidding Dashboard
          	</Navbar.Brand>

      	<Nav style={{display:"flex", flexDirection:"row"}} >
            <NavItem eventKey={1} href="/">Home</NavItem>
            <NavItem eventKey={2} href="/products">Products</NavItem>
            <NavItem eventKey={3} href="/contact">Contact</NavItem>
            <NavItem eventKey={4} href="/about">About</NavItem>
      	</Nav>
    </Navbar.Header>
</Navbar>

)

export default Header