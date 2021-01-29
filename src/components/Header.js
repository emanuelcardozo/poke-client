import "../assets/stylesheets/header.css"
import NavBar from "./header/NavBar"
import Logo from "./header/Logo"
import { withRouter } from 'react-router-dom'

const NavBarWithRouter = withRouter(NavBar)


function Header({ translater }) {
  return(
    <header className="row header">
      <Logo translater={ translater }/>
      <NavBarWithRouter translater={ translater } />
    </header>
  )
}

export default Header;
