import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Image from "next/image";
import { ProjectLinks } from "../ui/projetct-links";

export function GithubBlogProject() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <article className="group cursor-pointer rounded-lg border border-zinc-800 bg-zinc-950 p-4 transition hover:border-zinc-700">
          <div className="mb-4 overflow-hidden rounded-md border border-zinc-800">
            <Image
              unoptimized
              src="https://opengraph.githubassets.com/1/frosttlink/github-blog"
              alt="GitHub Blog"
              width={600}
              height={300}
              className="h-40 w-full object-cover transition group-hover:scale-105"
            />
          </div>

          <h3 className="text-sm font-medium text-zinc-100">GitHub Blog</h3>

          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
            Blog que consome e renderiza posts do GitHub com Markdown e syntax
            highlighting.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
            <span>React</span>
            <span>Vite</span>
            <span>TypeScript</span>
            <span>Tailwind</span>
          </div>
        </article>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-lg border border-zinc-800 bg-zinc-950 p-6 focus:outline-none">
          <div className="flex items-start justify-between">
            <Dialog.Title className="flex items-center gap-2 text-lg font-medium text-zinc-100">
              GitHub Blog
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
            </Dialog.Title>

            <Dialog.Close className="text-zinc-400 hover:text-zinc-100">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <div className="mt-4 overflow-hidden rounded-md border border-zinc-800">
            <Image
              unoptimized
              src="https://opengraph.githubassets.com/1/frosttlink/github-blog"
              alt="GitHub Blog"
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>

          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            Blog que consome posts do GitHub via API, renderiza conteúdo em
            Markdown com syntax highlighting. Construído com React e Vite,
            utiliza react-router-dom para navegação e marked para processamento
            de Markdown.
          </p>

          <ul className="mt-4 space-y-2 text-sm list-inside list-disc text-zinc-400">
            <li>Consumo de posts do GitHub via API</li>
            <li>Renderização de Markdown com syntax highlighting</li>
            <li>Navegação SPA com React Router</li>
            <li>Ícones com Font Awesome</li>
            <li>Estilização com Tailwind CSS</li>
          </ul>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
            <span>React 19</span>
            <span>Vite</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>React Router</span>
            <span>Marked</span>
            <span>Highlight.js</span>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <ProjectLinks githubUrl="https://github.com/frosttlink/github-blog" />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
