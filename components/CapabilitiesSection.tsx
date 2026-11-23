import { CAPABILITIES } from "@/lib/content";

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="border-b border-slate-200/80 bg-[#FAFAFA] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 space-y-2">
          <p
            className="text-xs italic tracking-[0.25em] text-slate-400 uppercase"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Capabilities
          </p>
          <h2 className="text-2xl font-bold tracking-[0.06em] text-slate-950 sm:text-3xl">
            できること
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {CAPABILITIES.map((item, index) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between border border-slate-200/90 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-md"
            >
              {/* 上部のアクセントバー */}
              <span
                className="absolute top-0 left-0 h-[2px] w-0 bg-slate-950 transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />

              <div>
                <div className="mb-6 flex items-baseline justify-between border-b border-slate-100 pb-4">
                  <span
                    className="text-3xl italic font-semibold tracking-wider text-slate-300 transition-colors duration-300 group-hover:text-slate-900"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    0{index + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-200 transition-colors duration-300 group-hover:bg-slate-900" />
                </div>

                <h3 className="mb-4 text-lg font-bold leading-snug tracking-wide text-slate-950">
                  {item.title}
                </h3>

                <p className="text-sm leading-[1.85] text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
