const reviews = [
  {
    quote:
      'Сдала математику на 94 балла. До курсов писала пробник на 62 — за полгода вырос балл, а главное появилась уверенность.',
    name: 'Анастасия М.',
    role: 'ВШЭ, выпуск 2026',
    tone: 'brand',
    init: 'А',
  },
  {
    quote:
      'Куратор реально следит за прогрессом. Если что-то непонятно — не оставят, объяснят. Русский написал на 91.',
    name: 'Иван К.',
    role: 'МГУ, выпуск 2026',
    tone: 'ink',
    init: 'И',
  },
  {
    quote:
      'Сын сам не верил, что сможет. В итоге 100 баллов по математике. Преподаватели объясняют так, что в школе никто не объяснял.',
    name: 'Мария О.',
    role: 'мама ученика',
    tone: 'brand',
    init: 'М',
  },
] as const;

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="container-pg">
        <div className="text-center">
          <span className="eyebrow">Отзывы учеников</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tightest text-ink">
            Что говорят выпускники
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="rounded-3xl bg-brand-50 p-8 flex flex-col gap-5">
              <div className="text-lg tracking-[0.2em] text-brand">★★★★★</div>
              <p className="text-base leading-relaxed text-ink">«{r.quote}»</p>
              <div className="mt-auto flex items-center gap-3">
                <div
                  className={[
                    'grid h-11 w-11 place-items-center rounded-full font-extrabold',
                    r.tone === 'brand' ? 'bg-brand text-white' : 'bg-ink-900 text-brand',
                  ].join(' ')}
                >
                  {r.init}
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">{r.name}</div>
                  <div className="text-xs font-medium text-ink-500">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
