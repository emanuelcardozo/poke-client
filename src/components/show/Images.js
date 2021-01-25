import React from "react"
import utils from "../../lib/utils"

function Images(props){
  const { sprites } = props

  return(
    <React.Fragment>
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
