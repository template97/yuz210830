import GamePage from "pages/GamePage";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import "./MainRouter.scss";

const MainRouter: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/start">
          <GamePage />
        </Route>
      </Switch>
    </>
  );
};

export default MainRouter;
