type NavButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

export function NavButton({ label, onClick, className }: NavButtonProps) {
  return (
    // biome-ignore lint/a11y/useButtonType: <dev>
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
}
