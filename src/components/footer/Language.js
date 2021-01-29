import actions from "../../redux/actions"
import { getLanguage } from "../../redux/selectors"
import { connect } from "react-redux";

const languages = [ "ESP", "ENG" ]

function Language({ translater, language, setLanguage }) {
  return(
    <div className="col-sm-4 language_container">
      <label>{ translater.choose_your_language }</label><br/>
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
  getLanguage,
  { setLanguage: actions.setLanguage }
)(Language);
