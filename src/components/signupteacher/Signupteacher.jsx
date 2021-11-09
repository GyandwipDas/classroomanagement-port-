import React from "react";
import "./signupteacher.scss"
import signupvector from './signupvector.svg';

export default function Signupteacher(){
    return(
        <div className="signupteacher" id ="signupteacher">
            <div className="left">
                <h1>Sign Up</h1>
                <form class="signup-form" onSubmit>
                    <span><label htmlFor="Email">Email</label>
                    <input type="text" placeholder="Email" required/><br /></span>
                    <span><label htmlFor="Password">Password</label>
                    <input type="password" placeholder="Password" required/><br /></span>
                    <button className="submit">Sign Up</button>
                    <p class="message1"><a href>Sign Up as a Student instead?</a></p>
                    <p class="message2">Have an account?<a href="#signin-container"> Sign In!</a></p>
                </form>
            </div>
            <div className="right" style={{width: '100%'}}>
                <img className="vector" src={signupvector} alt="vector" style={{float: 'right'}}/>
            </div>
        </div>
    )
}