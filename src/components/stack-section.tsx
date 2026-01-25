import { createContext, useContext, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionContextType {
  openTitle: string | null;
  setOpenTitle: (title: string | null) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

export function StackAccordion({ children }: { children: ReactNode }) {
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ openTitle, setOpenTitle }}>
      {children}
    </AccordionContext.Provider>
  );
}

interface StackSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function StackSection({
  title,
  children,
  defaultOpen = false,
}: StackSectionProps) {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("StackSection must be used inside <StackAccordion>");
  }

  const { openTitle, setOpenTitle } = context;

  const open = openTitle === title;

  // abre por padrão
  if (defaultOpen && openTitle === null) {
    setOpenTitle(title);
  }

  function toggle() {
    setOpenTitle(open ? null : title);
  }

  return (
    <div className="col-span-full">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="
          flex w-full items-center justify-between
          text-xs uppercase tracking-widest
          text-zinc-500
          hover:text-zinc-300
          transition
        "
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`
          grid grid-cols-2 sm:grid-cols-3 gap-3
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${open ? "max-h-96 mt-3" : "max-h-0"}
        `}
      >
        {children}
      </div>
    </div>
  );
}
