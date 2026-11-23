import {
  PROFILE_CONTENT,
  SOCIAL_LINKS,
  GALLERY_PHOTOS,
} from "@/lib/content";
import { MonochromePhoto } from "@/components/MonochromePhoto";

export function ProfileAndLinksSection() {
  return (
    <section
      id="profile"
      className="border-b border-slate-200/80 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* 左側：7. プロフィール & 8. 発信 */}
          <div className="space-y-14 lg:col-span-7">
            {/* 7. プロフィール */}
            <div>
              <div className="mb-8 space-y-2">
                <p
                  className="text-xs italic tracking-[0.25em] text-slate-400 uppercase"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Profile
                </p>
                <h2 className="text-2xl font-bold tracking-[0.06em] text-slate-950 sm:text-3xl">
                  プロフィール
                </h2>
              </div>

              <div className="space-y-8 border border-slate-200/90 bg-[#FAFAFA] p-8">
                <div>
                  <h3 className="mb-3 text-xs font-bold tracking-[0.15em] text-slate-400">
                    学歴
                  </h3>
                  <ul className="space-y-2 text-sm font-medium leading-relaxed text-slate-900">
                    {PROFILE_CONTENT.education.map((edu) => (
                      <li key={edu}>{edu}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-200/80 pt-6">
                  <h3 className="mb-3 text-xs font-bold tracking-[0.15em] text-slate-400">
                    資格
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {PROFILE_CONTENT.certifications.map((cert) => (
                      <li
                        key={cert}
                        className="border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium tracking-wide text-slate-800"
                      >
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 8. 発信 */}
            <div>
              <div className="mb-8 space-y-2">
                <p
                  className="text-xs italic tracking-[0.25em] text-slate-400 uppercase"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Publications &amp; Social
                </p>
                <h2 className="text-2xl font-bold tracking-[0.06em] text-slate-950 sm:text-3xl">
                  発信
                </h2>
              </div>

              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-5 transition-colors hover:bg-[#FAFAFA] px-2"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="w-24 text-sm font-bold tracking-wide text-slate-950">
                        {link.name}
                      </span>
                      <span className="text-xs tracking-wider text-slate-500 transition-colors group-hover:text-slate-900 sm:text-sm">
                        {link.handle}
                      </span>
                    </div>

                    <span
                      className="text-sm text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-slate-950"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 右側：モノクロ写真フレーム */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[360px] lg:max-w-none">
              <MonochromePhoto
                src={GALLERY_PHOTOS.profileSide.src}
                alt={GALLERY_PHOTOS.profileSide.alt}
                aspectClassName="aspect-[3/4]"
                placeholderLabel="ARCHIVE / photo-accent-2.jpg"
                variant="portrait"
                className="border border-slate-200/90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
