const API_URL = "https://pokeapi.co/api/v2/pokemon";
const ITEMS_PER_PAGE = 5;

const API = {
  getPokemons: (page) => {
    const req = new Request(`${ API_URL }?offset=${(page-1)* ITEMS_PER_PAGE }&limit=${ITEMS_PER_PAGE}`);
    return fetch(req)
      .then(res => {
        return res.json()
      })
  }
}

export default API;
