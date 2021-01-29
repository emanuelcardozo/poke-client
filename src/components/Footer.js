import Language from './footer/Language'
import FollowMe from './footer/FollowMe'
import "../assets/stylesheets/footer.css"


function Footer({ translater }) {
  return(
    <footer>
      <div className="row">
        <div className="col-sm-4">
        </div>
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
