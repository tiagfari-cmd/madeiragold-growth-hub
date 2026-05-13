import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

type Dict = typeof translations.pt;

export const translations = {
  pt: {
    nav: { about: "Estúdio", services: "Serviços", pricing: "Preços", analysis: "Análise", cta: "Análise Gratuita" },
    hero: {
      badge: "Madeira · Uma empresa do grupo Cineadd",
      title1: "Redes sociais que ",
      titleEm: "vendem",
      title2: ". Não apenas publicam.",
      sub: "Criativo de cinema, estratégia de performance e anúncios Meta numa só equipa. Aceitamos seis marcas por trimestre.",
      cta: "Pedir análise de marca",
      explore: "Ver serviços",
      stats: [
        ["24h", "Diagnóstico entregue"],
        ["6", "Marcas por trimestre"],
        ["100%", "Produção interna"],
      ] as [string, string][],
      studio: "Estúdio",
      city: "Funchal, Madeira",
    },
    marquee: ["Reels de cinema", "Meta Ads", "Branding", "Direção criativa", "Performance", "Conteúdo diário"],
    about: {
      label: "01 — Estúdio",
      title1: "Um estúdio. ",
      titleEm: "Quatro disciplinas",
      titleEnd: ". Zero ruído.",
      p1Pre: "MediaGest é a divisão de redes sociais da ",
      p1Brand: "Cineadd",
      p1Post: ". Filmamos, escrevemos, lançamos e medimos — o mesmo briefing passa por uma só mesa.",
      p2: "Servimos hotéis, restaurantes, fundadores e marcas desafiantes em Portugal e na Europa. Trabalhamos com poucas marcas para cada uma ter prioridade real.",
      cards: [
        { title: "Set de cinema", text: "Direção, captação e pós internas." },
        { title: "Mesa de performance", text: "Estratégia e Meta Ads sob o mesmo teto." },
      ],
    },
    services: {
      label: "02 — Serviços",
      title1: "O que ",
      titleEm: "entregamos",
      titleEnd: ".",
      sub: "Quatro frentes alinhadas. Cada uma com um indicador claro — visualizações, alcance qualificado, identidade ou retorno em anúncios.",
      items: [
        { title: "Reels de cinema", text: "Direção, captação e edição internas. Construídos para parar o scroll nos primeiros 1,5 segundos." },
        { title: "Gestão Instagram & Facebook", text: "Calendário, copy, stories e comunidade. Tom de marca consistente, publicado todos os dias úteis." },
        { title: "Branding", text: "Identidade visual, tipografia e direção de arte que se mantém de pé numa montra, num reel e num anúncio." },
        { title: "Meta Ads", text: "Funis, criativos testados em iteração semanal e relatórios sem jargão. Foco em CPA, não em likes." },
      ],
    },
    pricing: {
      label: "03 — Preços",
      title1: "Investimento ",
      titleEm: "claro",
      titleEnd: ".",
      sub: "Mensalidade fixa. Zero custos ocultos. Sem fidelização.",
      perMonth: "/ mês",
      onRequest: "Sob consulta",
      featured: "Recomendado",
      start: "Reservar lugar",
      tiers: [
        {
          name: "Starter",
          desc: "Para marcas que querem presença consistente, profissional e sem gestão interna.",
          features: ["12 posts mensais", "Stories diários", "2 reels editados", "Gestão de comunidade", "Relatório mensal"],
        },
        {
          name: "Growth",
          desc: "Para quem quer escalar com criativo de cinema e Meta Ads no mesmo plano.",
          features: ["20 posts mensais", "4 reels de cinema", "Gestão avançada", "Meta Ads (gestão incluída)", "Reuniões quinzenais"],
        },
        {
          name: "Custom",
          desc: "Para hotéis, grupos e marcas que precisam de produção dedicada à medida.",
          features: ["Diagnóstico gratuito em 24h", "Equipa dedicada", "Produção em escala", "Estratégia integrada"],
        },
      ],
    },
    results: {
      label: "04 — Provas",
      title1: "Números que ",
      titleEm: "falam",
      titleEnd: " antes de nós.",
      sub: "Trabalho recente do estúdio em hotelaria, restauração e marcas de autor.",
      items: [
        { k: "+1.2M", v: "Visualizações orgânicas em 90 dias" },
        { k: "4,7×", v: "ROAS médio em campanhas Meta" },
        { k: "+38%", v: "Reservas diretas para parceiro hoteleiro" },
        { k: "<1,5s", v: "Hook médio nos nossos reels" },
      ],
      sectors: ["Hotelaria", "Restauração", "Imobiliário", "Autor & Fundadores", "Retalho premium"],
    },
    analysis: {
      noCommit: "Apenas 6 vagas por trimestre",
      title1: "Diagnóstico da sua marca, ",
      titleEm: "em 24 horas",
      titleEnd: ".",
      sub: "Auditamos a sua presença social e entregamos um relatório acionável em 24 horas. Sem proposta automática, sem compromisso.",
      cta: "Quero o meu diagnóstico",
      foot: "Resposta direta do diretor criativo · WhatsApp",
    },
    footer: {
      tagline: "Estúdio de gestão cinematográfica de redes sociais. Madeira · Grupo Cineadd.",
      connect: "Contactos",
      studio: "Estúdio",
      where: "Madeira, Portugal",
      group: "Uma empresa Cineadd",
      rights: "© 2026 MediaGest Creative Studios. Todos os direitos reservados.",
      crafted: "Criado na Madeira",
    },
    wa: { msg: "Olá MediaGest, gostaria de pedir o diagnóstico de marca." },
  },
  en: {
    nav: { about: "Studio", services: "Services", pricing: "Pricing", analysis: "Analysis", cta: "Free Analysis" },
    hero: {
      badge: "Madeira · A Cineadd company",
      title1: "Social media that ",
      titleEm: "sells",
      title2: ". Not just posts.",
      sub: "Cinematic creative, performance strategy and Meta ads under one roof. We accept six brands per quarter.",
      cta: "Request brand audit",
      explore: "See services",
      stats: [
        ["24h", "Audit delivered"],
        ["6", "Brands per quarter"],
        ["100%", "In-house production"],
      ] as [string, string][],
      studio: "Studio",
      city: "Funchal, Madeira",
    },
    marquee: ["Cinematic reels", "Meta Ads", "Branding", "Creative direction", "Performance", "Daily content"],
    about: {
      label: "01 — Studio",
      title1: "One studio. ",
      titleEm: "Four disciplines",
      titleEnd: ". Zero noise.",
      p1Pre: "MediaGest is the social media arm of ",
      p1Brand: "Cineadd",
      p1Post: ". We shoot, write, launch and measure — every brief sits at one table.",
      p2: "We work with hotels, restaurants, founders and challenger brands across Portugal and Europe. Few clients at a time, so each one gets real priority.",
      cards: [
        { title: "Film set", text: "Direction, shoot and post handled in-house." },
        { title: "Performance desk", text: "Strategy and Meta ads under the same roof." },
      ],
    },
    services: {
      label: "02 — Services",
      title1: "What we ",
      titleEm: "deliver",
      titleEnd: ".",
      sub: "Four disciplines, one team. Each measured against a clear KPI — views, qualified reach, identity or ad return.",
      items: [
        { title: "Cinematic reels", text: "Direction, shoot and edit handled in-house. Built to stop the scroll in the first 1.5 seconds." },
        { title: "Instagram & Facebook", text: "Calendar, copy, stories and community. Consistent brand voice, shipped every weekday." },
        { title: "Branding", text: "Visual identity, typography and art direction that holds up in a window, a reel and an ad." },
        { title: "Meta Ads", text: "Funnels, weekly creative iteration and jargon-free reporting. We track CPA, not likes." },
      ],
    },
    pricing: {
      label: "03 — Pricing",
      title1: "Pricing made ",
      titleEm: "clear",
      titleEnd: ".",
      sub: "Flat monthly fee. Zero hidden costs. No long-term lock-in.",
      perMonth: "/ month",
      onRequest: "On request",
      featured: "Recommended",
      start: "Claim seat",
      tiers: [
        {
          name: "Starter",
          desc: "For brands that need consistent, professional presence without managing it in-house.",
          features: ["12 monthly posts", "Daily stories", "2 edited reels", "Community management", "Monthly report"],
        },
        {
          name: "Growth",
          desc: "For brands ready to scale, combining cinematic content and Meta ads in one plan.",
          features: ["20 monthly posts", "4 cinematic reels", "Advanced management", "Meta Ads (managed)", "Bi-weekly reviews"],
        },
        {
          name: "Custom",
          desc: "For hotels, groups and brands that need dedicated production at scale.",
          features: ["Free 24h diagnosis", "Dedicated team", "Production at scale", "Integrated strategy"],
        },
      ],
    },
    results: {
      label: "04 — Proof",
      title1: "Numbers that ",
      titleEm: "speak",
      titleEnd: " before we do.",
      sub: "Recent studio work across hospitality, restaurants and founder-led brands.",
      items: [
        { k: "+1.2M", v: "Organic views in 90 days" },
        { k: "4.7×", v: "Average ROAS on Meta" },
        { k: "+38%", v: "Direct bookings for hotel partner" },
        { k: "<1.5s", v: "Average hook on our reels" },
      ],
      sectors: ["Hospitality", "Restaurants", "Real estate", "Founders & authors", "Premium retail"],
    },
    analysis: {
      noCommit: "Only 6 seats per quarter",
      title1: "Your brand diagnosis, ",
      titleEm: "in 24 hours",
      titleEnd: ".",
      sub: "We audit your social presence and send back an actionable report within 24 hours. No automated proposal. No commitment.",
      cta: "Get my diagnosis",
      foot: "Direct reply from the creative director · WhatsApp",
    },
    footer: {
      tagline: "Cinematic social media studio. Madeira · Cineadd group.",
      connect: "Connect",
      studio: "Studio",
      where: "Madeira, Portugal",
      group: "A Cineadd company",
      rights: "© 2026 MediaGest Creative Studios. All rights reserved.",
      crafted: "Crafted in Madeira",
    },
    wa: { msg: "Hello MediaGest, I'd like to request the brand diagnosis." },
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
