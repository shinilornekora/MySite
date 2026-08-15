import React from "react";
import { Link } from "react-router-dom";
import { apps, findApp, kindAccent, markClass } from "../data/apps";
import { doors, profile } from "../data/profile";
import { works } from "../data/works";

function canOpen(slug: string): boolean {
  const app = findApp(slug);
  return !!(app && app.status === "live");
}

const Home = () => {
  const live = apps.filter((app) => app.status === "live");
  const featured = works.filter((work) => canOpen(work.studioSlug)).slice(0, 2);

  return (
    <div>
      <section className="hero">
        <div className="hero__copy neo-raised">
          <p className="kicker">
            {profile.name} · {profile.city}
          </p>
          <h1 className="display">Shiniasse — вход</h1>
          <p className="lead">{profile.headline}</p>
          <p className="lead" style={{ marginTop: 12 }}>
            {profile.pitch}
          </p>
          <div className="door-tray neo-inset">
            {doors.map((door) => (
              <Link className="door neo-press" key={door.to} to={door.to}>
                <p className="kicker">{door.kicker}</p>
                <h2>{door.title}</h2>
                <p className="muted">{door.text}</p>
              </Link>
            ))}
          </div>
        </div>
        <aside className="hero__stage neo-inset" aria-label="Сейчас открыто">
          <p className="kicker">Сейчас открыто</p>
          {live.length === 0 ? (
            <p className="muted">Сейчас ничего не запущено. Загляните в работы.</p>
          ) : (
            live.map((app) => (
              <Link
                className="orb-row neo-press"
                key={app.slug}
                to={"/studio/" + app.slug}
              >
                <span className={"orb orb--" + app.accent} aria-hidden="true" />
                <div>
                  <strong>{app.name}</strong>
                  <p className="muted">{app.tagline}</p>
                  <span className="chip-row" style={{ marginTop: 8 }}>
                    {app.tags.map((tag) => (
                      <span className="chip neo-inset" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </span>
                </div>
              </Link>
            ))
          )}
        </aside>
      </section>

      <section className="section">
        <div className="section__head">
          <h2 className="page-title">Недавнее</h2>
          <Link className="btn neo-press btn--ghost" to="/work">
            Все работы
          </Link>
        </div>
        {featured.length === 0 ? (
          <p className="muted">
            Пока нечего открыть руками.{" "}
            <Link to="/work">К работам</Link>
          </p>
        ) : (
          <div className="grid-2">
            {featured.map((work) => (
              <article className="work-card neo-raised" key={work.name}>
                <div className="work-card__well neo-inset">
                  <span className={markClass(kindAccent(work.kind))} aria-hidden="true" />
                </div>
                <p className="kicker">{work.kind}</p>
                <h3>{work.name}</h3>
                <p className="muted">{work.summary}</p>
                <Link className="btn neo-press" to={"/studio/" + work.studioSlug}>
                  Открыть в студии
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
