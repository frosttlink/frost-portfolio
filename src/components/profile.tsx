import Image from "next/image";

export function Profile() {
  return (
    <div id="top" className="flex flex-col gap-6 scroll-mt-24">
      <div className="flex items-center gap-4">
        <Image
          className="rounded-lg border border-zinc-800/80"
          src="https://github.com/frosttlink.png"
          width={96}
          height={96}
          alt=""
        />

        <div className="flex flex-col">
          <p className="text-xl font-medium text-zinc-100">Frost</p>
          <span className="text-sm text-zinc-400">Web Developer</span>
        </div>
      </div>

      <div className="space-y-4 text-zinc-400 leading-relaxed">
        <p>
          Me chamo Leo Alves, sou Desenvolvedor Web com cerca de{" "}
          <span className="text-zinc-200">4 a 5 anos de experiência</span>,
          atuando principalmente com{" "}
          <span className="text-zinc-200">
            React.js, Next.js, TypeScript, Tailwind CSS e Node.js.
          </span>
        </p>

        <p>
          Forte foco em <span className="text-zinc-200">UI/UX</span>,
          performance e organização de código, buscando soluções eficientes e
          bem estruturadas.
        </p>

        <p>
          Atualmente aprofundando conhecimentos em{" "}
          <span className="text-zinc-200">Go (Golang)</span>, com foco em
          backend e arquitetura de sistemas, além de atuar com design no Figma.
        </p>
      </div>
    </div>
  );
}
