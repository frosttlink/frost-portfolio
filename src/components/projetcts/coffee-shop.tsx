import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";

export function CoffeeShopProject() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <article className="group cursor-pointer rounded-lg border border-zinc-800 bg-zinc-950 p-4 transition hover:border-zinc-700">
          <div className="mb-4 overflow-hidden rounded-md border border-zinc-800">
            <Image
              src="https://opengraph.githubassets.com/1/frosttlink/coffee-shop"
              alt="Coffee Shop"
              width={600}
              height={300}
              className="h-40 w-full object-cover transition group-hover:scale-105"
            />
          </div>

          <h3 className="text-sm font-medium text-zinc-100">
            Coffee Shop
          </h3>

          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
            Pequeno app de e-commerce de cafés com UI completa, carrinho e fluxo
            de confirmação.
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
            <Dialog.Title className="text-lg font-medium text-zinc-100">
              Coffee Shop
            </Dialog.Title>

            <Dialog.Close className="text-zinc-400 hover:text-zinc-100">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <div className="mt-4 overflow-hidden rounded-md border border-zinc-800">
            <Image
              src="https://opengraph.githubassets.com/1/frosttlink/coffee-shop"
              alt="Coffee Shop"
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>

          <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
            Aplicação SPA de e-commerce de cafés desenvolvida com React e Vite.
            Possui catálogo de produtos, gerenciamento de carrinho, checkout e
            tela de confirmação de pedido.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-zinc-400 list-disc list-inside">
            <li>Catálogo de cafés carregado via data.json</li>
            <li>Fluxo completo de carrinho e checkout</li>
            <li>Context API para estado global do carrinho</li>
            <li>Rotas com react-router-dom</li>
            <li>Tema claro/escuro com Tailwind + CSS variables</li>
          </ul>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
            <span>React 19</span>
            <span>Vite</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>React Router</span>
            <span>Context API</span>
          </div>

          <div className="mt-6 flex justify-end">
            <a
              href="https://github.com/frosttlink/coffee-shop"
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
