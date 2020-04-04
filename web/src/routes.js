import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NewOng from "./pages/NewOng";
import NewIncident from "./pages/NewIncident";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={NewOng} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/incidents/new" component={NewIncident} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
