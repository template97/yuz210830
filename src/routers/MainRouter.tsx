import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./MainRouter.css";

const MainRouter: React.FC = () => {
  return (
    <>
      <div id="layout" className="notranslate">
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </div>
    </>
  );
};

export default MainRouter;
