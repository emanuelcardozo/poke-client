import { Link } from "react-router-dom"

function FooterLinks({ translater }) {
  const links = [
    { label: translater.home, to: "/" },
    { label: translater.all_pokemons, to: "/pokemons" },
    { label: translater.about_us, to: "/about_us" },
    { label: translater.contact_us, to: "/contact_us" },
  ]

  return(
    <div className="col-sm-4 links_container">
      {
        links.map((link, i)=>{
          return(
            <Link key={ i } to={ link.to }>
              { link.label }
            </Link>
          )
        })
      }
    </div>
  )
}

export default FooterLinks;
