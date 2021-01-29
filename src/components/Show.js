import API from "../api/index.js"
import React, { useState, useEffect } from "react"
import utils from "../lib/utils"
import Images from "./show/Images"
import Types from "./show/Types"
import Info from "./show/Info"
import Moves from "./show/Moves"
import NavigationButtons from "./show/NavigationButtons"
import Stats from "./show/Stats"
import Loading from "./utils/Loading"
import Container from "./utils/Container"
import "../assets/stylesheets/show.css"


function Show({ match, history, translater }) {
  const id = parseInt( match.params.id )
  const [ pokemon, setPokemon ] = useState({});
  const setLoading = () => {
    setPokemon({})
  }

  useEffect(() => {
    API.getPokemon(id)
      .then( response => {
          setPokemon(response)
      }).catch( e => {
        history.push("/error")
      })
  }, [id, history])

  if(utils.isEmpty(pokemon)) return <Loading translater={ translater } />

  return(
    <div className="col-md-8 main_content">
      <NavigationButtons id={ id } history={ history } onClick={ setLoading } >
        <h3 className="poke-name" >{ pokemon.name }</h3>
      </ NavigationButtons>
      <div className="row">
        <Container className="images_container">
          <Images sprites={ pokemon.sprites } />
          <Types types={ pokemon.types } />
        </Container>
        <Stats stats={ pokemon.stats } translater={ translater }/>
      </div>
      <div className="row">
        <Info pokemon={ pokemon } translater={ translater }/>
        <Moves moves={ pokemon.moves } translater={ translater } />
      </div>
    </div>
  )
}

export default Show;
