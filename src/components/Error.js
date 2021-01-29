import "../assets/stylesheets/error.css"

function Error({ translater }) {
  return(
    <div className="col-md-8 margin_auto">
      <div className="container">
        <div className="row">
          <div className="display-flex">
            <div className="four">4</div>
            <div className="pokeball rotating">
              <div className="pokeball__button"></div>
            </div>
            <div className="four">4</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5>{ translater.no_page }</h5>
            <h1>...</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <a href="/">{ translater.get_back }</a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Error;
