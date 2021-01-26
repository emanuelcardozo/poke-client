import React from "react"
import utils from "../../lib/utils"

function Images({ sprites }){
  const images = utils.getAllValuesFrom(sprites)

  return(
    <React.Fragment>
    {
      images.map((image, i) => {
        return <img src={image[1]} alt={image[0]} key={ i } />
      })
    }
    </React.Fragment>
  )
}

export default Images;
