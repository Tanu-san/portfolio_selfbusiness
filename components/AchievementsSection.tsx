import { ACHIEVEMENTS } from "@/lib/content";

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="border-b border-slate-200/80 bg-[#FAFAFA] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 space-y-2">
          <p
            className="text-xs italic tracking-[0.25em] text-slate-400 uppercase"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Track Record
          </p>
          <h2 className="text-2xl font-bold tracking-[0.06em] text-slate-950 sm:text-3xl">
            実績
          </h2>
        </div>

        <div className="relative border-l border-slate-300 ml-3 sm:ml-4 space-y-10 pl-8 sm:pl-12">
          {ACHIEVEMENTS.map((item, idx) => {
            const isCurrent = idx === ACHIEVEMENTS.length - 1;
            return (
              <div
                key={`${item.company}-${item.period}`}
                className="group relative"
              >
                {/* タイムライン上のノード */}
                <span
                  className={`absolute -left-[37px] sm:-left-[53px] top-1.5 h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                    isCurrent
                      ? "border-slate-950 bg-slate-950 ring-4 ring-slate-200"
                      : "border-slate-400 bg-white group-hover:border-slate-950 group-hover:bg-slate-950"
                  }`}
                  aria-hidden="true"
                />

                <div className="grid gap-2 border-b border-slate-200/80 pb-8 sm:grid-cols-12 sm:gap-6">
                  <div className="sm:col-span-4">
                    <p className="text-xs font-semibold tracking-widest text-slate-500">
                      {item.period}
                    </p>
                    <h3 className="mt-1 text-lg font-bold tracking-wide text-slate-950">
                      {item.company}
                    </h3>
                  </div>

                  <div className="sm:col-span-8 flex items-center">
                    <p className="text-sm leading-[1.85] text-slate-700 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
