# Точка Роста — лендинг школы подготовки к ЕГЭ

Продающий одностраничник для школы подготовки к ЕГЭ по математике и русскому языку.

## Структура репозитория

```
.
├── src/                       — исходники React-приложения
│   ├── components/            — секции лендинга (Header, Hero, Courses…)
│   ├── App.tsx                — корневой компонент
│   ├── main.tsx               — точка входа
│   └── index.css              — стили + Tailwind
├── public/                    — статика (favicon, _redirects)
├── design/
│   ├── landing.pen            — макет лендинга (Pencil)
│   ├── banners.pen            — макеты баннеров (Pencil)
│   └── exports/               — PNG-экспорты лендинга и скриншоты сайта
├── banners/                   — экспортированные баннеры в PNG
│   ├── web-banner-1200x628.png
│   └── outdoor-banner-3000x1500.png
├── netlify.toml               — конфигурация деплоя
├── tailwind.config.js         — фирменная палитра
├── TOOLS.md                   — перечень инструментов (п. 4.4 ТЗ)
└── README.md
```

## Локальный запуск

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production-сборка → dist/
npm run preview  # предпросмотр сборки
```

Требования: Node.js 20+.

## Деплой на Netlify

Способ A — через Git:
1. Залогиниться на https://app.netlify.com
2. **Add new site → Import existing project → GitHub → kwtpub/Sonya-web-school**
3. Build command: `npm run build` · Publish directory: `dist` (Netlify подхватит `netlify.toml` автоматически)

Способ B — drag-n-drop:
```bash
npm run build
# перетащить папку dist/ на https://app.netlify.com/drop
```

## Стек

React 19 · TypeScript · Vite · Tailwind CSS · Pencil (дизайн) · Netlify.
Полный перечень — см. [TOOLS.md](./TOOLS.md).
