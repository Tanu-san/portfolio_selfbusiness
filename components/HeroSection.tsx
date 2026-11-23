import { hero } from "@/lib/content";
import { MonochromePhoto } from "@/components/MonochromePhoto";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-white pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10">
          {/* 左側：テキスト・メッセージ */}
          <div className="space-y-8 md:col-span-7">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-6 bg-slate-900" />
                <span
                  className="text-xs italic tracking-[0.22em] text-slate-500 uppercase"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Marketing &amp; Consumer Research
                </span>
              </div>

              <div className="space-y-1 text-xs font-medium leading-relaxed tracking-wide text-slate-600 sm:text-sm">
                <p>{hero.title}</p>
                <p>{hero.company}</p>
              </div>

              <div className="flex flex-wrap items-baseline gap-4 pt-1">
                <h1 className="text-4xl font-bold tracking-[0.06em] text-slate-950 sm:text-5xl">
                  {hero.name}
                </h1>
                <span className="text-sm font-medium tracking-widest text-slate-500">
                  （{hero.ruby}）
                </span>
              </div>
            </div>

            <div className="border-l-2 border-slate-900 pl-5">
              <p className="text-lg font-bold leading-[1.85] tracking-wide text-slate-900 sm:text-xl">
                {hero.lead}
              </p>
            </div>

            <p className="text-sm leading-relaxed tracking-wide text-slate-600">
              {hero.note}
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-slate-950 px-8 py-4 text-sm font-bold tracking-wider text-white transition-all duration-300 hover:bg-slate-800"
              >
                <span>相談する（無料）</span>
                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          {/* 右側：モノクロ・ポートレート枠 */}
          <div className="mx-auto w-full max-w-[280px] sm:max-w-[320px] md:col-span-5 md:max-w-none">
            <div className="relative">
              <div
                className="absolute -right-3 -bottom-3 h-full w-full border border-slate-300/90 bg-slate-50"
                aria-hidden="true"
              />
              <MonochromePhoto
                src={hero.photo}
                alt={`${hero.name}のプロフィール写真`}
                aspectClassName="aspect-[4/5]"
                placeholderLabel="PORTRAIT / profile.jpg"
                variant="portrait"
                className="relative z-10 border border-slate-200 shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
