import React from "react";
import "./App.css";
import Weather from "./containers/Weather";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Forecast from "./containers/Forecast";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/:id" component={Forecast} />
                <Route path="/" component={Weather} />
            </Switch>
        </Router>
    );
}

export default App;
