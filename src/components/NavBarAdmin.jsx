import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import {LinkContainer} from 'react-router-bootstrap';

export default class NavbarAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {

    var navStyle = {
      color: 'black'
    }

    var navBarStyle = {
      color: '#FFA07A',
      fontSize: '18pt'
    }

    var redirectPath = this.state.redirectPath;
    console.log(this.state);
    console.log(redirectPath);
    if (redirectPath === "Trainer") {
      return <Redirect to="/Trainer" />;
    }
    if (redirectPath === "Trainee") {
      return <Redirect to="/Trainee" />;
    }

    return (
      <div class="p-3 mb-2 bg-dark text-white" className="NavBarMain" style={navBarStyle}>
        <Navbar color="blue-grey lighten-5" expand="md" scrolling style={navBarStyle}> 
          
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem>
                <NavLink to="/AddUser">Add User</NavLink>
              </NavItem>
            </NavbarNav>

            <NavbarNav center>
                        <NavbarBrand href="/">
                        <div style={navStyle}><strong>CV Wonder</strong></div>
            </NavbarBrand></NavbarNav>

            <NavbarNav right>
              <NavItem>
                <NavLink to="/Contact">Contact</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/"> Logout </NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
