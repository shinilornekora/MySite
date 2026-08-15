export type WorkItem = {
  name: string;
  year: string;
  stack: string;
  summary: string;
  href: string;
  kind: string;
  studioSlug: string;
};

export const works: WorkItem[] = [
  {
    name: "Pulse Arena",
    year: "2025",
    stack: "Three.js · WebXR · Web Audio",
    summary: "Промах выкидывает. Попадание оставляет вас в круге.",
    href: "https://github.com/shinilornekora/pulse-arena",
    kind: "мир",
    studioSlug: "pulse-arena",
  },
  {
    name: "Measure Your Cast",
    year: "2025",
    stack: "Vue · Canvas · WebRTC",
    summary: "Два игрока чертят одну фигуру на скорость. Победа — у более чистой линии.",
    href: "https://github.com/shinilornekora/MeasureYourCast",
    kind: "мир",
    studioSlug: "measure-your-cast",
  },
  {
    name: "Melentiy",
    year: "2024",
    stack: "TypeScript · GPT API",
    summary: "Станок раскладки: фраза про место превращается в сетку экрана.",
    href: "https://github.com/shinilornekora/Melentiy",
    kind: "инструмент",
    studioSlug: "melentiy",
  },
  {
    name: "Dependency System",
    year: "2024",
    stack: "TypeScript · CLI",
    summary: "Сторож зависимостей: чтобы чужой пакет не тащил дыру в дом.",
    href: "https://github.com/shinilornekora/automated-dependency-system",
    kind: "инструмент",
    studioSlug: "",
  },
  {
    name: "Tiffany",
    year: "2023—2024",
    stack: "React · TypeScript",
    summary: "Экран команды Entropy: навигация слева, холст справа, виджеты не спорят.",
    href: "https://github.com/shinilornekora/tiffany",
    kind: "продукт",
    studioSlug: "",
  },
  {
    name: "Aristarh",
    year: "2024",
    stack: "Svelte",
    summary: "Конструктор готового сайта: блоки складываются в страницу, а не в макет.",
    href: "https://github.com/shinilornekora/Aristarh",
    kind: "инструмент",
    studioSlug: "",
  },
];
