import back from "../../assets/svgs/back.svg"

function NavigationButtons({ id, history, children }) {

  function goTo(newId){
    history.push(`/pokemon/${newId}`)
  }

  return(
    <div className="row navigation_container">
      <div className="col-2">
        <button
          className="btn poke-button prev"
          onClick={ (ev) => goTo(id-1) }>
            <img src={ back } alt="back" />
        </button>
      </div>
      <div className="col-8">
        { children }
      </div>
      <div className="col-2">
        <button
          className="btn poke-button next"
          onClick={ (ev) => goTo(id+1) }>
          <img src={ back } alt="next" />
        </button>
      </div>
    </div>
  )
}

export default NavigationButtons;
