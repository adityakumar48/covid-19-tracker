import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Developer from "./components/Developer";
import IndiaCases from "./components/IndiaCases";
import CountriesCases from "./components/CountriesCases";
import SymptomsChecker from "./components/SymptomsChecker";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/symptomschecker" component={SymptomsChecker} />
        <Route path="/countriescases" component={CountriesCases} />
        <Route path="/indiacases" component={IndiaCases} />
        <Route path="/developer" component={Developer} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
