import { HeroSection } from "@/components/HeroSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { MethodologySection } from "@/components/MethodologySection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProfileAndLinksSection } from "@/components/ProfileAndLinksSection";
import { ContactSection } from "@/components/ContactSection";
import { hero } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-950">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="text-base font-bold tracking-[0.08em] text-slate-950 transition-opacity hover:opacity-75"
          >
            {hero.name}
          </a>

          <nav aria-label="ページ内ナビゲーション" className="hidden md:block">
            <ul className="flex items-center gap-7 text-xs font-medium tracking-wider text-slate-600">
              <li>
                <a
                  href="#capabilities"
                  className="transition-colors hover:text-slate-950"
                >
                  できること
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="transition-colors hover:text-slate-950"
                >
                  進め方
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className="transition-colors hover:text-slate-950"
                >
                  実績
                </a>
              </li>
              <li>
                <a
                  href="#methodology"
                  className="transition-colors hover:text-slate-950"
                >
                  方法論
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-slate-950"
                >
                  サービス
                </a>
              </li>
              <li>
                <a
                  href="#profile"
                  className="transition-colors hover:text-slate-950"
                >
                  プロフィール
                </a>
              </li>
            </ul>
          </nav>

          <a
            href="#contact"
            className="bg-slate-950 px-4 py-2 text-xs font-bold tracking-wider text-white transition-colors hover:bg-slate-800"
          >
            相談する（無料）
          </a>
        </div>
      </header>

      <main>
        <HeroSection />
        <CapabilitiesSection />
        <ProcessSection />
        <AchievementsSection />
        <MethodologySection />
        <ServicesSection />
        <ProfileAndLinksSection />
        <ContactSection />
      </main>
    </div>
  );
}
