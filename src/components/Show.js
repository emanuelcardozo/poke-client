import API from "../api/index.js"
import { useState, useEffect } from "react"
import utils from "../lib/utils"
import Carousel from "./show/Carousel"
import Loading from "./utils/Loading"
import "../assets/stylesheets/show.css"


function Show({ match, history }) {
  const { id } = match.params
  const [ pokemon, setPokemon ] = useState({});

  useEffect(() => {
    API.getPokemon(id)
      .then( response => {
          setPokemon(response)
      }).catch( e => {
        history.push("/error")
      })
  }, [id])

  if(utils.isEmpty(pokemon)) return <Loading />

  return(
    <div className="container">
      <div className="row">
        <div className="offset-3 col-md-6">
          <h3>{ utils.capitalize( pokemon.name ) }</h3>
          <p>{ `Height: ${pokemon.height}` }</p>
          <p>{ `Weight: ${pokemon.weight}` }</p>
          <p>{ `Base XP: ${pokemon.base_experience}` }</p>
          <Carousel sprites={ pokemon.sprites } />
        </div>
      </div>
    </div>
  )
}

export default Show;
