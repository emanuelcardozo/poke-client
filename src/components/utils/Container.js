function Container({ children, className }) {

  const _class = "container shadow_container " + className

  return(
    <div className="col-md-6">
      <div className={ _class }>
      { children }
      </div>
    </div>
  )
}

export default Container
