import { useContext } from 'react'
import { TranslaterContext } from '../context/Translater';

function MovesTable({ moves }) {
  const translater = useContext(TranslaterContext)[0]

  return(
    <table className="table table-hover moves_table">
      <thead>
        <tr>
          <th scope="col" className="move_index"></th>
          <th scope="col">{ translater.name }</th>
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
  )
}

export default MovesTable;
