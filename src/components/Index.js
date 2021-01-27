import API from "../api/index.js"
import { useState, useEffect } from "react"
import Loading from "./utils/Loading"
import Paginator from "./utils/Paginator"
import List from "./index/List"

function Index({ location, history }) {
  const { search } = location;
  const pageString = search.split("page=")[1];
  const page = parseInt(pageString || 1);
  const [ state, setState ] = useState({ pokemons: [], count: 0, loading: true});

  useEffect(() => {
    API.getPokemons(page)
      .then( response => {
        if( response.results.length === 0 )
          throw { type: "error", description: "Wrong Page"}

        setState({ pokemons: response.results, count: response.count, loading: false })
      }).catch( e => {
        history.push("/?page=1")
      })
  }, [page])

  const handleClick = (page)=>{
    setState({ ...state, loading: true })
    history.push("?page=" + page)
  }

  let Component = null;

  if(state.loading)
    Component = Loading;
  else
    Component = List;

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-7 margin_auto">
          <div className="list-container">
            <h1>PokeList:</h1>
            <Component pokemons={ state.pokemons } />
          </div>
          <Paginator handleClick={ handleClick } items={ state.count } currentPage={ page } itemsPerPage={ 5 } />
        </div>
      </div>
    </div>
  )
}

export default Index;
