import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = (
    <Switch>
      <Route exact path="/" component={ Home } />
      {/* <Route component={ NotFound404 } /> */}
    </Switch>
);

export default AppRoutes;