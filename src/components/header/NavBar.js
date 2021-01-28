import { Navbar, Nav } from 'react-bootstrap'

function NavBar() {

  return(
    <div className="col-sm-8">
      <Navbar expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">All Pokemons</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;
