import { methodology } from "@/lib/content";

export function MethodologySection() {
  return (
    <section
      id="methodology"
      className="border-b border-slate-200/80 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 space-y-2">
          <p
            className="text-xs italic tracking-[0.25em] text-slate-400 uppercase"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Methodology
          </p>
          <h2 className="text-2xl font-bold tracking-[0.06em] text-slate-950 sm:text-3xl">
            専門領域・方法論
          </h2>
        </div>

        <div className="space-y-8">
          {/* 専門領域 */}
          <div className="border border-slate-200/90 bg-[#FAFAFA] p-8 sm:p-10">
            <div className="mb-5 flex items-center justify-between border-b border-slate-200/80 pb-4">
              <h3 className="text-base font-bold tracking-wide text-slate-950 sm:text-lg">
                専門領域
              </h3>
              <span
                className="text-sm italic text-slate-400"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Specialties
              </span>
            </div>

            <ul className="space-y-3">
              {methodology.specialties.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-[1.85] text-slate-700 sm:text-base"
                >
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 調査・分析手法 */}
          <div className="border border-slate-200/90 bg-white p-8 sm:p-10">
            <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-base font-bold tracking-wide text-slate-950 sm:text-lg">
                調査・分析手法
              </h3>
              <span
                className="text-sm italic text-slate-400"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Methods
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {methodology.methods.map((methodItem, idx) => {
                const [category, detail] = methodItem.name.split("：");
                return (
                  <div
                    key={methodItem.name}
                    className="flex flex-col justify-between border border-slate-200/80 bg-[#FAFAFA] p-6 transition-colors duration-300 hover:border-slate-400 hover:bg-white"
                  >
                    <div>
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-sm font-bold tracking-wide text-slate-950">
                          {category}
                        </span>
                        <span
                          className="text-xs italic text-slate-400"
                          style={{ fontFamily: "var(--font-cormorant), serif" }}
                        >
                          0{idx + 1}
                        </span>
                      </div>
                      {detail && (
                        <p className="text-xs leading-[1.8] text-slate-600 sm:text-sm">
                          {detail}
                        </p>
                      )}
                    </div>

                    <div className="mt-5 border-t border-slate-200/70 pt-3">
                      <span className="inline-block bg-white px-2.5 py-1 text-[11px] font-medium tracking-wider text-slate-600 ring-1 ring-slate-200/80">
                        活用領域：{methodItem.usedIn}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
