import React,{Component}  from 'react';
import { Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class Header extends Component{
    render()
    {
        return(
            <React.Fragment>
                <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">QuatraTech Solutions</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/About">Gallery</Link>
      <Link className="nav-link" to="/Contact">Contact</Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

            </React.Fragment>

        );
    }
       
}
export default Header;