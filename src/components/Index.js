import API from "../api/index.js"
import React, { useState, useEffect } from "react"
import Paginator from "./utils/Paginator"
import List from "./index/List"

function Index({ location, history, translater }) {
  const { search } = location;
  const pageString = search.split("page=")[1];
  const page = parseInt(pageString || 1);
  const [ state, setState ] = useState({ pokemons: [], count: 0 });

  useEffect(() => {
    API.getPokemons(page)
      .then( response => {
        if( response.results.length === 0 )
          throw { type: "error", description: "Wrong Page"}

        setState({ pokemons: response.results, count: response.count })
      }).catch( e => {
        history.push("/?page=1")
      })
  }, [page])

  const handleClick = (page)=>{
    setState({ ...state, pokemons: [] })
    history.push("?page=" + page)
  }

  return(
    <div className="col-md-8 index_container">
      <div className="container shadow_container">
        <label className="text">{ translater.choose_pokemon }</label>
        <List pokemons={ state.pokemons } translater={ translater } />
      </div>
      <Paginator handleClick={ handleClick } items={ state.count } currentPage={ page } itemsPerPage={ 5 } />
    </div>
  )
}

export default Index;
