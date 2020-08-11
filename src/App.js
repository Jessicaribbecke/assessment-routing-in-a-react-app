import React, { Component } from "react";
import Welcome from "./components/Welcome/Welcome";
import Clock from "./components/Clock/Clock";
import Contact from "./components/Contact/Contact";

import Navigation from "./components/Navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import WhompWhomp  from "./components/WhompWhomp/WhompWhomp";



class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Navigation />
        <Switch>
          <Route
          exact
          path="/welcome/:name"
          render={(props) => <Welcome {...props} name={props.match.params.name} />}
          />


        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Jessica" />}
        />

        <Route path = "/Clock" component = {Clock} />

        <Route path = "/Contact" component = {Contact} />

        <Route component = {WhompWhomp} />

        
        </Switch>
      </div> 
    );
  }
}
export default App;
