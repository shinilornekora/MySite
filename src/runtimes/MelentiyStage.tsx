import React, { useState } from "react";

type Layout = {
  header: string;
  hero: string;
  cards: string[];
  action: string;
};

const recipes: { [key: string]: Layout } = {
  магазин: {
    header: "Витрина · корзина · вход",
    hero: "Товар недели и одна сильная цена",
    cards: ["Новинки", "Подборки", "Уход"],
    action: "Положить в корзину",
  },
  журнал: {
    header: "Разделы · авторы · поиск",
    hero: "Длинный заголовок и тихая подводка",
    cards: ["Эссе", "Интервью", "Заметки"],
    action: "Читать дальше",
  },
  студия: {
    header: "Портфолио · сцена · связь",
    hero: "Имя и одна фраза, за которой можно пройти",
    cards: ["Работы", "Приложения", "Путь"],
    action: "Открыть сцену",
  },
  игра: {
    header: "Профиль · сезон · отряд",
    hero: "Один уровень и понятная ставка",
    cards: ["Арена", "Награды", "Друзья"],
    action: "В бой",
  },
  галерея: {
    header: "Залы · авторы · ночь",
    hero: "Одна работа на всю стену",
    cards: ["Живопись", "Объект", "Свет"],
    action: "Войти в зал",
  },
  кабинет: {
    header: "Входящие · календарь · люди",
    hero: "Сегодня три дела, остальное позже",
    cards: ["Почта", "Задачи", "Заметки"],
    action: "Открыть день",
  },
};

const presets = ["студия", "магазин", "журнал", "игра", "галерея", "кабинет"];

function matchKey(value: string): string {
  const text = value.toLowerCase();
  const keys = Object.keys(recipes);
  for (let i = 0; i < keys.length; i += 1) {
    if (text.indexOf(keys[i]) !== -1) {
      return keys[i];
    }
  }
  return "";
}

function guessLayout(value: string): Layout | null {
  const key = matchKey(value);
  if (!key) {
    return null;
  }
  return recipes[key];
}

const MelentiyStage = () => {
  const [intent, setIntent] = useState("тихая студия с живой сценой");
  const [selected, setSelected] = useState("студия");
  const [layout, setLayout] = useState(guessLayout("студия"));

  const apply = (value: string) => {
    const key = matchKey(value);
    setIntent(value);
    setSelected(key);
    setLayout(key ? recipes[key] : null);
  };

  return (
    <div className="layout-lab">
      <div className="chip-row">
        {presets.map((item) => (
          <button
            key={item}
            type="button"
            className="chip neo-press"
            aria-pressed={item === selected}
            onClick={() => apply(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <label>
        Намерение
        <input
          className="field"
          value={intent}
          onChange={(event) => apply(event.target.value)}
        />
      </label>
      {layout ? (
        <div className="layout-preview" aria-live="polite">
          <div className="layout-block neo-inset">{layout.header}</div>
          <div className="layout-block neo-raised" style={{ minHeight: 96 }}>
            {layout.hero}
          </div>
          <div className="grid-3">
            {layout.cards.map((card) => (
              <div className="layout-block neo-raised" key={card}>
                {card}
              </div>
            ))}
          </div>
          <div className="layout-block neo-press">{layout.action}</div>
        </div>
      ) : (
        <p className="muted" aria-live="polite">
          Не узнаю место. Попробуйте «студия», «магазин», «журнал», «игра»,
          «галерея» или «кабинет».
        </p>
      )}
    </div>
  );
};

export default MelentiyStage;
