// import "./topbar.scss"


// export default function Topbar() {
//   return (
//     <div className="topbar active">
//       <div className="wrapper">
//         <div className="left">
//           <a href="#intro" className="logo">Classroom Management</a>  
//           <div className="itemContainer">
//           <i class="fas fa-clock"></i>
//           </div>
//         </div>
//         <div className="right">
//           <div className="hamburger">
//             <span className="line1"></span>
//             <span className="line2"></span>
//             <span className="line3"></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import React from "react";
import "./topbar.scss"

export default function Topbar(){
    return(
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Classroom Management</a>
                </div>
                <div className="right">

                    <a href="#contact" style={{'text-decoration': 'none', color: 'inherit'}}><button className="btn Contact">Contact</button></a>

                    <a href="#intro2" style={{'text-decoration': 'none', color: 'inherit'}}><button className="btn Features">Features</button></a>

                    <a href="#howto" style={{'text-decoration': 'none', color: 'inherit'}}><button className="btn Howto">How to</button></a>

                    <a href="#signup" style={{'text-decoration': 'none', color: 'inherit'}}><button className="btn Signup">Login/Sign up</button></a>

                    {/* <a href="#signupteacher" style={{'text-decoration': 'none', color: 'inherit'}}><button className="btn Features">SignUppp</button></a>
                    <button className="btn HowTo">How To</button> */}
                </div>
            </div>
        </div>
    )
}