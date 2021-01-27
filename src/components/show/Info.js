function Info({ pokemon }) {
  return(
    <div className="col-md-6">
      <p>{ `Height: ${pokemon.height}` }</p>
      <p>{ `Weight: ${pokemon.weight}` }</p>
      <p>{ `Base XP: ${pokemon.base_experience}` }</p>
    </div>
  )
}

export default Info;
