import { CardStack } from "./card-stack";
import {
  Atom,
  Layers,
  FileCode2,
  Braces,
  Wind,
  Paintbrush,
  Zap,
  Server,
  Network,
  Boxes,
  Database,
  HardDrive,
  Binary,
  GraduationCap,
} from "lucide-react";
import { StackAccordion, StackSection } from "./stack-section";

export function Stacks() {
  return (
    <StackAccordion>
      <div className="grid gap-4 sm:grid-cols-2">
        <StackSection title="Frontend" defaultOpen>
          <CardStack icon={Atom} label="React" />
          <CardStack icon={Layers} label="Next.js" />
          <CardStack icon={FileCode2} label="TypeScript" />
          <CardStack icon={Braces} label="JavaScript" />
          <CardStack icon={Wind} label="Tailwind CSS" />
          <CardStack icon={Paintbrush} label="Styled-components" />
          <CardStack icon={Zap} label="Vite" />
        </StackSection>

        <StackSection title="Backend">
          <CardStack icon={Server} label="Node.js" />
          <CardStack icon={Network} label="Express" />
          <CardStack icon={Boxes} label="REST APIs" />
          <CardStack icon={Database} label="Prisma" />
        </StackSection>

        <StackSection title="Database">
          <CardStack icon={Database} label="PostgreSQL" />
          <CardStack icon={HardDrive} label="SQLite" />
          <CardStack icon={Binary} label="SQL" />
        </StackSection>

        <StackSection title="Learning">
          <CardStack icon={GraduationCap} label="Go (Golang)" />
        </StackSection>
      </div>
    </StackAccordion>
  );
}
