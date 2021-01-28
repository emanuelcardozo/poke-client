import Container from "../utils/Container"

function Info({ pokemon }) {

  const { characteristic } = pokemon
  let highestStat = "Unknown"
  let description = "Unknown"

  if(characteristic){
    highestStat = characteristic.highest_stat.name
    description = characteristic.descriptions[2].description
  }

  return(
    <Container className="info_container">
      <h3>General</h3>
      <div className="info_body">
        <div className="row">
          <div className="col-md-6">
            <label>Height</label><p>{pokemon.height}</p>
            <label>Base XP</label><p>{pokemon.base_experience}</p>
          </div>
          <div className="col-md-6">
            <label>Weight</label><p>{pokemon.weight}</p>
            <label>Highest Stat</label><p>{ highestStat }</p>
          </div>
        </div>
        <div className="info_description">
          <label>Description</label><p>{ description }</p>
        </div>
      </div>
    </Container>
  )
}

export default Info;
