import { PROCESS_STEPS, GALLERY_PHOTOS } from "@/lib/content";
import { MonochromePhoto } from "@/components/MonochromePhoto";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="border-b border-slate-200/80 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 space-y-2">
          <p
            className="text-xs italic tracking-[0.25em] text-slate-400 uppercase"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Process
          </p>
          <h2 className="text-2xl font-bold tracking-[0.06em] text-slate-950 sm:text-3xl">
            進め方
          </h2>
        </div>

        <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {/* PC表示時の水平接続ライン */}
          <div
            className="absolute top-6 right-8 left-8 hidden h-px bg-slate-200 lg:block"
            aria-hidden="true"
          />

          {PROCESS_STEPS.map((item) => (
            <li
              key={item.step}
              className="group relative flex flex-col justify-between border border-slate-200/80 bg-[#FAFAFA] p-5 transition-colors duration-300 hover:border-slate-900 hover:bg-white lg:border-0 lg:bg-transparent lg:p-0"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-sm font-semibold tracking-wider text-slate-900 transition-colors duration-300 group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white">
                  {item.step}
                </span>
              </div>

              <div className="lg:pr-2">
                <p className="text-sm font-bold leading-snug tracking-wide text-slate-900">
                  {item.title}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* モノクロ写真のワイド・インタールード枠 */}
        <div className="mt-20">
          <MonochromePhoto
            src={GALLERY_PHOTOS.interlude.src}
            alt={GALLERY_PHOTOS.interlude.alt}
            aspectClassName="aspect-[21/9]"
            placeholderLabel="ARCHIVE / photo-accent-1.jpg"
            variant="landscape"
            className="border border-slate-200/80"
          />
        </div>
      </div>
    </section>
  );
}
