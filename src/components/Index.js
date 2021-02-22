import API from "../api/index.js"
import React, { useState, useEffect } from "react"
import Paginator from "./utils/Paginator"
import List from "./index/List"
import Utils from "../lib/utils"
import { useContext } from 'react'
import { TranslaterContext } from './context/Translater';

let pokemonsCount = 0

function usePokemons(page){
  const [ pokemons, setPokemons ] = useState([])

  useEffect(() => {
    API.getPokemons(page)
      .then( response => {
        if( response.results.length === 0 )
          throw new Error("Wrong Page");

        setPokemons( response.results )
        pokemonsCount = response.count

      }).catch( e => {
        console.log(e);
      })

    return () => setPokemons([])
  }, [page])

  return pokemons
}

function Index({ location, history }) {
  const page = Utils.getPage(history)  
  const pokemons = usePokemons(page);
  const translater = useContext(TranslaterContext)[0]


  return(
    <div className="col-md-8 index_container">
      <div className="container shadow_container">
        <label className="text">{ translater.choose_pokemon }</label>
        <List pokemons={ pokemons } />
      </div>
      <Paginator history={ history } items={ pokemonsCount } currentPage={ page } itemsPerPage={ 5 } />
    </div>
  )
}

export default Index;
