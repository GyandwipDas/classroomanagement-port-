import React from 'react'
import DropDown from 'react-dropdown';
import 'react-dropdown/style.css'
import ReactDom from 'react-dom';
import './schedule.scss'
import schedule from './schedule.svg'

function Schedule() {
  return (
    <div className="schedule" id="schedule">
      <div className="left">
                <h1>Schedule a Session</h1>
                <form class="schedule-form" onSubmit>
                    <span><label htmlFor="SName">Session Name</label>
                    <input type="text" placeholder="Session Name" required/><br /></span>
                    <span><label htmlFor="semester">Class/semester</label>
                    <input type="text" placeholder="Class/semester" required/><br /></span>
                    <span><label htmlFor="Section">Section</label>
                    <input type="text" placeholder="Section" required/><br /></span>
                    <span><label htmlFor="TimeSlot">Time Slot</label>
                    <select className="Time">
                      <option selected value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="4">5</option>
                      <option value="4">6</option>
                      <option value="4">7</option>
                    </select><br /></span>
                    <button className="submit">Schedule</button>
                    {/* <p class="message1"><p>Sign Up as a Teacher instead?</p><a href="#signupteacher">Click here!</a></p> */}
                </form>
      </div>
      <div className="right">
                <img className="vector" src={schedule} alt="vector"/>
      </div>
    </div>
  )
}

export default Schedule
