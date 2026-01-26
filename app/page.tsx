const projects = [
  {
    title: "Mobile RT",
    description:
      "Modernization of a real-time drilling mobile app for faster field workflows.",
    tags: ["2025", "Mobile", "Operational UX"],
  },
  {
    title: "DBA Panels",
    description:
      "Monitoring panels for real-time drilling analytics across Rigsense + WellData 4.0.",
    tags: ["2024–2025", "Monitoring", "Analytics"],
  },
  {
    title: "Advanced Filtering",
    description:
      "Flexible filtering system for streaming + historical telemetry dashboards.",
    tags: ["2025", "Data UX", "Dashboards"],
  },
  {
    title: "Alarms KPI Dashboard",
    description:
      "Fleet-level alarm health KPIs and chronic asset insights for reliability teams.",
    tags: ["2026", "Reliability", "KPIs"],
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-1 text-[11px] leading-none text-neutral-700">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-[1600px] px-6 pt-8">
      {/* Top row (quiet, lots of whitespace) */}
     <header className="mx-auto max-w-[1600px] px-4 md:px-6 pt-8">

        <div className="flex items-start justify-between">
          <div className="text-sm text-neutral-700">Anna Bibikova</div>
          <a
            href="/about"
            className="text-sm text-neutral-700 hover:text-neutral-900"
          >
            ↳ About
          </a>
        </div>

        {/* Intro copy */}
        <p className="mt-6 max-w-[520px] text-[16px] leading-6 text-neutral-700">
          Product / UX designer designing data-heavy tools for operational teams. I
          focus on dashboards, monitoring, and workflow design that helps engineers
          explore and act without exporting or leaving the system.
        </p>
      </header>

      {/* Project grid */}
      <section className="mx-auto max-w-[1600px] px-3 md:px-4 pb-20 pt-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group block"
              aria-label={`Open case study: ${p.title}`}
            >
              {/* Big image tile */}
              <div className="relative overflow-hidden rounded-2xl bg-neutral-50 ring-1 ring-neutral-200/70">
  {/* “Image” placeholder */}
  <div className="aspect-[16/10] w-full transition duration-300 ease-out group-hover:scale-[1.01] group-hover:brightness-[0.98]" />

  {/* subtle gradient to make it feel less empty */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/[0.02] to-black/[0.06]" />
</div>


              {/* Title + description */}
              <div className="mt-4">
                <div className="text-sm font-medium text-neutral-900">
                  {p.title}
                </div>
                <div className="mt-1 text-sm leading-6 text-neutral-700">
                  {p.description}
                </div>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer columns (simple, editorial) */}
      <footer className="mx-auto max-w-6xl px-6 pb-16">
        <div className="border-t border-neutral-200 pt-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <div className="text-xs uppercase tracking-wider text-neutral-500">
                Contact
              </div>
              <div className="mt-3 space-y-2 text-sm text-neutral-700">
                <a className="block hover:text-neutral-900" href="mailto:youremail@example.com">
                  ↳ Email
                </a>
                <a className="block hover:text-neutral-900" href="#">
                  ↳ LinkedIn
                </a>
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-neutral-500">
                Focus
              </div>
              <div className="mt-3 space-y-1 text-sm text-neutral-700">
                <div>Operational dashboards</div>
                <div>Real-time monitoring</div>
                <div>Data filtering & UX systems</div>
              </div>
            </div>

            <div className="text-sm text-neutral-500 md:text-right">
              © {new Date().getFullYear()} Anna Bibikova
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
