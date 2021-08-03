import "./GamePage.scss";
import React, { useEffect, useState } from "react";
import ButtonSolid from "../components/Buttons/ButtonSolid";
import { useHistory } from "react-router-dom";

interface Props {}
const GamePage: React.FC<Props> = (props) => {
  const history = useHistory();

  return (
    <div className="game-page">
      <ButtonSolid size="large" onClick={() => history.push("/start")}>
        game
      </ButtonSolid>
    </div>
  );
};

export default GamePage;
