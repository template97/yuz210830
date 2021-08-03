import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./MainRouter.scss";

const MainRouter: React.FC = () => {
  return (
    <>
      <div id="layout" className="notranslate">
        <Switch>
          <Route exact path="/">
            hello
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default MainRouter;
