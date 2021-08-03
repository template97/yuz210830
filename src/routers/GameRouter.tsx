// import "./GameRouter.scss";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import CreateGamePage from "pages/game/CreateGamePage";
import GamePage from "pages/game/GamePage";

interface Props {}
const GameRouter: React.FC<Props> = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/game">
          <GamePage />
        </Route>
        <Route exact path="/game/create">
          <CreateGamePage />
        </Route>
      </Switch>
    </>
  );
};

export default GameRouter;
