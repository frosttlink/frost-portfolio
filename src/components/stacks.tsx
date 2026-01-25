import { CardStack } from "./card-stack";
import { StackAccordion, StackSection } from "./stack-section";

export function Stacks() {
  return (
    <StackAccordion>
      <div className="grid gap-4 sm:grid-cols-2">
        <StackSection title="Frontend" defaultOpen>
          <CardStack icon="⚛️" label="React" />
          <CardStack icon="⏭️" label="Next.js" />
          <CardStack icon="📘" label="TypeScript" />
          <CardStack icon="✨" label="JavaScript" />
          <CardStack icon="🎨" label="Tailwind CSS" />
          <CardStack icon="💅" label="Styled-components" />
          <CardStack icon="⚡" label="Vite" />
        </StackSection>

        <StackSection title="Backend">
          <CardStack icon="🟢" label="Node.js" />
          <CardStack icon="🚂" label="Express" />
          <CardStack icon="🔗" label="REST APIs" />
          <CardStack icon="🔺" label="Prisma" />
        </StackSection>

        <StackSection title="Database">
          <CardStack icon="🐘" label="PostgreSQL" />
          <CardStack icon="🗃️" label="SQLite" />
          <CardStack icon="💾" label="SQL" />
        </StackSection>

        <StackSection title="Learning">
          <CardStack icon="🐹" label="Go (Golang)" />
        </StackSection>
      </div>
    </StackAccordion>
  );
}
