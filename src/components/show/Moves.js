import Container from "../utils/Container"
import MovesTable from "./MovesTable"

function Moves({ moves, translater }) {

  return(
    <Container className="moves_container">
      <h3>{ translater.moves }</h3>
      { !!moves.length && <MovesTable moves={ moves } translater={ translater } /> }
      { !moves.length &&
        <p className="no_info">{ translater.no_moves }</p>
      }
    </Container>
  )
}

export default Moves;
