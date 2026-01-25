import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";

export function DtMoneyProject() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <article className="group cursor-pointer rounded-lg border border-zinc-800 bg-zinc-950 p-4 transition hover:border-zinc-700">
          <div className="mb-4 overflow-hidden rounded-md border border-zinc-800">
            <Image
              src="https://opengraph.githubassets.com/1/frosttlink/dt-money"
              alt="DT Money"
              width={600}
              height={300}
              className="h-40 w-full object-cover transition group-hover:scale-105"
            />
          </div>

          <h3 className="text-sm font-medium text-zinc-100">
            DT Money
          </h3>

          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
            Aplicação de controle financeiro para registrar transações e
            visualizar resumos.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
            <span>React</span>
            <span>TypeScript</span>
            <span>Vite</span>
            <span>Context API</span>
          </div>
        </article>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-lg border border-zinc-800 bg-zinc-950 p-6 focus:outline-none">
          <div className="flex items-start justify-between">
            <Dialog.Title className="text-lg font-medium text-zinc-100">
              DT Money
            </Dialog.Title>

            <Dialog.Close className="text-zinc-400 hover:text-zinc-100">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <div className="mt-4 overflow-hidden rounded-md border border-zinc-800">
            <Image
              src="https://opengraph.githubassets.com/1/frosttlink/dt-money"
              alt="DT Money"
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>

          <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
            DT Money é uma aplicação de gerenciamento financeiro construída com
            React e Vite. Permite adicionar e visualizar transações, mostrando
            resumos de entradas, saídas e saldo.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-zinc-400 list-disc list-inside">
            <li>Gerenciamento de transações (entradas e saídas)</li>
            <li>Resumo financeiro de forma clara</li>
            <li>Estado global via Context API</li>
            <li>Estilização com CSS moderno</li>
          </ul>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
            <span>React</span>
            <span>TypeScript</span>
            <span>Vite</span>
            <span>Context API</span>
          </div>

          <div className="mt-6 flex justify-end">
            <a
              href="https://github.com/frosttlink/dt-money"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-md border border-zinc-800
                px-4 py-2 text-sm text-zinc-300
                hover:bg-zinc-900
              "
            >
              Ver no GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
