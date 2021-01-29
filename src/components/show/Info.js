import Container from "../utils/Container"
import { getLanguage } from "../../redux/selectors"
import { connect } from "react-redux";

function Info({ pokemon, translater, language }) {

  const { characteristic } = pokemon
  let highestStat = translater.unknown
  let description = translater.unknown

  if(characteristic){
    highestStat = characteristic.highest_stat.name
    let index = language === "ESP" ? 1 : 2
    description = characteristic.descriptions[index].description
  }

  return(
    <Container className="info_container">
      <h3>General</h3>
      <div className="info_body">
        <div className="row">
          <div className="col-6">
            <label>{ translater.height }</label><p>{pokemon.height}</p>
            <label>{ translater.base_experience }</label><p>{pokemon.base_experience}</p>
          </div>
          <div className="col-6">
            <label>{ translater.weight }</label><p>{pokemon.weight}</p>
            <label>{ translater.highest_stat }</label><p>{ highestStat }</p>
          </div>
        </div>
        <div className="row info_description">
          <div className="col-12">
            <label>{ translater.description }</label><p>{ description }</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default connect(getLanguage)(Info);
