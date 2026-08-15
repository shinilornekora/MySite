export type AppStatus = "live" | "ready";

export type AppRuntime = "native" | "iframe";

export type AppManifest = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: AppStatus;
  runtime: AppRuntime;
  moduleId: string;
  embedUrl: string;
  repo: string;
  tags: string[];
  accent: string;
  allow: string;
  sandbox: string;
};

export const apps: AppManifest[] = [
  {
    slug: "melentiy",
    name: "Melentiy",
    tagline: "Скажите место — появятся блоки.",
    description:
      "Скажите, что это за место — магазин, журнал, студия — и соберётся раскладка.",
    status: "live",
    runtime: "native",
    moduleId: "melentiy",
    embedUrl: "",
    repo: "https://github.com/shinilornekora/Melentiy",
    tags: ["инструмент", "раскладка"],
    accent: "green",
    allow: "",
    sandbox: "",
  },
  {
    slug: "pulse-arena",
    name: "Pulse Arena",
    tagline: "Удар в такт держит прицел.",
    description:
      "Опоздали на долю такта — серия обнуляется. Только совпадение с битом держит вас внутри.",
    status: "live",
    runtime: "native",
    moduleId: "pulse",
    embedUrl: "",
    repo: "https://github.com/shinilornekora/pulse-arena",
    tags: ["игра", "ритм"],
    accent: "rose",
    allow: "",
    sandbox: "",
  },
  {
    slug: "measure-your-cast",
    name: "Measure Your Cast",
    tagline: "Жест как заклинание.",
    description:
      "Камера вместо контроллера. Сорвал траекторию — ход сгорел.",
    status: "ready",
    runtime: "iframe",
    moduleId: "iframe",
    embedUrl: "",
    repo: "https://github.com/shinilornekora/MeasureYourCast",
    tags: ["игра", "жест"],
    accent: "accent",
    allow: "camera; microphone; fullscreen; xr-spatial-tracking",
    sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
  },
];

export function findApp(slug: string): AppManifest | null {
  for (let i = 0; i < apps.length; i += 1) {
    if (apps[i].slug === slug) {
      return apps[i];
    }
  }
  return null;
}

export function statusLabel(status: AppStatus): string {
  if (status === "live") {
    return "можно зайти";
  }
  return "скоро";
}

export function markClass(accent: string): string {
  if (accent === "green") {
    return "mark orb--green";
  }
  if (accent === "rose") {
    return "mark orb--rose";
  }
  return "mark orb--accent";
}

export function kindAccent(kind: string): string {
  if (kind === "мир") {
    return "rose";
  }
  if (kind === "инструмент") {
    return "green";
  }
  return "accent";
}
