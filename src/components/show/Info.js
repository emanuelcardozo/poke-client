function Info({ pokemon }) {
  return(
    <div className="col-md-6">
      <div className="container shadow_container info_container">
        <h3>Info:</h3>
        <p>{ `Height: ${pokemon.height}` }</p>
        <p>{ `Weight: ${pokemon.weight}` }</p>
        <p>{ `Base XP: ${pokemon.base_experience}` }</p>
      </div>
    </div>
  )
}

export default Info;
