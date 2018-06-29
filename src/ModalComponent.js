import React from 'react';
import {   Modal, 
  ModalHeader,
  ModalBody,
  ModalFooter,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button } from 'reactstrap';
import { HashRouter, Route, Switch } from "react-router-dom";
import {  Link, LinkContainer } from "react-router-bootstrap";
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Home from './Home';
import Products from './Products';
import About from './About';
import Contact from './Contact';

class ModalComponent extends React.Component {
  render() {
    return (
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact="true" to="/">Home</NavLink></li>
            <li><NavLink to="/products">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/products" component={Products}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
    );
  }
}

export default ModalComponent;