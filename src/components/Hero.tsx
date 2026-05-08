export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-50">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[520px] w-[520px] rounded-full bg-brand/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/3 h-[360px] w-[360px] rounded-full bg-brand-300/30 blur-3xl"
      />

      <div className="container-pg relative grid gap-16 py-20 lg:py-28 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-brand-700">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Набор на 2026/2027 учебный год
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.05] tracking-tightest text-ink">
            Сдай ЕГЭ
            <br />
            на <span className="text-brand">90+</span> баллов
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg text-ink-500 leading-relaxed">
            Подготовка к ЕГЭ по математике и русскому языку. Опытные преподаватели,
            индивидуальная программа и реальные варианты экзамена — всё, чтобы
            поступить в вуз мечты.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#cta" className="btn-primary">
              Бесплатный пробный урок
            </a>
            <a href="#courses" className="btn-secondary">
              Узнать программу
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {[
              ['500+', 'выпускников'],
              ['87', 'средний балл'],
              ['4.9 ★', 'рейтинг школы'],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl font-extrabold text-brand">{n}</div>
                <div className="text-sm font-medium text-ink-500">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <HeroCard />
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="relative mx-auto h-[540px] w-full max-w-[520px] rounded-[36px] border-2 border-brand-100 bg-white shadow-card">
      <div className="absolute left-12 top-12 flex h-[240px] w-[400px] flex-col items-start justify-center gap-2 rounded-3xl bg-brand p-8 text-white shadow-soft">
        <div className="text-[140px] font-extrabold leading-none tracking-tightest">100</div>
        <div className="text-base font-semibold text-brand-100">максимум на ЕГЭ</div>
      </div>

      <Pill className="absolute left-8 top-[330px] animate-float-slow" icon="π" title="Математика" sub="профиль / база" />
      <Pill className="absolute right-8 top-[420px] animate-float-fast" icon="А" title="Русский язык" sub="сочинение и тест" />
    </div>
  );
}

function Pill({
  icon,
  title,
  sub,
  className = '',
}: {
  icon: string;
  title: string;
  sub: string;
  className?: string;
}) {
  return (
    <div
      className={`flex h-[76px] w-[220px] items-center gap-3.5 rounded-2xl border-2 border-brand-100 bg-white px-4 shadow-card ${className}`}
    >
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-100 text-xl font-extrabold text-brand">
        {icon}
      </div>
      <div>
        <div className="text-[15px] font-bold text-ink">{title}</div>
        <div className="text-xs font-medium text-ink-500">{sub}</div>
      </div>
    </div>
  );
}
