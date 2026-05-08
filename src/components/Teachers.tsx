const teachers = [
  { initials: 'АИ', name: 'Анна Иванова', role: 'Математика · 12 лет опыта · средний балл учеников 92', tone: 'brand' },
  { initials: 'ДС', name: 'Дмитрий Соколов', role: 'Математика · к.ф.-м.н. · эксперт ЕГЭ ФИПИ', tone: 'ink' },
  { initials: 'ЕМ', name: 'Елена Морозова', role: 'Русский · 8 лет опыта · автор пособий по сочинению', tone: 'brand' },
  { initials: 'ОК', name: 'Ольга Кравцова', role: 'Русский · филолог МГУ · эксперт ЕГЭ', tone: 'ink' },
] as const;

export default function Teachers() {
  return (
    <section id="teachers" className="bg-brand-50 py-20 lg:py-28">
      <div className="container-pg">
        <div className="text-center">
          <span className="eyebrow">Преподаватели</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tightest text-ink">
            Те, кто учат побеждать
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Эксперты ЕГЭ, авторы методик и наставники с большим опытом подготовки
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((t) => (
            <article key={t.name} className="rounded-3xl bg-white p-6 shadow-card transition hover:-translate-y-1">
              <div
                className={[
                  'grid h-48 w-full place-items-center rounded-2xl',
                  t.tone === 'brand' ? 'bg-brand text-white' : 'bg-ink-900 text-brand',
                ].join(' ')}
              >
                <span className="text-6xl font-extrabold tracking-tightest">{t.initials}</span>
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-ink">{t.name}</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">{t.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
