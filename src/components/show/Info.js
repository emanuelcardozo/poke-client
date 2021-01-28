import Container from "../utils/Container"

function Info({ pokemon }) {
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
            <label>Highest Stat</label><p>{pokemon.characteristic.highest_stat.name}</p>
          </div>
        </div>
        <div className="info_description">
          <label>Description</label><p>{pokemon.characteristic.descriptions[2].description}</p>
        </div>
      </div>
    </Container>
  )
}

export default Info;
