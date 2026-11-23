import { services, serviceNote } from "@/lib/content";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-b border-slate-200/80 bg-[#FAFAFA] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 space-y-2">
          <p
            className="text-xs italic tracking-[0.25em] text-slate-400 uppercase"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Services
          </p>
          <h2 className="text-2xl font-bold tracking-[0.06em] text-slate-950 sm:text-3xl">
            サービス
          </h2>
        </div>

        {/* 全4サービス（すべて準備中・申込ボタンなし） */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="flex flex-col justify-between border border-slate-200/90 bg-white p-8"
            >
              <div>
                <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                  <span
                    className="text-2xl italic font-semibold tracking-wider text-slate-300"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    0{index + 1}
                  </span>
                  <span className="border border-slate-300 bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium tracking-wider text-slate-600">
                    {service.status}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-bold tracking-wide text-slate-950">
                  {service.name}
                </h3>

                <p className="text-sm leading-[1.85] text-slate-600">
                  {service.body}
                </p>

                {service.expertise && (
                  <div className="mt-4 border-l-2 border-slate-300 pl-3.5">
                    <p className="text-xs leading-[1.8] text-slate-500">
                      {service.expertise}
                    </p>
                  </div>
                )}
              </div>

              {service.price && (
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-xs font-medium leading-relaxed text-slate-800">
                    {service.price}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 注意事項と相談への誘導 */}
        <div className="mt-10 flex flex-col justify-between gap-6 border border-slate-200/90 bg-white p-6 sm:flex-row sm:items-center sm:p-8">
          <p className="text-xs leading-[1.8] text-slate-600">
            ※ {serviceNote}
          </p>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2.5 border border-slate-950 bg-slate-950 px-6 py-3.5 text-xs font-bold tracking-wider text-white transition-colors hover:bg-slate-800"
          >
            <span>まずは無料で相談する</span>
            <span
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
