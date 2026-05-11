import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

type Dict = typeof translations.pt;

export const translations = {
  pt: {
    nav: { about: "Estúdio", services: "Serviços", pricing: "Preços", analysis: "Análise", cta: "Análise Gratuita" },
    hero: {
      badge: "Madeira · Uma empresa do grupo Cineadd",
      title1: "Redes sociais que ",
      titleEm: "constroem impérios",
      title2: ", não apenas feeds.",
      sub: "Criamos o conteúdo cinematográfico, a estratégia e os anúncios que transformam marcas ambiciosas naquelas que todos seguem.",
      cta: "Falar no WhatsApp",
      explore: "Explorar serviços",
      stats: [
        ["+24h", "Análise de marca"],
        ["100%", "Produção interna"],
        ["Meta", "Anúncios certificados"],
      ] as [string, string][],
      studio: "Estúdio",
      city: "Funchal, Madeira",
    },
    marquee: ["Reels", "Estratégia", "Branding", "Meta Ads", "Conteúdo", "Direção"],
    about: {
      label: "01 — Estúdio",
      title1: "Uma casa criativa nascida na ",
      titleEm: "Madeira",
      titleEnd: ".",
      p1Pre: "MediaGest Creative Studios é a divisão de redes sociais da ",
      p1Brand: "Cineadd",
      p1Post: " — um grupo de cineastas, estrategistas e produtores obcecados pela forma como as marcas se movem em ecrã.",
      p2: "Do nosso estúdio na Madeira servimos restaurantes, hotéis, fundadores e marcas desafiantes em Portugal e Europa — unindo a produção de um set de cinema ao rigor de uma equipa de performance marketing.",
      cards: [
        { title: "Grupo Cineadd", text: "Herança de produção cinematográfica." },
        { title: "Sede na Madeira", text: "Luz atlântica, disciplina de ilha." },
      ],
    },
    services: {
      label: "02 — Serviços",
      title1: "O que ",
      titleEm: "construímos",
      titleEnd: " para si.",
      sub: "Um estúdio, quatro disciplinas — interligadas para que criativo, estratégia e performance nunca discordem.",
      items: [
        { title: "Reels Premium", text: "Conteúdo curto cinematográfico que para o scroll — direção, captação e edição internas." },
        { title: "Gestão Instagram & Facebook", text: "Posts diários, stories e comunidade — tom, calendário e analytics geridos de ponta a ponta." },
        { title: "Branding", text: "Sistemas visuais, tipografia e direção de arte para a marca brilhar em todas as plataformas." },
        { title: "Estratégia Meta Ads", text: "Funis, testes criativos e relatórios em Instagram e Facebook que realmente movem o ponteiro." },
      ],
    },
    pricing: {
      label: "03 — Preços",
      title1: "Planos para ",
      titleEm: "ambição",
      titleEnd: ".",
      sub: "Investimento mensal transparente. Sem custos ocultos. Cancele a qualquer momento.",
      perMonth: "/ mês",
      onRequest: "Sob consulta",
      featured: "Mais escolhido",
      start: "Começar com",
      tiers: [
        {
          name: "Starter",
          desc: "Produção mensal de conteúdo e gestão completa — cada post, story e reel otimizado para visibilidade.",
          features: ["Produção mensal de conteúdo", "Gestão completa de redes sociais", "Posts, stories e reels", "Otimização para visibilidade"],
        },
        {
          name: "Growth",
          desc: "Conteúdo premium, reels dinâmicos e Meta Ads — desenhado para crescimento acelerado e mensurável.",
          features: ["Produção de conteúdo premium", "Reels dinâmicos + posts profissionais", "Gestão avançada", "Meta Ads incluídos", "Estratégia de crescimento acelerado"],
        },
        {
          name: "Custom",
          desc: "Proposta totalmente personalizada após uma análise de marca gratuita entregue em 24 horas.",
          features: ["Análise de marca gratuita em 24h", "Proposta personalizada", "Escala de produção à medida", "Equipa de estratégia dedicada"],
        },
      ],
    },
    analysis: {
      noCommit: "Sem compromisso",
      title1: "Receba a sua análise de marca gratuita ",
      titleEm: "em 24 horas",
      titleEnd: ".",
      sub: "Envie-nos uma mensagem no WhatsApp. Auditamos a sua presença social e devolvemos um diagnóstico completo em 24 horas — seu para guardar, sem compromisso.",
      cta: "Pedir a minha análise gratuita",
      foot: "Resposta direta · WhatsApp · Madeira",
    },
    footer: {
      tagline: "Gestão cinematográfica de redes sociais para marcas que se recusam a ser invisíveis. Madeira · Parte do grupo Cineadd.",
      connect: "Contactos",
      studio: "Estúdio",
      where: "Madeira, Portugal",
      group: "Uma empresa Cineadd",
      rights: "© 2026 MediaGest Creative Studios. Todos os direitos reservados.",
      crafted: "Criado na Madeira",
    },
    wa: { msg: "Olá MediaGest, gostaria de uma análise de marca gratuita." },
  },
  en: {
    nav: { about: "Studio", services: "Services", pricing: "Pricing", analysis: "Analysis", cta: "Free Analysis" },
    hero: {
      badge: "Madeira · A Cineadd company",
      title1: "Social media that ",
      titleEm: "builds empires",
      title2: ", not just feeds.",
      sub: "We craft the cinematic content, the strategy and the ads that turn ambitious brands into the ones everyone follows.",
      cta: "Talk on WhatsApp",
      explore: "Explore services",
      stats: [
        ["+24h", "Brand analysis"],
        ["100%", "In-house production"],
        ["Meta", "Ads certified"],
      ] as [string, string][],
      studio: "Studio",
      city: "Funchal, Madeira",
    },
    marquee: ["Reels", "Strategy", "Branding", "Meta Ads", "Content", "Direction"],
    about: {
      label: "01 — Studio",
      title1: "A creative house born in ",
      titleEm: "Madeira",
      titleEnd: ".",
      p1Pre: "MediaGest Creative Studios is the social media division of ",
      p1Brand: "Cineadd",
      p1Post: " — a group of cinematographers, strategists and producers obsessed with how brands move on screen.",
      p2: "From our studio in Madeira we serve restaurants, hotels, founders and challenger brands across Portugal and Europe — pairing the production value of a film set with the rigor of a performance marketing team.",
      cards: [
        { title: "Cineadd group", text: "Film-grade production heritage." },
        { title: "Madeira HQ", text: "Atlantic light, island discipline." },
      ],
    },
    services: {
      label: "02 — Services",
      title1: "What we ",
      titleEm: "build",
      titleEnd: " for you.",
      sub: "One studio, four disciplines — wired together so creative, strategy and performance never disagree.",
      items: [
        { title: "Premium Reels", text: "Cinematic short-form built to stop the scroll — direction, shoot and edit handled in-house." },
        { title: "Instagram & Facebook Management", text: "Daily posts, stories and community — tone, calendar and analytics owned end-to-end." },
        { title: "Branding", text: "Visual systems, typography and art direction so your brand looks the part across every platform." },
        { title: "Meta Ads Strategy", text: "Funnels, creative testing and reporting on Instagram and Facebook ads that actually move the needle." },
      ],
    },
    pricing: {
      label: "03 — Pricing",
      title1: "Plans built for ",
      titleEm: "ambition",
      titleEnd: ".",
      sub: "Transparent monthly investment. No hidden fees. Cancel any time.",
      perMonth: "/ month",
      onRequest: "On request",
      featured: "Most chosen",
      start: "Start with",
      tiers: [
        {
          name: "Starter",
          desc: "Monthly content production and full management — every post, story and reel optimized for visibility.",
          features: ["Monthly content production", "Full social media management", "Posts, stories & reels", "Visibility-first optimization"],
        },
        {
          name: "Growth",
          desc: "Premium content, dynamic reels and Meta ads — designed for accelerated, measurable growth.",
          features: ["Premium content production", "Dynamic reels + pro posts", "Advanced management", "Meta ads included", "Accelerated growth strategy"],
        },
        {
          name: "Custom",
          desc: "A fully personalized proposal after a free brand analysis delivered to you in 24 hours.",
          features: ["Free brand analysis in 24h", "Personalized proposal", "Bespoke production scale", "Dedicated strategy team"],
        },
      ],
    },
    analysis: {
      noCommit: "No commitment",
      title1: "Get your free brand analysis ",
      titleEm: "in 24 hours",
      titleEnd: ".",
      sub: "Send us a message on WhatsApp. We'll audit your social presence and return a complete diagnosis within 24 hours — yours to keep, no strings attached.",
      cta: "Request my free analysis",
      foot: "Direct response · WhatsApp · Madeira",
    },
    footer: {
      tagline: "Cinematic social media management for brands that refuse to be invisible. Madeira · Part of the Cineadd group.",
      connect: "Connect",
      studio: "Studio",
      where: "Madeira, Portugal",
      group: "A Cineadd company",
      rights: "© 2026 MediaGest Creative Studios. All rights reserved.",
      crafted: "Crafted in Madeira",
    },
    wa: { msg: "Hello MediaGest, I'd like a free brand analysis." },
  },
} as const;

const I18nCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict; waUrl: string }>({
  lang: "pt",
  setLang: () => {},
  t: translations.pt,
  waUrl: "",
});

const PHONE = "351963162323";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (stored === "pt" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", l);
      document.documentElement.lang = l;
    }
  };

  const t = translations[lang] as Dict;
  const waUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(t.wa.msg)}`;

  return <I18nCtx.Provider value={{ lang, setLang, t, waUrl }}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);
