function normalizeBase(value) {
  let base = value || "/";

  if (!base.startsWith("/")) {
    base = `/${base}`;
  }

  if (!base.endsWith("/")) {
    base = `${base}/`;
  }

  return base;
}

const SITE_BASE = normalizeBase(process.env.SITE_BASE || "/");

function withBase(value = "") {
  return `${SITE_BASE}${value.replace(/^[/]+/, "")}`;
}

export const decks = [
  {
    name: "openclass-disenointerfaces",
    entry: "slides.md",
    out: "dist",
    base: SITE_BASE,
    exportable: false,
  },
  {
    name: "disenointerfaces_semana1",
    entry: "disenointerfaces_semana1.md",
    out: "dist/semanas/disenointerfaces_semana1",
    base: withBase("semanas/disenointerfaces_semana1/"),
    exportable: true,
  },
  {
    name: "disenointerfaces_semana2",
    entry: "disenointerfaces_semana2.md",
    out: "dist/semanas/disenointerfaces_semana2",
    base: withBase("semanas/disenointerfaces_semana2/"),
    exportable: true,
  },
  {
    name: "disenointerfaces_semana3",
    entry: "disenointerfaces_semana3.md",
    out: "dist/semanas/disenointerfaces_semana3",
    base: withBase("semanas/disenointerfaces_semana3/"),
    exportable: true,
  },
  {
    name: "disenointerfaces_semana4",
    entry: "disenointerfaces_semana4.md",
    out: "dist/semanas/disenointerfaces_semana4",
    base: withBase("semanas/disenointerfaces_semana4/"),
    exportable: true,
  },
  {
    name: "disenointerfaces_semana5",
    entry: "disenointerfaces_semana5.md",
    out: "dist/semanas/disenointerfaces_semana5",
    base: withBase("semanas/disenointerfaces_semana5/"),
    exportable: true,
  },
  {
    name: "disenointerfaces_semana6",
    entry: "disenointerfaces_semana6.md",
    out: "dist/semanas/disenointerfaces_semana6",
    base: withBase("semanas/disenointerfaces_semana6/"),
    exportable: true,
  },
  {
    name: "disenointerfaces_semana7",
    entry: "disenointerfaces_semana7.md",
    out: "dist/semanas/disenointerfaces_semana7",
    base: withBase("semanas/disenointerfaces_semana7/"),
    exportable: true,
  },
];

export default decks;
