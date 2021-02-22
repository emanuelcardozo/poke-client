import "../../assets/stylesheets/Loading.css"
import { useContext } from 'react'
import { TranslaterContext } from '../context/Translater';

function Loading(){
  const translater = useContext(TranslaterContext)[0]

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
