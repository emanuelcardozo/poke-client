import "../assets/stylesheets/error.css"
import { useContext } from 'react'
import { TranslaterContext } from './context/Translater';

function Error() {
  const translater = useContext(TranslaterContext)[0]

  return(
    <div className="col-md-8 error_container shadow_container">
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
            <a href="/pokemons">{ translater.get_back }</a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Error;
