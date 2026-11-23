import { SERVICES } from "@/lib/content";

export function ServicesSection() {
  const activeServices = SERVICES.filter((s) => s.isAvailable);
  const upcomingServices = SERVICES.filter((s) => !s.isAvailable);

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
              key={service.id}
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
                    {service.description}
                  </p>
                </div>

                <div className="shrink-0">
                  <a
                    href={service.ctaHref}
                    className="group inline-flex items-center gap-3 bg-slate-950 px-7 py-4 text-sm font-bold tracking-wider text-white transition-all duration-300 hover:bg-slate-800"
                  >
                    <span>{service.ctaLabel}</span>
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
              key={service.id}
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
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
