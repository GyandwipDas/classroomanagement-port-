import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Intro2 from "./components/intro2/Intro2";
import Signin from "./components/signin/Signin";
import Signupteacher from "./components/signupteacher/Signupteacher";
import Signup from './components/signup/Signup';
import Contact from './components/contact/Contact'
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Intro2/>
        <Contact/>
        <Signin/>
        <Signup/>
        <Signupteacher/>

      </div>
    </div>
  );
}

export default App;
