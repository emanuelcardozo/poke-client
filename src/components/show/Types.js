import React from "react"

function Types({ types }) {

  return(
    <div className="row without_margin">
      {
        types.map((obj, i) => {
          const typeName = obj.type.name
          return(
            <div key={ i } className={"poke-type " + typeName }>
              { typeName }
            </div>
          )
        })
      }
    </div>
  )
}

export default Types;
