import { METHODOLOGIES } from "@/lib/content";

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
            方法論
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
          {METHODOLOGIES.map((method, idx) => (
            <div
              key={method.category}
              className="flex flex-col justify-between bg-white p-8 transition-colors duration-300 hover:bg-[#FAFAFA]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-base font-bold tracking-wide text-slate-950 sm:text-lg">
                    {method.category}
                  </h3>
                  <span
                    className="text-sm italic text-slate-300"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    0{idx + 1}
                  </span>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {method.items.map((subItem) => (
                    <li
                      key={subItem}
                      className="border border-slate-200/90 bg-[#FAFAFA] px-3.5 py-1.5 text-xs font-medium tracking-wide text-slate-700 sm:text-sm"
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
