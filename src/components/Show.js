import API from "../api/index.js"
import { useState, useEffect } from "react"
import utils from "../lib/utils"
import Carousel from "./show/Carousel"
import Types from "./show/Types"
import Info from "./show/Info"
import Loading from "./utils/Loading"
import "../assets/stylesheets/show.css"


function Show({ match, history }) {
  const id = parseInt( match.params.id )
  const [ pokemon, setPokemon ] = useState({});

  useEffect(() => {
    API.getPokemon(id)
      .then( response => {
          setPokemon(response)
      }).catch( e => {
        history.push("/error")
      })
  }, [id])

  function goTo(page){
    history.push(`/pokemon/${page}`)
  }

  if(utils.isEmpty(pokemon)) return <Loading />

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6 margin_auto">
          <div className="row">
            <div className="col-3">
              <button
                className="btn poke-button prev"
                onClick={ (ev) => goTo(id-1) }>
                Previous
              </button>
            </div>
            <div className="col-6">
              <h3>{ utils.capitalize( pokemon.name ) }</h3>
            </div>
            <div className="col-3">
              <button
                className="btn poke-button next"
                onClick={ (ev) => goTo(id+1) }>
                Next
              </button>
            </div>
          </div>
          <Carousel sprites={ pokemon.sprites } />
          <Types types={ pokemon.types } />
          <Info pokemon={ pokemon } />
        </div>
      </div>
    </div>
  )
}

export default Show;
