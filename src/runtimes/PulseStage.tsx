import React, { useEffect, useRef, useState } from "react";

const INTERVAL = 750;
const WINDOW = 140;

const PulseStage = () => {
  const [combo, setCombo] = useState(0);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [flash, setFlash] = useState("");
  const origin = useRef(Date.now());
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState === "visible") {
        const elapsed = Date.now() - origin.current;
        setPhase(-(elapsed % INTERVAL));
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const tap = () => {
    const elapsed = Date.now() - origin.current;
    const nearest = Math.round(elapsed / INTERVAL) * INTERVAL;
    const delta = Math.abs(elapsed - nearest);
    if (delta <= WINDOW) {
      setHits((n) => n + 1);
      setCombo((n) => n + 1);
      setFlash("в такт");
    } else {
      setMisses((n) => n + 1);
      setCombo(0);
      setFlash("мимо");
    }
  };

  const ringStyle = (inset: string) => {
    return {
      inset: inset,
      animationDelay: phase + "ms",
    };
  };

  return (
    <div className="pulse" style={{ ["--pulse-ms"]: INTERVAL + "ms" } as React.CSSProperties}>
      <button
        type="button"
        className="pulse__stack"
        onClick={tap}
        aria-label="Удар в такт"
      >
        <span className="pulse__ring neo-inset" style={ringStyle("0%")} />
        <span className="pulse__ring neo-raised" style={ringStyle("16%")} />
        <span className="pulse__ring neo-inset" style={ringStyle("30%")} />
        <span className="pulse__core orb orb--rose neo-press" />
      </button>
      <p className="muted" style={{ marginTop: 18, textAlign: "center" }} aria-live="polite" aria-atomic="true">
        {flash ? flash + " · " : ""}
        серия {combo} · попало {hits} · мимо {misses}
      </p>
    </div>
  );
};

export default PulseStage;
