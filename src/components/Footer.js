import Language from './footer/Language'
import FollowMe from './footer/FollowMe'
import "../assets/stylesheets/footer.css"

function Footer(props) {
  return(
    <footer>
      <div className="row">
        <div className="col-sm-4">
        </div>
        <Language {...props}/>
        <FollowMe {...props}/>
      </div>
      <div className="icons-provider">
        Icons designed
        by <a href="https://www.freepik.com" title="Freepik">
        Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">
        www.flaticon.es</a>
      </div>
    </footer>
  )
}

export default Footer;
