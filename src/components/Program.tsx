const steps = [
  ['1', 'Диагностика', 'Бесплатное тестирование уровня и постановка целей.', false],
  ['2', 'План', 'Личный график занятий и сроков по темам.', false],
  ['3', 'Занятия', 'Теория, практика, разбор сложных заданий 2 раза в неделю.', false],
  ['4', 'Пробники', 'Регулярная имитация ЕГЭ — без сюрпризов на экзамене.', false],
  ['5', 'ЕГЭ 90+', 'Сдача экзамена и поступление на бюджет вуза мечты.', true],
] as const;

export default function Program() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-pg">
        <div className="text-center">
          <span className="eyebrow">Как это работает</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tightest text-ink">
            Путь к высокому баллу
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {steps.map(([n, t, d, dark]) => (
            <article
              key={n}
              className={[
                'rounded-3xl p-6 flex flex-col gap-4 transition hover:-translate-y-1',
                dark ? 'bg-ink-900 text-white' : 'bg-brand-50 text-ink',
              ].join(' ')}
            >
              <div className="grid h-14 w-14 place-items-center rounded-full bg-brand text-2xl font-extrabold text-white">
                {n}
              </div>
              <h3 className={`text-lg font-extrabold ${dark ? 'text-white' : 'text-ink'}`}>{t}</h3>
              <p className={`text-sm leading-relaxed ${dark ? 'text-ink-300' : 'text-ink-500'}`}>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
