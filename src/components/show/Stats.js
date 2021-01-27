import { ProgressBar } from "react-bootstrap"
// return <p>{ `${ stat.stat.name }: ${stat.base_stat}` }</p>
function Stats({ stats }) {
  return(
    <div className="stats col-md-6">
      <div className="container">
      {
        stats.map((stat, i) => {
          const value = stat.base_stat

          return(
            <div key={i} className="progress_stat">
              <label>{ stat.stat.name }</label>
              <ProgressBar now={ value/2.25 } label={`${value}`} />
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Stats;
