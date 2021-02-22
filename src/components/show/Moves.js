import Container from "../utils/Container"
import MovesTable from "./MovesTable"
import { useContext } from 'react'
import { TranslaterContext } from '../context/Translater';

function Moves({ moves }) {
  const translater = useContext(TranslaterContext)[0]

  return(
    <Container className="moves_container">
      <h3>{ translater.moves }</h3>
      { !!moves.length && <MovesTable moves={ moves } /> }
      { !moves.length &&
        <p className="no_info">{ translater.no_moves }</p>
      }
    </Container>
  )
}

export default Moves;
