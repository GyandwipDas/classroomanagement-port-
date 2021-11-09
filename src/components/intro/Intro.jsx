import "./intro.scss"
import webdev from "./webdev.svg"

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={webdev} alt="hi" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Make sure</h2>
          <h2>you’re never</h2>
          <h2>late for a</h2>
          <h2>class again!</h2>
        </div>
      </div>
    </div>
  )
}
