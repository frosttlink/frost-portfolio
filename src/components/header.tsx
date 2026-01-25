import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        <div>
          <span className="text-lg font-semibold text-zinc-100">frost.</span>
          <span className="text-lg font-semibold text-zinc-600">dev</span>
        </div>

        <div className="hidden md:flex gap-6 text-sm text-zinc-400">
          <Link href="/" className="hover:text-zinc-100">
            Home
          </Link>
          <Link href="#" className="hover:text-zinc-100">
            Projetos
          </Link>
          <Link href="#" className="hover:text-zinc-100">
            Contato
          </Link>
        </div>

        {/** biome-ignore lint/a11y/useButtonType: <development> */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menu"
          aria-expanded={open}
          className="md:hidden text-zinc-100"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div
          className="
            md:hidden
            border-t border-zinc-800
            bg-zinc-950
          "
        >
          <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col gap-4">
            <Link href="#" className="text-zinc-400 hover:text-zinc-100">
              Home
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-zinc-100">
              Projetos
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-zinc-100">
              Contato
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
