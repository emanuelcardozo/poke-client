import "../../assets/stylesheets/Loading.css"

function Loading({ translater }){
  return (
    <div className="center-on-page">
      <div className="pokeball">
        <div className="pokeball__button"></div>
      </div>
      <br />
      <h3 className="loading">{ translater.loading }</h3>
    </div>
  )
}

export default Loading;
