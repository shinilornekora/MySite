import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppManifest, apps, findApp, markClass, statusLabel } from "../data/apps";
import NotFound from "./NotFound";
import Registry from "../runtimes/registry";

function fullNode(): Element | null {
  const doc = document as Document & { webkitFullscreenElement?: Element };
  return document.fullscreenElement || doc.webkitFullscreenElement || null;
}

function requestFull(node: HTMLElement): Promise<void> {
  const el = node as HTMLElement & {
    webkitRequestFullscreen?: () => void | Promise<void>;
  };
  if (node.requestFullscreen) {
    return node.requestFullscreen();
  }
  if (el.webkitRequestFullscreen) {
    try {
      const result = el.webkitRequestFullscreen();
      if (result && typeof result.then === "function") {
        return result.then(function () {
          if (fullNode()) {
            return;
          }
          return Promise.reject();
        });
      }
      if (fullNode()) {
        return Promise.resolve();
      }
      return Promise.reject();
    } catch (err) {
      return Promise.reject(err);
    }
  }
  return Promise.reject();
}

function exitFull(): Promise<void> {
  const doc = document as Document & {
    webkitExitFullscreen?: () => void | Promise<void>;
  };
  if (document.exitFullscreen) {
    return document.exitFullscreen();
  }
  if (doc.webkitExitFullscreen) {
    try {
      const result = doc.webkitExitFullscreen();
      if (result && typeof result.then === "function") {
        return result;
      }
      if (!fullNode()) {
        return Promise.resolve();
      }
      return Promise.reject();
    } catch (err) {
      return Promise.reject(err);
    }
  }
  return Promise.reject();
}

function AppCard(props: { app: AppManifest; live: boolean }) {
  const inner = (
    <span>
      <span className={markClass(props.app.accent)} aria-hidden="true" />
      <p className="kicker">{statusLabel(props.app.status)}</p>
      <h2>{props.app.name}</h2>
      <p className="muted">{props.app.tagline}</p>
      <span className="chip-row">
        {props.app.tags.map((tag) => (
          <span className={props.live ? "chip neo-inset" : "chip"} key={tag}>
            {tag}
          </span>
        ))}
      </span>
    </span>
  );
  if (props.live) {
    return (
      <Link className="door neo-press" to={"/studio/" + props.app.slug}>
        {inner}
      </Link>
    );
  }
  return (
    <div className="door" role="group" aria-disabled="true">
      {inner}
    </div>
  );
}

const Studio = () => {
  const params = useParams<{ slug?: string }>();
  const chassis = useRef<HTMLDivElement>(null);
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const sync = () => {
      setWide(fullNode() === chassis.current);
    };
    document.addEventListener("fullscreenchange", sync);
    document.addEventListener("webkitfullscreenchange", sync);
    return () => {
      document.removeEventListener("fullscreenchange", sync);
      document.removeEventListener("webkitfullscreenchange", sync);
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }
      const nav = document.getElementById("site-nav");
      if (nav && nav.className.indexOf("is-open") !== -1) {
        return;
      }
      if (fullNode()) {
        exitFull().then(
          function () {},
          function () {
            setWide(false);
          },
        );
      } else {
        setWide(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!params.slug) {
    return (
      <div>
        <div className="section__head">
          <div>
            <p className="kicker">Студия</p>
            <h1 className="page-title">Выберите сцену</h1>
          </div>
        </div>
        <div className="door-tray neo-inset">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} live={app.status === "live"} />
          ))}
        </div>
      </div>
    );
  }

  const current = findApp(params.slug);
  if (!current || current.status !== "live") {
    return <NotFound />;
  }

  const toggleWide = () => {
    const node = chassis.current;
    if (!node) {
      setWide(false);
      return;
    }
    if (fullNode()) {
      exitFull().then(
        function () {},
        function () {
          setWide(false);
        },
      );
      return;
    }
    if (wide) {
      setWide(false);
      return;
    }
    requestFull(node).then(
      function () {
        if (!fullNode()) {
          setWide(true);
        }
      },
      function () {
        setWide(true);
      },
    );
  };

  return (
    <div>
      <div className="section__head">
        <div>
          <p className="kicker">Студия</p>
          <h1 className="page-title">Сцена</h1>
        </div>
        <Link className="btn neo-press btn--ghost" to="/studio">
          К выбору сцен
        </Link>
      </div>
      <div className="studio">
        <aside className="studio__list neo-inset" aria-label="Приложения">
          {apps.map((app) =>
            app.status === "live" ? (
              <Link
                key={app.slug}
                className="studio__item neo-press"
                to={"/studio/" + app.slug}
                aria-current={app.slug === current.slug ? "page" : undefined}
              >
                <span className={markClass(app.accent)} aria-hidden="true" />
                <span>
                  <strong>{app.name}</strong>
                  <span className="muted" style={{ display: "block" }}>
                    {statusLabel(app.status)}
                  </span>
                  <span className="chip-row" style={{ marginTop: 8 }}>
                    {app.tags.map((tag) => (
                      <span className="chip neo-inset" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>
              </Link>
            ) : (
              <div className="studio__item" key={app.slug} role="group" aria-disabled="true">
                <span className={markClass(app.accent)} aria-hidden="true" />
                <span>
                  <strong>{app.name}</strong>
                  <span className="muted" style={{ display: "block" }}>
                    {statusLabel(app.status)}
                  </span>
                  <span className="chip-row" style={{ marginTop: 8 }}>
                    {app.tags.map((tag) => (
                      <span className="chip" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>
              </div>
            ),
          )}
        </aside>
        <section className="stage" aria-label={current.name}>
          <div className="stage__bar">
            <div>
              <p className="kicker">{statusLabel(current.status)}</p>
              <h2>{current.name}</h2>
              <p className="muted">{current.description}</p>
            </div>
            <div className="actions" style={{ marginTop: 0 }}>
              <a className="btn neo-press" href={current.repo} target="_blank" rel="noreferrer">
                Код
                <span className="sr-only"> (новая вкладка)</span>
              </a>
            </div>
          </div>
          <div className={wide ? "chassis chassis--wide" : "chassis"} ref={chassis}>
            <div className="chassis__top">
              <div className="chassis__dots" aria-hidden="true">
                <span className="orb orb--green" />
                <span className="orb orb--accent" />
                <span className="orb orb--rose" />
              </div>
              <button
                className="btn neo-press btn--ghost"
                type="button"
                aria-pressed={wide}
                onClick={toggleWide}
              >
                {wide ? "Свернуть" : "На весь экран"}
              </button>
            </div>
            <div className="stage__well chassis__screen neo-inset">
              <Registry app={current} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Studio;
