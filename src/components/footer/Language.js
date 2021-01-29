import { useState } from "react"

const languages = [ "SPA", "ENG" ]

function Language() {

  const [ language, setLanguage ] = useState("ENG")

  return(
    <div className="col-sm-4 language_container">
      <label>Choose your language:</label><br/>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        {
          languages.map((lan, i)=>{
            const checked = language == lan
            const _class = "btn btn-secondary" + (checked ? " active" : "")

            return(
              <label class={ _class } key={ i } onClick={ ev => setLanguage(lan) }>
                <input type="radio" name="options" id="option1" autocomplete="off" checked={ checked }/>
                { lan }
              </label>
            )
          })
        }
      </div>
    </div>
  )
}

export default Language;
