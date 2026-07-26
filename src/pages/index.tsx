import Head from "next/head";
import { Contact } from "@/components/contact";
import { Header } from "@/components/header";
import { Profile } from "@/components/profile";
import { CoffeeShopProject } from "@/components/projetcts/coffee-shop";
import { CurrencyConverterProject } from "@/components/projetcts/currency-converter";
import { DtMoneyProject } from "@/components/projetcts/dt-money";
import { GithubBlogProject } from "@/components/projetcts/github-blog";
import { IgniteShopProject } from "@/components/projetcts/ignite-shop";
import { IgniteTimerProject } from "@/components/projetcts/ignite-timer";
import { UserHubProject } from "@/components/projetcts/user-hub";
import { WebhookInspectorProject } from "@/components/projetcts/webhook-inspector";
import { Stacks } from "@/components/stacks";

export default function Home() {
  return (
    <>
      <Head>
        <title>frost.dev | Ínicio</title>
      </Head>

      <div className="min-h-screen pt-24">
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

          <section id="projetos" className="mt-10 scroll-mt-24">
            <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Projetos
            </h2>

            <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
              <WebhookInspectorProject />
              <CoffeeShopProject />
              <IgniteShopProject />
              <DtMoneyProject />
              <IgniteTimerProject />
              <CurrencyConverterProject />
              <UserHubProject />
              <GithubBlogProject />
            </div>
          </section>

          <section id="contato" className="mt-10 scroll-mt-24">
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
}
