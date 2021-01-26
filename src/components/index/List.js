import React from "react"
import { Link } from "react-router-dom"

function List({ pokemons }) {
  return(
    <div className="list-container">
      <h1>PokeList:</h1>
      <div className="list">
      { pokemons.map((pokemon, i)=>{
        const id = pokemon.url.split("pokemon/")[1].replace("/", "")

        return(
          <div key={ i } className="card">
            <div className="card-body">
              <Link to={ `/pokemon/${ id }` }>{pokemon.name}</Link>
            </div>
          </div>
        )
      }) }
      </div>
    </div>
  )
}

export default List;
