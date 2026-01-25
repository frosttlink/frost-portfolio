import { Header } from "@/components/header";
import { Profile } from "@/components/profile";
import { CoffeeShopProject } from "@/components/projetcts/coffee-shop";
import { DtMoneyProject } from "@/components/projetcts/dt-money";
import { IgniteShopProject } from "@/components/projetcts/ignite-shop";
import { WebhookInspectorProject } from "@/components/projetcts/webhook-inspector";
import { Stacks } from "@/components/stacks";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <Profile />

          <div className="flex flex-col gap-6">
            <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Stacks
            </h2>
            <Stacks />
          </div>
        </div>

        <div id="#projetos">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500 mt-10">
            Projetos
          </h2>

          <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
            <WebhookInspectorProject />
            <CoffeeShopProject />
            <IgniteShopProject />
            <DtMoneyProject />
          </div>
        </div>
      </main>
    </div>
  );
}
