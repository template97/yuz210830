import MainHeader from "components/Header/MainHeader";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import GameRouter from "./GameRouter";
import "./MainRouter.scss";

const MainRouter: React.FC = () => {
  return (
    <div className="main-layout">
      <MainHeader />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/game">
          <GameRouter />
        </Route>
      </Switch>
    </div>
  );
};

export default MainRouter;
