import { ProgressBar } from "react-bootstrap"

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
              <label>{ key }</label>
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
