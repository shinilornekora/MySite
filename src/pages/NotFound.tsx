import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  let path = location.pathname;
  if (path.length > 1 && path.charAt(path.length - 1) === "/") {
    path = path.slice(0, path.length - 1);
  }
  const studioMiss = path.indexOf("/studio/") === 0;
  return (
    <section className="panel neo-raised">
      <p className="kicker">404</p>
      <h1 className="page-title">
        {studioMiss ? "Сцена не найдена" : "Этой двери нет"}
      </h1>
      <p className="muted" style={{ marginTop: 12 }}>
        Вернитесь в студию — или на вход и к работам.
      </p>
      <div className="actions">
        <Link className="btn neo-press" to="/studio">
          В студию
        </Link>
        <Link className="btn neo-press btn--ghost" to="/">
          На вход
        </Link>
        <Link className="btn neo-press btn--ghost" to="/work">
          К работам
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
