import {
  NewEdgeHome,
  TheGlowHome,
  SciLeadsHome,
  SecondLifeHome,
} from "images/projects";

export const Projects = [
  {
    clientName: "NewEdge Studio",
    slug: "new-edge-studio",
    url: "https://newedgestud.io",
    background: "blue",
    homeImage: NewEdgeHome,
    desktopImages: [
      "/projects/new-edge-desktop-1.webp",
      "/projects/new-edge-desktop-2.webp",
    ],
    mobileImages: [
      "/projects/the-glow-mob-1.webp",
      "/projects/the-glow-mob-2.webp",
      "/projects/the-glow-mob-3.webp",
    ],
    year: "2023",
    team: ["Evan Oliver", "Nic Reeves"],
    category: "UX/UI Design & Web Development",
    desc: "NewEdge Studio is a marketing agency based in London focused mainly on branding and web. The brief was to create a clean, yet memorable website which would showcase their previous work and attract new clients.",
    jpDesc:
      "NewEdge Studioは、ロンドンを拠点にブランディングとウェブを中心としたマーケティングを行う会社です。彼らのこれまでの仕事を紹介し、新しいクライアントを惹きつけるような、クリーンで印象的なウェブサイトを制作することがブリーフでした。",
  },

  {
    clientName: "The Glow",
    slug: "the-glow",
    url: "https://theglow.jp",
    background: "red",
    homeImage: TheGlowHome,
    desktopImages: [
      "/projects/the-glow-desktop-1.webp",
      "/projects/the-glow-desktop-2.webp",
    ],
    mobileImages: [
      "/projects/the-glow-mob-1.webp",
      "/projects/the-glow-mob-2.webp",
      "/projects/the-glow-mob-3.webp",
    ],
    year: "2022",
    category: "Branding, UX/UI Design & Web Development",
    desc: "The Glow is an English language Japanese music publication, aimed at introudcing Japanese music to an English speaking audience. The original code base was quite messy, and quite difficult to maintain, so the aim was to refactor the code into maintainable modern components and update the design to reflect the change in content direction.",
    jpDesc:
      "The Glowは、英語圏のオーディエンスに日本の音楽を紹介することを目的とした、英語版の日本の音楽出版物です。オリジナルのコードベースはかなりごちゃごちゃしており、メンテナンスが大変でした。そこで、コードをメンテナンス可能な最新のコンポーネントにリファクタリングし、コンテンツの方向性の変化を反映するためにデザインを更新することを目的としました。",
  },
  {
    clientName: "SciLeads",
    slug: "scileads",
    url: "https://scileads.com",
    background: "yellow",
    homeImage: SciLeadsHome,
    desktopImages: [
      "/projects/scileads-desktop-1.webp",
      "/projects/scileads-desktop-2.webp",
    ],
    mobileImages: [
      "/projects/scileads-mob-1.webp",
      "/projects/scileads-mob-2.webp",
      "/projects/scileads-mob-3.webp",
    ],
    year: "2021",
    team: ["Cait Skinner"],
    category: "Web Development",
    desc: "SciLeads is a lead generation service in the life sciences industry. Data protection is of the utmost importance to SciLeads, so the challenge was to create a self-hosted CSM which was only accessible behind the companys VPN, but was also accessible to deployment pipelines. Contact forms and third-party APIs were all routed through the company .NET API which I maintained.",
    jpDesc:
      "SciLeads は、ライフサイエンス業界におけるリードジェネレーションサービスです。データ保護は SciLeads にとって最も重要であるため、会社の VPN の後ろでのみアクセス可能で、かつ展開パイプラインにアクセス可能なセルフホスティングの CSM を作成することが課題でした。コンタクトフォームとサードパーティのAPIはすべて、私が管理する会社の.NET APIを経由してルーティングされました。",
  },
  {
    clientName: "Second Life",
    slug: "second-life",
    url: "https://secondlifefp.co.uk",
    background: "blue",
    homeImage: SecondLifeHome,
    desktopImages: [
      "/projects/second-life-desktop-1.webp",
      "/projects/second-life-desktop-2.webp",
    ],
    mobileImages: [
      "/projects/second-life-mob-1.webp",
      "/projects/second-life-mob-2.webp",
      "/projects/second-life-mob-3.webp",
    ],
    year: "2022",
    category: "UX/UI Design & Web Development",
    desc: "Second Life is a British financial planning service. The goal was to create a website that would reflect the company's commitment to transparency and trust. Due to the older clientelle of Second Life, an emphasis was put on simple and accessible design.",
    jpDesc:
      "Second Lifeは、イギリスのファイナンシャルプランニングサービスです。目標は、透明性と信頼性を重視する同社の姿勢を反映したウェブサイトを作成することでした。セカンドライフの顧客は年配の方が多いため、シンプルでわかりやすいデザインが重視されました。",
  },
];
