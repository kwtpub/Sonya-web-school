const stats = [
  ['87', 'средний балл по математике'],
  ['92%', 'учеников сдали на 80+'],
  ['23', '100-балльника за 5 лет'],
  ['500+', 'выпускников с 2020 года'],
];

export default function Results() {
  return (
    <section className="bg-brand py-16 md:py-20 text-white">
      <div className="container-pg grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([n, l]) => (
          <div key={l}>
            <div className="text-6xl md:text-7xl lg:text-[96px] font-extrabold leading-none tracking-tightest">
              {n}
            </div>
            <div className="mt-3 max-w-[220px] text-sm md:text-base font-medium text-brand-100 leading-snug">
              {l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
