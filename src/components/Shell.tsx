import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { findApp } from "../data/apps";
import { profile } from "../data/profile";

const links = [
  { to: "/", label: "Вход" },
  { to: "/studio", label: "Студия" },
  { to: "/work", label: "Работы" },
];

type ShellProps = {
  children: React.ReactNode;
};

function pageTitle(pathname: string): string {
  let path = pathname;
  if (path.length > 1 && path.charAt(path.length - 1) === "/") {
    path = path.slice(0, path.length - 1);
  }
  if (path === "/") {
    return "Студия Shiniasse";
  }
  if (path === "/studio") {
    return "Студия — Shiniasse";
  }
  if (path.indexOf("/studio/") === 0) {
    let slug = path.slice("/studio/".length);
    if (slug.charAt(slug.length - 1) === "/") {
      slug = slug.slice(0, slug.length - 1);
    }
    const app = findApp(slug);
    if (app && app.status === "live") {
      return app.name + " — Shiniasse";
    }
    return "Сцена не найдена — Shiniasse";
  }
  if (path === "/work") {
    return "Работы — Shiniasse";
  }
  if (path === "/about") {
    return "Путь — Shiniasse";
  }
  return "Нет страницы — Shiniasse";
}

const Shell = ({ children }: ShellProps) => {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const main = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitle(location.pathname);
    setOpen(false);
    if (main.current) {
      main.current.focus();
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        if (toggle.current) {
          toggle.current.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="shell">
      <a className="skip-link" href="#content">
        К содержимому
      </a>
      <header className="shell__bar neo-raised">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand__mark neo-inset" aria-hidden="true">
            S
          </span>
          <span>
            <span className="brand__name">{profile.alias}</span>
            <span className="brand__meta">{profile.city}</span>
          </span>
        </Link>
        <button
          className="nav__toggle neo-press"
          type="button"
          ref={toggle}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Закрыть" : "Меню"}
        </button>
        <nav
          id="site-nav"
          className={open ? "nav nav-well neo-inset is-open" : "nav nav-well neo-inset"}
          aria-label="Основная"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              className="neo-press"
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="content" className="shell__main" ref={main} tabIndex={-1}>
        {children}
      </main>
      <footer className="shell__foot neo-raised">
        <p>
          <Link to="/studio">Студия</Link>
          {" · "}
          <Link to="/work">Работы</Link>
          {" · "}
          <Link to="/about">Путь</Link>
        </p>
        <p>
          <a href={profile.github}>GitHub</a>
          {" · "}
          <a href={profile.telegram}>Telegram</a>
          {" · "}
          <a href={"mailto:" + profile.email}>Почта</a>
        </p>
      </footer>
    </div>
  );
};

export default Shell;
