import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { X } from "lucide-react";
import { ProjectLinks } from "../ui/projetct-links";

export function IgniteTimerProject() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <article className="group cursor-pointer rounded-lg border border-zinc-800 bg-zinc-950 p-4 transition hover:border-zinc-700">
          <div className="mb-4 overflow-hidden rounded-md border border-zinc-800">
            <Image
              src="https://opengraph.githubassets.com/1/frosttlink/ignite-timer"
              alt="Ignite Timer"
              width={600}
              height={300}
              className="h-40 w-full object-cover transition group-hover:scale-105"
            />
          </div>

          <h3 className="text-sm font-medium text-zinc-100">Ignite Timer</h3>

          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
            Aplicação de Pomodoro para gerenciamento de ciclos de foco e
            produtividade.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
            <span>React</span>
            <span>TypeScript</span>
            <span>Vite</span>
            <span>LocalStorage</span>
            <span>Hooks</span>
          </div>
        </article>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-lg border border-zinc-800 bg-zinc-950 p-6 focus:outline-none">
          <div className="flex items-start justify-between">
            <Dialog.Title className="flex items-center gap-2 text-lg font-medium text-zinc-100">
              Ignite Timer
              <span className="inline-block rounded-full w-2 h-2 bg-emerald-500 mt-1" />
            </Dialog.Title>

            <Dialog.Close className="text-zinc-400 hover:text-zinc-100">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <div className="mt-4 overflow-hidden rounded-md border border-zinc-800">
            <Image
              src="https://opengraph.githubassets.com/1/frosttlink/ignite-timer"
              alt="Ignite Timer"
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>

          <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
            Ignite Timer é uma aplicação focada em produtividade utilizando a
            técnica Pomodoro. Permite criar ciclos de foco personalizados,
            acompanhar o histórico de atividades e manter o estado salvo entre
            sessões.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-zinc-400 list-disc list-inside">
            <li>Criação e controle de ciclos de foco</li>
            <li>Contador de tempo em tempo real</li>
            <li>Histórico de ciclos concluídos e interrompidos</li>
            <li>Persistência de dados com LocalStorage</li>
            <li>Gerenciamento de estado com React Hooks</li>
          </ul>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
            <span>React</span>
            <span>TypeScript</span>
            <span>Vite</span>
            <span>Context API</span>
            <span>LocalStorage</span>
            <span>Productivity</span>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <ProjectLinks
              githubUrl="https://github.com/frosttlink/ignite-timer"
              liveUrl="https://ignite-timer-beryl.vercel.app/"
              />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
