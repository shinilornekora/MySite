import React from "react";
import { MainPageCard } from "../../types";

const MainCard = ({
  description,
  staticPath,
  textSectionClassName,
  videoSectionClassName,
  blockClassName,
}: MainPageCard) => {
  return (
    <div className={blockClassName}>
      <div className={textSectionClassName}>{description}</div>
      <div className={videoSectionClassName}>
        <video src={staticPath}></video>
      </div>
    </div>
  );
};

export default MainCard;
