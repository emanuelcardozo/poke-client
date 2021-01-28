import Container from "../utils/Container"

function Moves({ moves }) {

  return(
    <Container className="moves_container">
      <h3>Moves</h3>
      <table className="table table-hover moves_table">
        <thead>
          <tr>
            <th scope="col" className="move_index"></th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
        {
          moves.map((move, i) => {
            return(
              <tr key={i}>
                <th scope="row" className="move_index">{ i + 1 }</th>
                <td>{ move.move.name }</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </Container>
  )
}

export default Moves;
