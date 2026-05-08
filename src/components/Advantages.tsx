const items = [
  ['🎯', 'Индивидуальный план', 'После диагностики составляем дорожную карту под цель ученика — школа, балл, вуз.'],
  ['🧑‍🏫', 'Эксперты ЕГЭ', 'Преподаватели — действующие эксперты ЕГЭ и кандидаты наук с опытом 7+ лет.'],
  ['📝', 'Реальные варианты', 'Каждые 2 недели — пробный экзамен в условиях ЕГЭ с детальным разбором.'],
  ['✅', 'Гарантия результата', 'Если не получите запланированный балл — продолжим заниматься бесплатно до результата.'],
  ['🗓', 'Гибкое расписание', 'Утро, вечер, выходные. Онлайн или офлайн в Москве. Подстроимся под школьный график.'],
  ['💬', 'Поддержка 24/7', 'Куратор и преподаватель отвечают в чате — задание не пропадёт, вопрос не останется.'],
];

export default function Advantages() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container-pg">
        <div className="text-center">
          <span className="eyebrow">Почему выбирают нас</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tightest text-ink">
            Не просто репетиторство —
            <br className="hidden md:block" /> система подготовки
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Шесть причин, почему наши ученики поступают в топовые вузы
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([icon, title, desc]) => (
            <article
              key={title}
              className="group rounded-3xl bg-brand-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-card"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-2xl text-white shadow-soft">
                {icon}
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-ink">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
