export const SITE_META = {
  title: "谷 忠邦｜マーケティング・リサーチ支援",
  description:
    "生活者の『きもち』を数字とことばで読み解く、リサーチとブランディングの支援",
} as const;

export const HERO_CONTENT = {
  name: "谷 忠邦",
  imageSrc: "/profile.jpg",
  imageAlt: "谷 忠邦のプロフィール写真",
  title:
    "マーケティング・リサーチ プロフェッショナル／株式会社メディカ出版 マーケティング部 部長",
  statement:
    "生活者の『きもち』を数字とことばで読み解き、ブランドと新規事業の『次の一手』を決める手伝いをします。",
  subText: "リサーチ歴15年以上。グリコ、USJ、デンソー、ダスキンを経て現職。",
  ctaLabel: "相談する（無料）",
  ctaHref: "#contact",
} as const;

export const GALLERY_PHOTOS = {
  interlude: {
    src: "/photo-accent-1.jpg",
    alt: "モノクローム写真 01",
  },
  profileSide: {
    src: "/photo-accent-2.jpg",
    alt: "モノクローム写真 02",
  },
} as const;

export const CAPABILITIES = [
  {
    id: "research",
    title: "生活者リサーチを支援",
    description:
      "定性・定量の両面から生活者のリアルな本音や行動背景を捉え、意思決定につながるインサイトを導き出します。",
  },
  {
    id: "branding",
    title: "はじめてのマーケティング・ブランディングを支援",
    description:
      "専任担当者がいない企業やチームでも実践できるよう、課題整理からターゲット設定、ブランド戦略の骨格づくりまで伴走します。",
  },
  {
    id: "new-business",
    title: "はじめての新規ビジネス企画を支援",
    description:
      "アイデアの種を顧客視点で検証し、仮説構築からコンセプト開発、初期検証の設計まで次の一手を具体化します。",
  },
] as const;

export const PROCESS_STEPS = [
  { step: "01", title: "ご相談（無料）" },
  { step: "02", title: "ご提案" },
  { step: "03", title: "お仕事依頼" },
  { step: "04", title: "お仕事実施" },
  { step: "05", title: "ご納品" },
  { step: "06", title: "お支払い" },
] as const;

export const ACHIEVEMENTS = [
  {
    company: "江崎グリコ",
    period: "2014〜2022",
    description:
      "ポッキー、ビスコ、SUNAOなど主要ブランドを担当。新商品・大型リニューアル20件以上、グローバル・プロジェクト20件以上",
  },
  {
    company: "USJ",
    period: "2022〜2023",
    description: "LTV全体戦略、顧客セグメンテーションの開発と実行",
  },
  {
    company: "デンソー",
    period: "2023〜2024",
    description: "全社CX戦略の立案、UX評価アプリの開発",
  },
  {
    company: "ダスキン",
    period: "2024",
    description: "ミスタードーナツ事業の短中長期計画策定",
  },
  {
    company: "株式会社メディカ出版",
    period: "2024年12月〜",
    description: "マーケティング部 部長（2026年10月〜）",
  },
] as const;

export const METHODOLOGIES = [
  {
    category: "質的調査",
    items: ["デプスインタビュー", "家庭訪問", "行動観察"],
  },
  {
    category: "量的調査",
    items: ["アンケート", "ソーシャルリスニング"],
  },
  {
    category: "データ分析",
    items: ["定量・定性データの統合分析", "課題構造化・インサイト抽出"],
  },
  {
    category: "生活者セグメンテーション",
    items: ["価値観・行動ベースの顧客理解", "ターゲット戦略設計"],
  },
] as const;

export const SERVICES = [
  {
    id: "tads-research-supports",
    name: "Tad's Research Supports",
    status: "受付中" as const,
    isAvailable: true,
    description:
      "リサーチ設計・実査支援・データ分析・マーケティング課題の壁打ちなど、状況に合わせて柔軟にサポートします。",
    ctaLabel: "相談する（無料）",
    ctaHref: "#contact",
  },
  {
    id: "insight-report",
    name: "インサイト解読レポート",
    status: "準備中" as const,
    isAvailable: false,
    description:
      "既存データや生活者の声をもとに、ブランドの次の一手につながる構造化されたインサイトレポートを提供します。",
  },
  {
    id: "career-inventory",
    name: "キャリア棚卸しサポート",
    status: "準備中" as const,
    isAvailable: false,
    description:
      "対話と構造化のアプローチで、これまでの経験・強み・価値観を言語化し、次のキャリアの方向性を整理します。",
  },
  {
    id: "brand-scope",
    name: "ブランドスコープ",
    status: "準備中" as const,
    isAvailable: false,
    description:
      "生活者視点からブランドの現在地と伸びしろを可視化し、ポジショニングと戦略の優先順位を明確にします。",
  },
] as const;

export const PROFILE_CONTENT = {
  education: [
    "神戸市外国語大学 国際関係学科",
    "大阪大学大学院 人間科学研究科 修士",
  ],
  certifications: [
    "産業カウンセラー",
    "上級心理カウンセラー",
    "生成AIパスポート",
    "ITパスポート",
    "TOEIC 790",
  ],
} as const;

export const SOCIAL_LINKS = [
  {
    name: "note",
    handle: "researchandmetal",
    url: "https://note.com/researchandmetal",
  },
  {
    name: "X",
    handle: "@tadloveresearch",
    url: "https://x.com/tadloveresearch",
  },
  {
    name: "LinkedIn",
    handle: "Tadakuni Tani",
    url: "https://www.linkedin.com/in/tadakunitani89585a42/",
  },
] as const;

export const CONTACT_CONTENT = {
  heading: "相談・問い合わせ",
  description:
    "リサーチやマーケティング、新規事業に関するご相談は、下記フォームまたはメールよりお気軽にお問い合わせください。",
  googleFormLabel: "Googleフォームから相談する",
  googleFormUrl: "#",
  emailLabel: "メールで問い合わせる",
  email: "communication.works.2010@gmail.com",
} as const;
