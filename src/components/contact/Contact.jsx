import './contact.scss'
import contact from'./contact.svg'
import React, { useState } from "react";

export default function Contact() {
  const [message,setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="imgContainer">
        <img src={contact} alt="Contact us" />
        </div>
      </div>
      <div className="right">
        <h2>Contact us!</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send!</button>
          {message && <span>Thanks! We will get back ASAP!</span>}
        </form>
      </div>
    </div>
  )
}
