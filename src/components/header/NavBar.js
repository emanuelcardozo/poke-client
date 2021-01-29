import { Navbar, Nav } from 'react-bootstrap'

const links = [
  { label: "Home", to: "/" },
  { label: "All Pokemons", to: "/pokemons" },
  { label: "About us", to: "/about_us" },
  { label: "Contact us", to: "/contact_us" },
  { label: "Sign in", to: "/sign_in", class: "nav-link-end" },
]

function NavBar({ location }) {

  return(
    <div className="col-sm-8">
      <Navbar expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          {
            links.map((link, i)=>{
              const active = location.pathname === link.to ? "active" : ""
              const _class = (link.class || "") + " "  + active

              return(
                <Nav.Link key={ i } href={ link.to } className={ _class }>
                  { link.label }
                </Nav.Link>
              )
            })
          }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;
