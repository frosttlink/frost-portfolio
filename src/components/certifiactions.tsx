import { useEffect, useState } from "react";
import { ExternalLink, GraduationCap, X } from "lucide-react";
import Link from "next/link";

type CertificateType = {
  id: number;
  titulo: string;
  instituicao: string;
  inicio: string;
  conclusao: string;
  descricao: string;
  conteudos: string[];
  link: string;
};

export function Certifications() {
  const [certs, setCerts] = useState<CertificateType[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("/certificates.json")
      .then((res) => res.json())
      .then((data: CertificateType[]) => {
        const ordenado = data.sort((a, b) =>
          b.conclusao.localeCompare(a.conclusao),
        );
        setCerts(ordenado);
      });
  }, []);

  const mostCertificates = certs.slice(0, 2);

  return (
    <section id="certificados" className="max-w-6xl mx-auto">
      <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500 pb-4">
        Certificações
      </h2>

      <div className="grid gap-4">
        {mostCertificates.map((certificate) => (
          <a
            key={certificate.id}
            href={certificate.link}
            target="_blank"
            className="group rounded-lg border border-zinc-800 p-5 hover:border-zinc-600 transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-3">
                <GraduationCap className="text-zinc-400 mt-1" size={20} />
                <div>
                  <p className="text-zinc-100 font-medium group-hover:underline">
                    {certificate.titulo}
                  </p>
                  <p className="text-sm text-zinc-400">
                    {certificate.instituicao}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    {certificate.inicio} — {certificate.conclusao}
                  </p>
                </div>
              </div>
              <ExternalLink
                size={16}
                className="text-zinc-500 group-hover:text-zinc-300"
              />
            </div>
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-6 text-sm text-zinc-400 hover:text-zinc-100 transition"
      >
        Ver mais →
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-xl bg-zinc-950 border border-zinc-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-zinc-100">
                Todas as certificações
              </h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-zinc-400 hover:text-zinc-100"
              >
                <X />
              </button>
            </div>

            <div className="grid gap-5">
              {certs.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  className="rounded-lg border border-zinc-800 p-5 hover:border-zinc-600 transition"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <GraduationCap className="text-zinc-400 mt-1" size={20} />
                    <div>
                      <p className="text-zinc-100 font-medium">{cert.titulo}</p>
                      <p className="text-sm text-zinc-400">
                        {cert.instituicao}
                      </p>
                      <p className="text-xs text-zinc-500">
                        {cert.inicio} — {cert.conclusao}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 mb-3">{cert.descricao}</p>

                  <ul className="flex flex-wrap gap-2">
                    {cert.conteudos.map((item) => (
                      <li
                        key={item}
                        className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </a>
              ))}
            </div>

            <div className="flex items-center justify-center mt-5">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/lleoalves/details/certifications/"
              >
                Ver todos certificados
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
