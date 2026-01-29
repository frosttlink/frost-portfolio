import { 
  Github, 
  Linkedin, 
  Mail, 
  MessageCircle 
} from "lucide-react"

export function Contact() {
  const email = "lleonh.alves@gmail.com"

  const emailSubject = encodeURIComponent("Contato via frost.dev")
  const emailBody = encodeURIComponent(
    "Olá, Léo!\n\nVi seu portfólio (frost.dev) e gostei bastante do seu trabalho. Gostaria de conversar sobre uma possível oportunidade ou projeto.\n\nFico à disposição para falarmos melhor.\n\nAbraços!",
  )

  const whatsappMessage = encodeURIComponent(
    "Olá, Léo! Tudo bem?\nVi seu portfólio (frost.dev) e curti muito seu trabalho. Gostaria de conversar sobre uma possível oportunidade ou projeto 😊",
  )

  return (
    <section id="contato" className="mt-16 scroll-mt-24 grid gap-8 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Contato
        </h2>

        <p className="text-zinc-400 leading-relaxed">
          Se quiser conversar sobre projetos, oportunidades ou trocar ideias
          sobre desenvolvimento, é só me chamar.
        </p>

        <div className="flex flex-col gap-3 mt-2">
          <a
            href="https://github.com/frosttlink"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 transition"
          >
            <Github size={18} />
            <span>github.com/frosttlink</span>
          </a>

          <a
            href="https://www.linkedin.com/in/lleoalves/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 transition"
          >
            <Linkedin size={18} />
            <span>linkedin.com/in/lleoalves</span>
          </a>
        </div>
      </div>

      <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between">
        <div className="space-y-2">
          <p className="text-zinc-200 font-medium">
            Vamos construir algo juntos?
          </p>
          <p className="text-sm text-zinc-400">
            Estou aberto a freelas, CLT e projetos interessantes.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${email}&su=${emailSubject}&body=${emailBody}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-100 hover:bg-zinc-800 transition"
          >
            <Mail size={16} />
            Email
          </a>

          <a
            href={`https://wa.me/5511972966240?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-100 hover:bg-zinc-800 transition"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
