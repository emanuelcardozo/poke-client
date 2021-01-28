import "../assets/stylesheets/error.css"

function Error() {
  return(
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
          <h5>The page you were looking for was moved or doesn't exist.</h5>
          <h1>...</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h5>Let's get you back.</h5>
          <h1>...</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-3">
          <a href="/">Go Home</a>
        </div>
      </div>
    </div>
  )
};

export default Error;
