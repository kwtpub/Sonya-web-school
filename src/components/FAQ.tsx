import { useState } from 'react';

const faqs = [
  [
    'С какого класса лучше начинать подготовку?',
    'Оптимально — с 10 класса: за 2 года успеваем закрыть пробелы и доводим до баллов 90+. Но мы успешно работаем и с десятиклассниками после Нового года, и с одиннадцатиклассниками с экспресс-программой.',
  ],
  [
    'Какой формат занятий — онлайн или офлайн?',
    'Оба. В Москве можно заниматься в мини-группах до 6 человек. По всей России — онлайн на нашей платформе с доской, видеосвязью и записями уроков.',
  ],
  [
    'Что входит в стоимость абонемента?',
    'Все занятия по тарифу, проверка домашних работ, личный куратор, пробные экзамены, доступ к видео-материалам и тренажёру заданий 24/7.',
  ],
  [
    'Можно ли начать в середине учебного года?',
    'Да. Мы делаем диагностику и быстро встраиваем ученика в его потоке, либо составляем индивидуальную программу подготовки.',
  ],
  [
    'Что если результат окажется ниже ожидаемого?',
    'У нас гарантия результата. Если ученик регулярно посещал занятия и выполнял домашние, но не достиг запланированного балла — продолжим заниматься бесплатно.',
  ],
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-brand-50 py-20 lg:py-28">
      <div className="container-pg">
        <div className="text-center">
          <span className="eyebrow">Вопрос-ответ</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tightest text-ink">Часто спрашивают</h2>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div
                key={q}
                className={[
                  'rounded-2xl bg-white transition-all',
                  isOpen ? 'shadow-card' : '',
                ].join(' ')}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-bold text-ink">{q}</span>
                  <span
                    className={`text-2xl font-bold text-brand transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-7 pb-6 -mt-2 text-[15px] leading-relaxed text-ink-500">{a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
