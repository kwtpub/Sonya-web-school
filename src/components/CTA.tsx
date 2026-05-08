import { useState } from 'react';

const subjects = ['Математика', 'Русский язык', 'Оба предмета'];

export default function CTA() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(subjects[0]);
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || phone.trim().length < 6) return;
    setSent(true);
  }

  return (
    <section id="cta" className="bg-ink-900 py-20 lg:py-28 text-white">
      <div className="container-pg grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="max-w-lg">
          <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand-300">
            Начни путь к 90+ баллов
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-tight tracking-tightest">
            Бесплатный пробный урок и план подготовки
          </h2>
          <p className="mt-5 text-lg text-ink-300 leading-relaxed">
            Оставьте заявку — мы перезвоним за 15 минут, проведём диагностику и составим персональный план под цель ученика.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-[28px] bg-white p-8 md:p-10 text-ink shadow-card flex flex-col gap-4"
        >
          <h3 className="text-2xl font-extrabold">Запишитесь на пробный урок</h3>
          {sent ? (
            <div className="grid h-48 place-items-center rounded-2xl bg-brand-50 p-6 text-center">
              <div>
                <div className="text-3xl">🎉</div>
                <div className="mt-3 text-lg font-bold">Заявка отправлена</div>
                <div className="mt-2 text-sm text-ink-500">Перезвоним в течение 15 минут</div>
              </div>
            </div>
          ) : (
            <>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя ученика"
                className="h-14 rounded-xl bg-ink-100 px-4 text-base outline-none focus:ring-2 focus:ring-brand"
                required
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
                inputMode="tel"
                className="h-14 rounded-xl bg-ink-100 px-4 text-base outline-none focus:ring-2 focus:ring-brand"
                required
              />
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="h-14 rounded-xl bg-ink-100 px-4 text-base font-semibold outline-none focus:ring-2 focus:ring-brand"
              >
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    Предмет: {s}
                  </option>
                ))}
              </select>
              <button type="submit" className="btn-primary mt-2">
                Получить пробный урок →
              </button>
              <p className="text-xs text-ink-500 leading-relaxed">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
