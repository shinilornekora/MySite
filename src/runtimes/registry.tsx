import React from "react";
import { AppManifest } from "../data/apps";
import IframeStage from "./IframeStage";
import MelentiyStage from "./MelentiyStage";
import MissingModule from "./MissingModule";
import PulseStage from "./PulseStage";

const natives: { [key: string]: React.ComponentType } = {
  melentiy: MelentiyStage,
  pulse: PulseStage,
};

type RegistryProps = {
  app: AppManifest;
};

const Registry = ({ app }: RegistryProps) => {
  if (app.status !== "live") {
    return <MissingModule id={app.moduleId} />;
  }
  if (app.runtime === "iframe") {
    return <IframeStage app={app} />;
  }
  const Native = natives[app.moduleId];
  if (!Native) {
    return <MissingModule id={app.moduleId} />;
  }
  return <Native />;
};

export default Registry;
