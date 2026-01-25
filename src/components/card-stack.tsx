interface CardStackProps {
  label: string;
  icon: string;
}

export function CardStack({ icon, label }: CardStackProps) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/40 px-3 py-2 text-sm text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-900">
      <span className="text-zinc-100">{icon}</span>
      {label}
    </div>
  );
}
