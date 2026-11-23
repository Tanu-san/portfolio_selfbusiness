import { contact, hero } from "@/lib/content";

export function ContactSection() {
  const hasFormUrl = Boolean(contact.formUrl && contact.formUrl.trim() !== "");

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
              相談・問い合わせ
            </h2>
            <p className="pt-2 text-sm leading-[1.9] text-slate-300 sm:text-base">
              リサーチ課題の整理、はじめてのマーケティング・新規事業企画のご相談など、まずはお気軽にお問い合わせください（初回相談無料）。
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            {hasFormUrl && (
              <a
                href={contact.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-white px-8 py-4 text-sm font-bold tracking-wider text-slate-950 transition-all duration-300 hover:bg-slate-200"
              >
                <span>相談フォームから問い合わせる</span>
                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            )}

            <a
              href={`mailto:${contact.email}`}
              className={`group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-wider transition-all duration-300 ${
                hasFormUrl
                  ? "border border-slate-700 bg-transparent text-slate-200 hover:border-white hover:text-white"
                  : "bg-white text-slate-950 hover:bg-slate-200"
              }`}
            >
              <span>メールで相談する（{contact.email}）</span>
              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
        </div>

        <footer className="mt-16 space-y-4 border-t border-slate-200/80 pt-8 text-xs tracking-wider text-slate-500">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <p className="font-bold text-slate-900">{hero.name}</p>
            <p>{contact.note}</p>
          </div>
          <p className="text-slate-400">
            &copy; 2026 {hero.name}. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
