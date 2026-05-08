import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="contacts" className="bg-[#0A0F1F] text-white">
      <div className="container-pg py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-ink-300 leading-relaxed">
            Школа подготовки к ЕГЭ по математике и русскому языку. Учим побеждать с 2020 года.
          </p>
        </div>

        <div>
          <div className="text-xs font-extrabold uppercase tracking-[0.16em]">Курсы</div>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-300">
            <li><a href="#courses" className="hover:text-brand">ЕГЭ Математика</a></li>
            <li><a href="#courses" className="hover:text-brand">ЕГЭ Русский язык</a></li>
            <li><a href="#courses" className="hover:text-brand">Пробные экзамены</a></li>
            <li><a href="#courses" className="hover:text-brand">Интенсив перед ЕГЭ</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-extrabold uppercase tracking-[0.16em]">Школа</div>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-300">
            <li><a href="#about" className="hover:text-brand">О нас</a></li>
            <li><a href="#teachers" className="hover:text-brand">Преподаватели</a></li>
            <li><a href="#reviews" className="hover:text-brand">Отзывы</a></li>
            <li><a href="#" className="hover:text-brand">Блог</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-extrabold uppercase tracking-[0.16em]">Контакты</div>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li><a href="tel:+74951234567" className="font-bold text-white hover:text-brand">+7 (495) 123-45-67</a></li>
            <li className="text-ink-300">hello@tochka-rosta.ru</li>
            <li className="text-ink-300">Москва, ул. Учебная, 1</li>
            <li className="text-brand font-semibold">Telegram · ВКонтакте</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pg py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink-300">
          <div>© 2026 Точка Роста · Все права защищены</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-brand">Политика конфиденциальности</a>
            <a href="#" className="hover:text-brand">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
