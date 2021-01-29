import Language from './footer/Language'
import FollowMe from './footer/FollowMe'
import FooterLinks from './footer/FooterLinks'
import "../assets/stylesheets/footer.css"
import { withRouter } from 'react-router-dom'

const FooterLinksWithRouter = withRouter(FooterLinks)


function Footer({ translater }) {
  return(
    <footer>
      <div className="row">
        <FooterLinksWithRouter translater={ translater } />
        <Language translater={ translater } />
        <FollowMe translater={ translater } />
      </div>
      <div className="icons-provider">
        { translater.icons_designed_by + " " }
        <a href="https://www.freepik.com" title="Freepik">
        Freepik</a> { translater.from } <a href="https://www.flaticon.es/" title="Flaticon">
        www.flaticon.es</a>
      </div>
    </footer>
  )
}

export default Footer;
