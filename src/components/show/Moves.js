import Container from "../utils/Container"
import MovesTable from "./MovesTable"

function Moves({ moves }) {

  return(
    <Container className="moves_container">
      <h3>Moves</h3>
      { !!moves.length && <MovesTable moves={ moves } /> }
      { !moves.length &&
        <p className="no_info">Sorry, we don't have information about this pokemon.</p>
      }
    </Container>
  )
}

export default Moves;
