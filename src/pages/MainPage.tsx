import "./MainPage.scss";
import React, { useEffect, useState } from "react";
import ButtonSolid from "../components/Buttons/ButtonSolid";
import { useHistory } from "react-router-dom";

interface Props {}
const MainPage: React.FC<Props> = (props) => {
  const history = useHistory();

  return (
    <div className="main-page">
      <ButtonSolid size="large" onClick={() => history.push("/game")}>
        Start
      </ButtonSolid>
    </div>
  );
};

export default MainPage;
