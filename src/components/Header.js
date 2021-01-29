import "../assets/stylesheets/header.css"
import NavBar from "./header/NavBar"
import Logo from "./header/Logo"
import { withRouter } from 'react-router-dom'

const NavBarWithRouter = withRouter(NavBar)


function Header(props) {
  return(
    <header className="row header">
      <Logo />
      <NavBarWithRouter />
    </header>
  )
}

export default Header;
