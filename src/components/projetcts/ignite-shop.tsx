import * as Dialog from "@radix-ui/react-dialog"
import Image from "next/image"
import { X } from "lucide-react"
import { ProjectLinks } from "../ui/projetct-links"

export function IgniteShopProject() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <article className="group cursor-pointer rounded-lg border border-zinc-800 bg-zinc-950 p-4 transition hover:border-zinc-700">
          <div className="mb-4 overflow-hidden rounded-md border border-zinc-800">
            <Image
              src="https://opengraph.githubassets.com/1/frosttlink/ignite-shop"
              alt="Ignite Timer"
              width={600}
              height={300}
              className="h-40 w-full object-cover transition group-hover:scale-105"
            />
          </div>

          <h3 className="text-sm font-medium text-zinc-100">Ignite Shop</h3>

          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
             E-commerce de camisetas com carrinho e integração Stripe.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
            <span>Next.js</span>
            <span>React</span>
            <span>Stitches</span>
            <span>Stripe</span>
          </div>
        </article>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-lg border border-zinc-800 bg-zinc-950 p-6 focus:outline-none">
          <div className="flex items-start justify-between">
            <Dialog.Title className="flex items-center gap-2 text-lg font-medium text-zinc-100">
              Ignite Shop
              <span className="inline-block rounded-full w-2 h-2 bg-emerald-500 mt-1" />
            </Dialog.Title>

            <Dialog.Close className="text-zinc-400 hover:text-zinc-100">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <div className="mt-4 overflow-hidden rounded-md border border-zinc-800">
            <Image
              src="https://opengraph.githubassets.com/1/frosttlink/ignite-shop"
              alt="DT Money"
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>

          <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
            Ignite Shop é um e-commerce de camisetas construído com Next.js e
            React. Possui catálogo de produtos, sistema de carrinho, checkout
            integrado com Stripe, estilização com Stitches e uso de SSR/SSG para
            performance.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-zinc-400 list-disc list-inside">
            <li>Catálogo de camisetas</li>
            <li>Carrinho de compras com React Hooks</li>
            <li>Checkout com Stripe</li>
            <li>Estilização com Stitches</li>
            <li>SSR e SSG com Next.js</li>
          </ul>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
            <span>Next.js</span>
            <span>React</span>
            <span>Stitches</span>
            <span>Stripe</span>
            <span>SSR/SSG</span>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <ProjectLinks
              githubUrl="https://github.com/frosttlink/ignite-shop"
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
