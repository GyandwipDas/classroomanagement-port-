import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Intro2 from "./components/intro2/Intro2";
import Signin from "./components/signin/Signin";
import Signupteacher from "./components/signupteacher/Signupteacher";
import Signup from './components/signup/Signup';
import Contact from './components/contact/Contact';
import Schedule from './components/schedule/Schedule'
import "./app.scss";
import {BrowserRouter, Routes, Router, Route} from "react-router-dom";

export default function App() {
  return (
      // <Routes>
        <div className="app">
          <Topbar/>
          <div className="sections">
            <Intro/>
            <Intro2/>
            <Contact/>
            <Signin/>
            <Signup/>
            <Signupteacher/>
            <Schedule/>
            
            {/* <Route path="/home" component={Intro}></Route>
            <Route path="/features" component={Intro2}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/signupteacher" component={Signupteacher}></Route>
            <Route path="/schedule" component={Schedule}></Route>           */}

          </div>
        </div>
      // </Routes>
  )
}

// export default App;
