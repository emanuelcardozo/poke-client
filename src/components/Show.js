import API from "../api/index.js"
import React, { useState, useEffect } from "react"
import utils from "../lib/utils"
import Images from "./show/Images"
import Types from "./show/Types"
import Info from "./show/Info"
import NavigationButtons from "./show/NavigationButtons"
import Stats from "./show/Stats"
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

  if(utils.isEmpty(pokemon)) return <Loading />

  return(
    <React.Fragment>
      <NavigationButtons id={ id } history={ history }>
        <h3 className="poke-name" >{ pokemon.name }</h3>
      </ NavigationButtons>
      <div className="row">
        <div className="col-md-6">
          <div className="container shadow_container images_container">
            <Images sprites={ pokemon.sprites } />
            <Types types={ pokemon.types } />
          </div>
        </div>
        <Stats stats={ pokemon.stats } />
      </div>
      <div className="row">
        <Info pokemon={ pokemon } />
      </div>
    </React.Fragment>
  )
}

export default Show;
