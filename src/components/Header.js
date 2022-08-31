import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";


export function Header() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" id="menu">
      <LinkContainer to="/">
        <Navbar.Brand>Sara Bergström</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbarCollapse" />

      <Navbar.Collapse id='navbarCollapse'>
        <Nav className="ml-auto" as="ul">
          <Nav.Item as="li">
            <Nav.Link as={NavLink} to="/cv">CV</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={NavLink} to="/omsara">Om Sara</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={NavLink} to="/projekt">Projekt</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


{/* <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
<a className="navbar-brand">Sara Bergström</a>
<button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
<span className='navbar-toggler-icon'></span>
</button>
<div className="collapse navbar-collapse" id='navbarCollapse'>
<ul className="navbar-nav ml-auto">
  <li className='navbar-item'>
    <a href='#cv' className='nav-link'>CV</a>
  </li>
  <li className='navbar-item'>
    <a href='#' className='nav-link'>Om Sara</a>
  </li>
  <li className='navbar-item'>
    <a href='#' className='nav-link'>Tidigare projekt</a>
  </li>
</ul>
</div>
</nav> */}