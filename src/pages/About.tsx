import React from "react";
import { Link } from "react-router-dom";
import { path, profile } from "../data/profile";

const About = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero__copy neo-raised">
          <p className="kicker">Путь</p>
          <h1 className="display">{profile.name}</h1>
          <p className="lead">
            Андрей. Днём — большие сервисы, свои вещи — когда хочется проверить
            идею на ощупь. На GitHub —{" "}
            <a href={profile.github}>shinilornekora</a>.
          </p>
          <div className="actions">
            <Link className="btn neo-press" to="/studio">
              В студию
            </Link>
            <Link className="btn neo-press btn--ghost" to="/work">
              К работам
            </Link>
            <a className="btn neo-press btn--ghost" href={"mailto:" + profile.email}>
              Написать
            </a>
          </div>
        </div>
        <aside className="panel neo-inset" aria-label="Контур">
          <p className="kicker">Контур</p>
          <p className="muted" style={{ marginTop: 12 }}>
            Пишите в Telegram <a href={profile.telegram}>@Shiniasse</a>.
          </p>
        </aside>
      </section>
      <section className="section">
        <h2 className="page-title">Как это складывалось</h2>
        <div className="grid-3" style={{ marginTop: 16 }}>
          {path.map((item) => (
            <article className="path-card neo-raised" key={item.place}>
              <div className="work-card__well neo-inset">
                <span className="mark orb--accent" aria-hidden="true" />
              </div>
              <p className="kicker">{item.period}</p>
              <h3>{item.place}</h3>
              <p>{item.role}</p>
              <p className="muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
