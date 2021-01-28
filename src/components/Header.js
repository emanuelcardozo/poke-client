import "../assets/stylesheets/header.css"
import NavBar from "./header/NavBar"
import Logo from "./header/Logo"

function Header() {
  return(
    <header className="row header">
      <Logo />
      <NavBar />
    </header>
  )
}

export default Header;
