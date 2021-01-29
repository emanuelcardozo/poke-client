import actions from "../../redux/actions"
import { connect } from "react-redux";

const languages = [ "SPA", "ENG" ]

function Language({ language, setLanguage }) {

  return(
    <div className="col-sm-4 language_container">
      <label>Choose your language:</label><br/>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        {
          languages.map((lan, i)=>{
            const checked = language === lan
            const _class = "btn btn-secondary" + (checked ? " active" : "")

            return(
              <label className={ _class } key={ i }>
                <input type="radio" name="options" id="option1" autoComplete="off" onChange={ ev => setLanguage(lan) } checked={ checked }/>
                { lan }
              </label>
            )
          })
        }
      </div>
    </div>
  )
}

export default connect(
  null,
  { setLanguage: actions.setLanguage }
)(Language);
