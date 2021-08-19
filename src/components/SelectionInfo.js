import React from "react";
import { InfoContainer } from "./style/InfoContainer";

import lightbulb from "../imgs/light-bulb.png";

const SelectionInfo = () => {
  return (
    <InfoContainer>
      <div>
        <img src={lightbulb} alt=""></img>
      </div>
      <div>
        <p> Drag&Drop the Ships on the right Position</p>
        <p>Click on the Ship when placed to rotate</p>
      </div>
    </InfoContainer>
  );
};

export default SelectionInfo;
