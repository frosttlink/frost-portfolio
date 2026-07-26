import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Image from "next/image";
import { ProjectLinks } from "../ui/projetct-links";

export function UserHubProject() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <article className="group cursor-pointer rounded-lg border border-zinc-800 bg-zinc-950 p-4 transition hover:border-zinc-700">
          <div className="mb-4 overflow-hidden rounded-md border border-zinc-800">
            <Image
              unoptimized
              src="https://opengraph.githubassets.com/1/frosttlink/user-hub"
              alt="User Hub"
              width={600}
              height={300}
              className="h-40 w-full object-cover transition group-hover:scale-105"
            />
          </div>

          <h3 className="text-sm font-medium text-zinc-100">User Hub</h3>

          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
            API RESTful completa para gerenciamento de usuários com CRUD,
            validações e PostgreSQL.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
            <span>Go</span>
            <span>Chi</span>
            <span>PostgreSQL</span>
            <span>Docker</span>
          </div>
        </article>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-lg border border-zinc-800 bg-zinc-950 p-6 focus:outline-none">
          <div className="flex items-start justify-between">
            <Dialog.Title className="flex items-center gap-2 text-lg font-medium text-zinc-100">
              User Hub
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
            </Dialog.Title>

            <Dialog.Close className="text-zinc-400 hover:text-zinc-100">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <div className="mt-4 overflow-hidden rounded-md border border-zinc-800">
            <Image
              unoptimized
              src="https://opengraph.githubassets.com/1/frosttlink/user-hub"
              alt="User Hub"
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>

          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            API RESTful completa para gerenciamento de usuários desenvolvida em
            Go com PostgreSQL. Implementa operações CRUD com validações
            robustas, UUIDs, queries parameterizadas e containerização com
            Docker Compose.
          </p>

          <ul className="mt-4 space-y-2 text-sm list-inside list-disc text-zinc-400">
            <li>CRUD completo com 5 endpoints RESTful</li>
            <li>Validações de entrada em todos os campos</li>
            <li>Queries parameterizadas contra SQL Injection</li>
            <li>Geração de UUIDs para identificadores únicos</li>
            <li>Containerização com Docker Compose</li>
          </ul>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
            <span>Go</span>
            <span>Chi</span>
            <span>PostgreSQL</span>
            <span>Docker</span>
            <span>UUID</span>
            <span>slog</span>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <ProjectLinks githubUrl="https://github.com/frosttlink/user-hub" />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
