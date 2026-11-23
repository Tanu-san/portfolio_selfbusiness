import { CONTACT_CONTENT, HERO_CONTENT } from "@/lib/content";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#FAFAFA] pt-20 pb-14 sm:pt-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="bg-slate-950 p-10 text-white sm:p-16">
          <div className="max-w-2xl space-y-4">
            <p
              className="text-xs italic tracking-[0.25em] text-slate-400 uppercase"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Contact
            </p>
            <h2 className="text-2xl font-bold tracking-[0.06em] text-white sm:text-3xl">
              {CONTACT_CONTENT.heading}
            </h2>
            <p className="pt-2 text-sm leading-[1.9] text-slate-300 sm:text-base">
              {CONTACT_CONTENT.description}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={CONTACT_CONTENT.googleFormUrl}
              className="group inline-flex items-center justify-center gap-3 bg-white px-8 py-4 text-sm font-bold tracking-wider text-slate-950 transition-all duration-300 hover:bg-slate-200"
            >
              <span>{CONTACT_CONTENT.googleFormLabel}</span>
              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            <a
              href={`mailto:${CONTACT_CONTENT.email}`}
              className="inline-flex items-center justify-center border border-slate-700 bg-transparent px-7 py-4 text-sm font-medium tracking-wide text-slate-200 transition-colors duration-300 hover:border-white hover:text-white"
            >
              {CONTACT_CONTENT.emailLabel}（{CONTACT_CONTENT.email}）
            </a>
          </div>
        </div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-8 text-xs tracking-wider text-slate-500 sm:flex-row">
          <p className="font-bold text-slate-900">{HERO_CONTENT.name}</p>
          <p>&copy; 2026 {HERO_CONTENT.name}. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
