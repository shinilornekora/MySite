import React from "react";
import { Link } from "react-router-dom";
import { findApp, kindAccent, markClass } from "../data/apps";
import { works } from "../data/works";

function canOpen(slug: string): boolean {
  const app = findApp(slug);
  return !!(app && app.status === "live");
}

const Work = () => {
  if (works.length === 0) {
    return (
      <section className="panel neo-raised">
        <h1 className="page-title">Пока пусто</h1>
        <div className="actions">
          <Link className="btn neo-press" to="/">
            На вход
          </Link>
          <Link className="btn neo-press btn--ghost" to="/studio">
            В студию
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div>
      <div className="section__head">
        <div>
          <p className="kicker">Работы</p>
          <h1 className="page-title">Что стоит открыть</h1>
        </div>
        <p className="muted">Выборка с GitHub. Остальное живёт в профиле.</p>
      </div>
      <div className="grid-2">
        {works.map((work) => (
          <article className="work-card neo-raised" key={work.name}>
            <div className="work-card__well neo-inset">
              <span className={markClass(kindAccent(work.kind))} aria-hidden="true" />
            </div>
            <div className="chip-row">
              <span className="chip neo-inset">{work.kind}</span>
              <span className="chip neo-inset">{work.year}</span>
            </div>
            <h2>{work.name}</h2>
            <p className="muted">{work.stack}</p>
            <p className="muted">{work.summary}</p>
            <div className="actions" style={{ marginTop: 8 }}>
              {canOpen(work.studioSlug) ? (
                <Link className="btn neo-press" to={"/studio/" + work.studioSlug}>
                  Открыть в студии
                </Link>
              ) : null}
              <a className="btn neo-press btn--ghost" href={work.href} target="_blank" rel="noreferrer">
                Репозиторий
                <span className="sr-only"> (новая вкладка)</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Work;
