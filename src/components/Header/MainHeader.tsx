import "./MainHeader.scss";
import React, { useEffect, useState } from "react";
import ButtonGhost from "components/Buttons/ButtonGhost";
import { useHistory } from "react-router-dom";

interface Props {}
const MainHeader: React.FC<Props> = (props) => {
  const history = useHistory();

  return (
    <div className="main-header">
      <ButtonGhost size="medium" onClick={() => history.push("/")}>
        Home
      </ButtonGhost>
      <span>Developer: @usual_yuz</span>
    </div>
  );
};

export default MainHeader;
