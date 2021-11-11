import React from "react";
import "./signup.scss"
import signupvector from './signupvector.svg';

export default function Signup(){
    return(
        <div className="signup" id="signup">
            <div className="left">
                <h1>Sign Up</h1>
                <form class="signup-form" onSubmit>
                    <span><label htmlFor="Email">Email</label>
                    <input type="text" placeholder="Email" required/><br /></span>
                    <span><label htmlFor="Password">Password</label>
                    <input type="password" placeholder="Password" required/><br /></span>
                    <span><label htmlFor="Section">Section</label>
                    <input type="text" placeholder="Section" required/><br /></span>
                    <span><label htmlFor="Semester">Semester</label>
                    <input type="text" placeholder="Semester" required/><br /></span>
                    <button className="submit">Sign Up</button>
                    {/* <p class="message1"><p>Sign Up as a Teacher instead?</p><a href="#signupteacher">Click here!</a></p> */}
                    <p class="message1">Sign Up as a Teacher instead?<a href="#signupteacher"> Click here!</a></p>
                    <p class="message2">Have an account?<a href="#signin-container"> Sign In!</a></p>
                </form>
            </div>
            <div className="right" style={{width: '100%'}}>
                <img className="vector" src={signupvector} alt="vector" style={{float: 'right'}}/>
            </div>
        </div>
    )
}