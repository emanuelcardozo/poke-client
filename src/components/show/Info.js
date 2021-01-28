import Container from "../utils/Container"

function Info({ pokemon }) {
  return(
    <Container className="info_container">
      <h3>Info:</h3>
      <p>{ `Height: ${pokemon.height}` }</p>
      <p>{ `Weight: ${pokemon.weight}` }</p>
      <p>{ `Base XP: ${pokemon.base_experience}` }</p>
    </Container>
  )
}

export default Info;
