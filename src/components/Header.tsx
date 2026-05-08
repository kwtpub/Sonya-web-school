import { useState } from 'react';
import Logo from './Logo';

const links = [
  { href: '#about', label: 'О школе' },
  { href: '#courses', label: 'Курсы' },
  { href: '#teachers', label: 'Преподаватели' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacts', label: 'Контакты' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-ink-100/80 bg-white/85 backdrop-blur-md">
      <div className="container-pg flex h-20 items-center justify-between gap-8">
        <a href="#" className="flex items-center gap-3">
          <Logo />
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-ink hover:text-brand transition"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+74951234567" className="hidden md:inline text-sm font-bold text-ink">
            +7 (495) 123-45-67
          </a>
          <a href="#cta" className="hidden md:inline-flex h-12 items-center rounded-xl bg-brand px-5 font-bold text-white text-sm shadow-soft hover:bg-brand-600 transition">
            Записаться
          </a>
          <button
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-100"
            aria-label="Меню"
          >
            <span className="block h-0.5 w-5 bg-ink shadow-[0_-6px_0_#101828,_0_6px_0_#101828]" />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-ink-100 bg-white">
          <div className="container-pg py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 font-medium">
                {l.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
              Записаться
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
