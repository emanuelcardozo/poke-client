import React from "react"
import utils from "../../lib/utils"

function Images(props){
  const { sprites } = props
  const { front_default } = sprites.other.dream_world

  return(
    <React.Fragment>
    { front_default &&
      <img src={front_default} alt={"front_default"} /> }
    {
      Object.keys(sprites).map((key, i) => {
        const url = sprites[key];

        if(utils.isAString(url))
          return <img src={url} alt={key} key={ i } />
      })
    }
    </React.Fragment>
  )
}

export default Images;
