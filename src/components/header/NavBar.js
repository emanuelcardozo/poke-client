import { Navbar, Nav } from 'react-bootstrap'

function NavBar({ translater, location }) {

  const links = [
    { label: translater.home, to: "/" },
    { label: translater.all_pokemons, to: "/pokemons" },
    { label: translater.about_us, to: "/about_us" },
    { label: translater.contact_us, to: "/contact_us" },
    { label: translater.sign_in, to: "/sign_in", class: "nav-link-end" },
  ]

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
