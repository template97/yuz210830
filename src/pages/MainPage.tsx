import "./MainPage.scss";
import React, { useEffect, useState } from "react";
import ButtonSolid from "../components/Buttons/ButtonSolid";

interface Props {}
const MainPage: React.FC<Props> = (props) => {
  return (
    <>
      <ButtonSolid size="large">Start</ButtonSolid>
    </>
  );
};

export default MainPage;
