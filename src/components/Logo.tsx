type Props = { size?: 'sm' | 'md' | 'lg'; light?: boolean };

export default function Logo({ size = 'md', light = false }: Props) {
  const dim =
    size === 'lg' ? 'h-12 w-12 rounded-2xl' : size === 'sm' ? 'h-10 w-10 rounded-xl' : 'h-11 w-11 rounded-2xl';
  const text =
    size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-lg' : 'text-xl';
  return (
    <div className="flex items-center gap-3">
      <div className={`${dim} bg-brand grid place-items-center shadow-soft`}>
        <span className="block h-3 w-3 rounded-full bg-white" />
      </div>
      <span className={`${text} font-extrabold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
        Точка Роста
      </span>
    </div>
  );
}
