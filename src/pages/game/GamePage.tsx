import "./GamePage.scss";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ButtonLine from "components/Buttons/ButtonLine";

interface Props {}
const GamePage: React.FC<Props> = (props) => {
  const history = useHistory();

  return (
    <div className="game-page">
      <ButtonLine
        className="game-page-button"
        size="large"
        onClick={() => history.push("/game/play")}
      >
        Play
      </ButtonLine>
      <ButtonLine
        className="game-page-button"
        size="large"
        onClick={() => history.push("/game/create")}
      >
        Create
      </ButtonLine>
    </div>
  );
};

export default GamePage;
