import { services, serviceNote } from "@/lib/content";

export function ServicesSection() {
  const activeServices = services.filter((s) => s.status === "受付中");
  const upcomingServices = services.filter((s) => s.status !== "受付中");

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

        {/* 受付中のメインサービス */}
        <div className="space-y-6">
          {activeServices.map((service) => (
            <div
              key={service.name}
              className="border border-slate-900 bg-white p-8 shadow-sm sm:p-10"
            >
              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div className="max-w-2xl space-y-4">
                  <div className="inline-flex items-center gap-2.5 border border-slate-950 bg-slate-950 px-3 py-1 text-xs font-bold tracking-widest text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{service.status}</span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-wide text-slate-950">
                    {service.name}
                  </h3>

                  <p className="text-sm leading-[1.85] text-slate-600 sm:text-base">
                    {service.body}
                  </p>

                  {service.expertise && (
                    <div className="border-l-2 border-slate-300 pl-3.5 pt-0.5">
                      <p className="text-xs leading-[1.8] text-slate-500 sm:text-sm">
                        {service.expertise}
                      </p>
                    </div>
                  )}
                </div>

                <div className="shrink-0">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-3 bg-slate-950 px-7 py-4 text-sm font-bold tracking-wider text-white transition-all duration-300 hover:bg-slate-800"
                  >
                    <span>無料で相談する</span>
                    <span
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 準備中の3サービス（申込ボタンなし） */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {upcomingServices.map((service) => (
            <div
              key={service.name}
              className="flex flex-col justify-between border border-slate-200/90 bg-white/80 p-7"
            >
              <div>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="border border-slate-300 bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium tracking-wider text-slate-500">
                    {service.status}
                  </span>
                </div>

                <h3 className="mb-3 text-base font-bold tracking-wide text-slate-900">
                  {service.name}
                </h3>

                <p className="text-sm leading-[1.8] text-slate-600">
                  {service.body}
                </p>

                {service.expertise && (
                  <p className="mt-4 border-l-2 border-slate-200 pl-3 text-xs leading-[1.75] text-slate-500">
                    {service.expertise}
                  </p>
                )}
              </div>

              {service.price && (
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-xs font-medium leading-relaxed text-slate-700">
                    {service.price}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 注意事項・お受けできないご依頼について */}
        <p className="mt-8 text-xs leading-[1.8] text-slate-500">
          ※ {serviceNote}
        </p>
      </div>
    </section>
  );
}
