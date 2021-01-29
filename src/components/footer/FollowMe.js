import linkedin from "../../assets/svgs/linkedin.svg"
import github from "../../assets/svgs/github.svg"

function FollowMe() {
  return(
    <div className="col-sm-4 follow_me_container">
      <label>Follow me:</label><br/>
      <div className="icons">
        <a href="https://www.linkedin.com/in/emanuel-cardozo-359296114/">
          <img src={ linkedin } alt="linkedin" />
        </a>
        <a href="https://github.com/emanuelcardozo">
          <img src={ github } alt="github" />
        </a>
      </div>
    </div>
  )
}

export default FollowMe;
