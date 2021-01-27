import React from "react"
import { Link } from "react-router-dom"
import Loading from "../utils/Loading"

function List({ pokemons }) {

  if(!pokemons.length)
    return <Loading />

  return(
    <div className="list">
    { pokemons.map((pokemon, i)=>{
      const id = pokemon.url.split("pokemon/")[1].replace("/", "")

      return(
        <Link key={ i } className="card" style={{ animationDelay: `${ 0.2*i }s` }} to={ `/pokemon/${ id }` }>
          <div className="card-body">
            {pokemon.name}
          </div>
        </Link>
      )
    }) }
    </div>
  )
}

export default List;
