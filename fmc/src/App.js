import "./App.css";
// import Banner from "./Componenets/Banner/Banner";
// import Home from "./Componenets/Home/Home";
// import Section2 from "./Componenets/Section2/Section2";
// import Footer from "./Componenets/Footer/Footer";
// import Section3 from "./Componenets/Section3/Section3";
import LandingPage from "./Componenets/LandingPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage1 from "./Componenets/LandingPage1/LandingPage1/LandingPage1";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route exact path="/landingpage1">
            <LandingPage1></LandingPage1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
