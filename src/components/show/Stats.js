import { ProgressBar } from "react-bootstrap"
import heart from "../../assets/svgs/heart.svg"
import helmet from "../../assets/svgs/helmet.svg"
import biceps from "../../assets/svgs/biceps.svg"
import shield from "../../assets/svgs/shield.svg"
import sword from "../../assets/svgs/sword.svg"
import speed from "../../assets/svgs/speed.svg"

const icons = {
  hp: heart,
  defense: helmet,
  attack: biceps,
  special_attack: sword,
  special_defense: shield,
  speed
}

function Stats({ stats }) {

  return(
    <div className="stats col-md-6">
      <div className="container shadow_container stats_container">
      <h3>Stats</h3>
      {
        stats.map((stat, i) => {
          const value = stat.base_stat
          const key = stat.stat.name

          return(
            <div key={i} className="progress_stat">
              <label>{ key } <img className="stat_icon" src={ icons[key.replace('-', '_')] }/></label>
              <ProgressBar now={ value/2.25 } label={`${value}`} variant={ 'danger' } />
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Stats;
