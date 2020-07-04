import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import CreatePaletteContainer from "../pages/CreatePalette/CreatePaletteContainer";


const AppRoutes = (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/create-palette" component={ CreatePaletteContainer } />
      <Route exact path="/create-palette/:palettes" component={ CreatePaletteContainer } />
    </Switch>
);

export default AppRoutes;

