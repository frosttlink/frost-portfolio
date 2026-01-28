import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { X } from "lucide-react";
import { ProjectLinks } from "../ui/projetct-links";

export function WebhookInspectorProject() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <article className="group cursor-pointer rounded-lg border border-zinc-800 bg-zinc-950 p-4 transition hover:border-zinc-700">
          <div className="mb-4 overflow-hidden rounded-md border border-zinc-800">
            <Image
              src="https://opengraph.githubassets.com/1/frosttlink/webhook-inspector"
              alt="Webhook Inspector"
              width={600}
              height={300}
              className="h-40 w-full object-cover transition group-hover:scale-105"
            />
          </div>

          <h3 className="text-sm font-medium text-zinc-100">
            Webhook Inspector
          </h3>

          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
            Plataforma para captura e análise de webhooks em tempo real.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>AI</span>
          </div>
        </article>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-lg border border-zinc-800 bg-zinc-950 p-6 focus:outline-none">
          <div className="flex items-start justify-between">
            <Dialog.Title className="flex items-center gap-2 text-lg font-medium text-zinc-100">
              Webhook Inspector
              <span className="inline-block rounded-full w-2 h-2 bg-emerald-500 mt-1" />
            </Dialog.Title>


            <Dialog.Close className="text-zinc-400 hover:text-zinc-100">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <div className="mt-4 overflow-hidden rounded-md border border-zinc-800">
            <Image
              src="https://opengraph.githubassets.com/1/frosttlink/webhook-inspector"
              alt="Webhook Inspector"
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>

          <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
            Plataforma completa para gerenciamento, inspeção e análise de
            webhooks. Permite capturar requisições HTTP de múltiplas fontes,
            visualizar headers, query params, body e gerar automaticamente
            handlers em TypeScript utilizando IA.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-zinc-400 list-disc list-inside">
            <li>Captura e armazenamento de webhooks em tempo real</li>
            <li>Visualização detalhada de payloads HTTP</li>
            <li>Geração automática de handlers com IA</li>
            <li>Arquitetura moderna e escalável</li>
          </ul>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Fastify</span>
            <span>PostgreSQL</span>
            <span>AI SDK</span>
          </div>

          <div className="mt-6 flex justify-end">
            <ProjectLinks
              githubUrl="https://github.com/frosttlink/webhook-inspector"
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
