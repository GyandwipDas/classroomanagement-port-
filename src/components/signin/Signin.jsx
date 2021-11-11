import React from "react";
import "./signin.scss" 
import vector from './vector.svg';

export default function Signin(){
    return(
        <div className="signin-container" id = "signin-container">
            <div className="signin">
                <div className="left">
                    <h1>Sign In</h1>
                    <form class="signin-form" onSubmit>
                        <span><label htmlFor="Email">Email</label>
                        <input type="text" placeholder="Email" required/><br /></span>
                        <span><label htmlFor="Password">Password</label>
                        <input type="password" placeholder="Password" required/><br /></span>
                        <button className="submit">Sign In</button>
                        <p class="message">Don't have an accout?<a href="#signup">Sign Up!</a></p>
                    </form>
                </div>
                <div className="right" style={{width: '100%'}}>
                    <img className="vector" src={vector} alt="vector" style={{float: 'right'}}/>
                </div>
            </div>
        </div>
    )
}