import API from "../api/index.js"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Loading from "./Loading"

function Index(props) {
  const { search } = props.location;
  const pageString = search.split("page=")[1];
  const page = parseInt(pageString || 1);
  const [ state, setState ] = useState({ pokemons: [], loading: true});

  useEffect(() => {
    API.getPokemons(page)
      .then( response => {
        setState({ pokemons: response.results, loading: false })
      }).catch( e => {
        console.log(e);
      })
  }, [page])

  const handleClick = (ev)=>{
    ev.preventDefault();
    setState({ ...state, loading: true })
    props.history.push("?page=" + (page+1))
  }

  if(state.loading) return ( <Loading /> )

  return(
    <div className="container">
      <div className="row">
        <div className="offset-3 col-md-6">
          { state.pokemons.map((pokemon, i)=>{
            const id = pokemon.url.split("pokemon/")[1].replace("/", "")

            return(
              <div key={ i } className="card">
                <div className="card-body">
                  <Link to={ `/pokemon/${ id }` }>{pokemon.name}</Link>
                </div>
              </div>
            )
          }) }
          <button onClick={ handleClick }>button</button>
        </div>
      </div>
    </div>
  )
}

export default Index;
