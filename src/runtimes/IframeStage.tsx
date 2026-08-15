import React, { useState } from "react";
import { AppManifest } from "../data/apps";

type IframeStageProps = {
  app: AppManifest;
};

const IframeStage = ({ app }: IframeStageProps) => {
  const [phase, setPhase] = useState("idle");

  if (!app.embedUrl) {
    return (
      <div className="empty-stage">
        <div>
          <span className={"orb orb--" + app.accent} aria-hidden="true" />
          <h2 className="page-title" style={{ margin: "18px 0 10px" }}>
            {app.name}
          </h2>
          <p className="muted">{app.description}</p>
          <div className="actions" style={{ justifyContent: "center" }}>
            <a className="btn neo-press" href={app.repo} target="_blank" rel="noreferrer">
              Репозиторий
              <span className="sr-only"> (новая вкладка)</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: "relative", height: "100%" }}>
      {phase !== "ready" ? (
        <div className="empty-stage" aria-live="polite">
          <p className="muted">{phase === "error" ? "Сцена не открылась" : "Открываю…"}</p>
        </div>
      ) : null}
      <iframe
        title={app.name}
        src={app.embedUrl}
        allow={app.allow || "fullscreen"}
        sandbox={app.sandbox || "allow-scripts allow-same-origin allow-forms"}
        allowFullScreen={true}
        aria-busy={phase !== "ready" && phase !== "error"}
        aria-hidden={phase !== "ready"}
        tabIndex={phase === "ready" ? 0 : -1}
        onLoad={() => setPhase("ready")}
        onError={() => setPhase("error")}
        style={{
          position: "absolute",
          inset: 0,
          opacity: phase === "ready" ? 1 : 0,
          pointerEvents: phase === "ready" ? "auto" : "none",
        }}
      />
    </div>
  );
};

export default IframeStage;
