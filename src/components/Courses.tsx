export default function Courses() {
  return (
    <section id="courses" className="bg-ink-900 py-20 lg:py-28 text-white">
      <div className="container-pg">
        <div className="text-center">
          <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand-300">Наши курсы</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tightest">Программа подготовки</h2>
          <p className="mt-4 text-lg text-ink-300">Полный цикл подготовки к ЕГЭ — от диагностики до получения результата</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <CourseCard
            tone="brand"
            tag="Хит продаж"
            title="ЕГЭ Математика"
            desc="Профильный и базовый уровни. Все 19 заданий, теория + методики решения, индивидуальные слабые места."
            list={[
              '96 ак. часов и 12 пробных экзаменов',
              'Личный кабинет с домашками и видео',
              'Куратор и чат поддержки до экзамена',
            ]}
            price="от 6 900 ₽/мес"
            priceSub="или 690 ₽ за занятие"
          />
          <CourseCard
            tone="white"
            tag="Новый формат"
            title="ЕГЭ Русский"
            desc="Тестовая часть и сочинение по новым критериям 2027. Индивидуальная проверка каждого сочинения преподавателем."
            list={[
              '72 ак. часа и 10 проверенных сочинений',
              'Аргументы по 12 направлениям',
              'Тренажёр заданий 1–26 онлайн',
            ]}
            price="от 5 900 ₽/мес"
            priceSub="или 590 ₽ за занятие"
          />
        </div>
      </div>
    </section>
  );
}

function CourseCard({
  tone,
  tag,
  title,
  desc,
  list,
  price,
  priceSub,
}: {
  tone: 'brand' | 'white';
  tag: string;
  title: string;
  desc: string;
  list: string[];
  price: string;
  priceSub: string;
}) {
  const isBrand = tone === 'brand';
  return (
    <article
      className={[
        'rounded-[32px] p-8 md:p-10 flex flex-col gap-5',
        isBrand ? 'bg-brand text-white' : 'bg-white text-ink',
      ].join(' ')}
    >
      <span
        className={[
          'inline-flex w-fit items-center rounded-full px-3 py-2 text-[11px] font-extrabold tracking-[0.14em]',
          isBrand ? 'bg-white text-brand' : 'bg-brand-100 text-brand',
        ].join(' ')}
      >
        {tag.toUpperCase()}
      </span>
      <h3 className={`text-3xl md:text-[38px] font-extrabold tracking-tightest ${isBrand ? 'text-white' : 'text-ink'}`}>
        {title}
      </h3>
      <p className={`text-base leading-relaxed ${isBrand ? 'text-brand-100' : 'text-ink-500'}`}>{desc}</p>
      <ul className="flex flex-col gap-2 pt-2">
        {list.map((it) => (
          <li key={it} className={`flex items-start gap-2 text-[15px] font-semibold ${isBrand ? 'text-white' : 'text-ink'}`}>
            <span className={isBrand ? 'text-white' : 'text-brand'}>✓</span>
            {it}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap items-center gap-4 pt-4">
        <div>
          <div className={`text-2xl md:text-[26px] font-extrabold ${isBrand ? 'text-white' : 'text-ink'}`}>{price}</div>
          <div className={`text-xs font-medium ${isBrand ? 'text-brand-100' : 'text-ink-500'}`}>{priceSub}</div>
        </div>
        <a
          href="#cta"
          className={[
            'ml-auto inline-flex h-13 items-center justify-center rounded-xl px-7 py-3 text-sm font-extrabold transition',
            isBrand ? 'bg-white text-brand hover:bg-brand-100' : 'bg-brand text-white hover:bg-brand-600',
          ].join(' ')}
        >
          Записаться
        </a>
      </div>
    </article>
  );
}
