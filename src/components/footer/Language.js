import actions from "../../redux/actions"
import { getLanguage } from "../../redux/selectors"
import { connect } from "react-redux";
import { useContext } from 'react'
import { TranslaterContext } from '../context/Translater';
import translations from "../../settings/translater"


const languages = [ 
  { label: "ESP", name: "español"}, 
  { label: "ENG", name: "english"}
]

function Language() {
  const [ translater, setTranslater ] = useContext(TranslaterContext)
  
  return(
    <div className="col-sm-4 language_container">
      <label>{ translater.choose_your_language }</label><br/>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        {
          languages.map((lan, i)=>{
            const checked = translater.language === lan.name
            const _class = "btn btn-secondary" + (checked ? " active" : "")

            return(
              <label className={ _class } key={ i }>
                <input type="radio" name="options" id="option1" autoComplete="off" onChange={ ev => setTranslater(translations[lan.label]) } checked={ checked }/>
                { lan.label }
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
