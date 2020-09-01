import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import CreatePaletteContainer from "../pages/CreatePalette/CreatePaletteContainer";
import SolidColors from "../pages/SolidColors";
import GradientCreator from "../pages/GradientCreator/GradientCreator";
import GradientCreatorContainer from "../pages/GradientCreator/GradientCreatorContainer";


const AppRoutes = (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/create-palette" component={ CreatePaletteContainer } />
      <Route exact path="/create-palette/:palettes" component={ CreatePaletteContainer } />
      <Route exact path="/solid-colors" component={ SolidColors } />
      <Route exact path="/create-gradient" component={ GradientCreatorContainer } />
      <Route exact path="/create-gradient/:gradients" component={ GradientCreatorContainer } />
    </Switch>
);

export default AppRoutes;

