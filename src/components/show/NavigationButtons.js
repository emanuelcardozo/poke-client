function NavigationButtons({ id, history }) {

  function goTo(newId){
    history.push(`/pokemon/${newId}`)
    window.scrollTo(0, 0);
  }

  return(
    <div className="row">
      <div className="col-3">
        <button
          className="btn poke-button prev"
          onClick={ (ev) => goTo(id-1) }>
          Previous
        </button>
      </div>
      <div className="col-6">
      </div>
      <div className="col-3">
        <button
          className="btn poke-button next"
          onClick={ (ev) => goTo(id+1) }>
          Next
        </button>
      </div>
    </div>
  )
}

export default NavigationButtons;
