import { useState } from "react";
import { Menu, X } from "lucide-react";
import Head from "next/head";
import { NavButton } from "./ui/nav-button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Home");

  function scrollTo(id: string, pageTitle: string) {
    setTitle(pageTitle);
    setOpen(false);

    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Head>
        <title>frost.dev | {title}</title>
      </Head>

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
          <div>
            <span className="text-lg font-semibold text-zinc-100">frost.</span>
            <span className="text-lg font-semibold text-zinc-600">dev</span>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-zinc-400">
            <NavButton
              label="Ínicio"
              onClick={() => scrollTo("top", "Ínicio")}
              className="hover:text-zinc-100"
            />
            <NavButton
              label="Projetos"
              onClick={() => scrollTo("projetos", "Projetos")}
              className="hover:text-zinc-100"
            />
            <NavButton
              label="Contato"
              onClick={() => scrollTo("contato", "Contato")}
              className="hover:text-zinc-100"
            />
          </nav>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="md:hidden text-zinc-100"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-zinc-800 bg-zinc-950">
            <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col gap-4">
              <NavButton
                label="Home"
                onClick={() => scrollTo("top", "Home")}
                className="text-zinc-400 hover:text-zinc-100 text-left"
              />
              <NavButton
                label="Projetos"
                onClick={() => scrollTo("projetos", "Projetos")}
                className="text-zinc-400 hover:text-zinc-100 text-left"
              />
              <NavButton
                label="Contato"
                onClick={() => scrollTo("contato", "Contato")}
                className="text-zinc-400 hover:text-zinc-100 text-left"
              />
            </div>
          </div>
        )}
      </header>
    </>
  );
}
