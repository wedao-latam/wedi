import { type NavItem, type NavItemFooter, type SidebarNavItem } from "@/types";


import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

const links = {
  github:
    "https://github.com/wedao-latam/wedi",
  twitter: "https://twitter.com/broomva_tech",
  linkedin: "https://www.linkedin.com/in/broomva_tech",
  discord: "",
  authorsWebsite: "https://wedao-latam.com",
  authorsGitHub: "https://github.com/broomva",
  openGraphImage: "https://wedaolatam.com/images/opengraph-image.png",
}

export const siteConfig = {
  name: "Wedi",
  description:
    "Wedi is a digital platform leveraging stablecoins and AI to provide a secure, efficient solution for multi-currency savings, spending, and transactions, addressing local currency devaluation and offering personalized financial management.",
  links,
  url: "https://wedaolatam.com",
  ogImage: links.openGraphImage,
  author: "wedao-latam",
  hostingRegion: "fra1",
  keywords: ["SaaS", "Next.js", "Template"],
  navItems: [
    // {
    //   title: "Docs",
    //   href: "/docs",
    // },
    // {
    //   title: "Blog",
    //   href: "/blog",
    // },
    {
      title: "FAQ",
      href: "/faq",
    },
    // {
    //   title: "Pricing",
    //   href: "/pricing",
    // },
  ] satisfies NavItem[],
  navItemsMobile: [],
  navItemsFooter: [
    {
      title: "Company",
      items: [
        {
          title: "Dashboard",
          href: "/dahboard",
          external: false,
        },
        {
          title: "About",
          href: "/about",
          external: false,
        },
        {
          title: "Privacy",
          href: "/privacy",
          external: false,
        },
        {
          title: "Terms",
          href: "/tos",
          external: false,
        },
        {
          title: "Careers",
          href: "/careers",
          external: false,
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          title: "Docs",
          href: "/docs",
          external: false,
        },
        {
          title: "FAQ",
          href: "/faq",
          external: false,
        },
        {
          title: "Blog",
          href: "/blog",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
      ],
    },
  ] satisfies NavItemFooter[],
}


export const footerLinks: SidebarNavItem[] = [
  {
    title: "Support",
    items: [
      {
        title: "Docs",
        href: "/docs",
        external: false,
      },
      {
        title: "FAQ",
        href: "/faq",
        external: false,
      },
      {
        title: "Blog",
        href: "/blog",
        external: false,
      },
      {
        title: "Contact",
        href: "/contact",
        external: false,
      },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "#" },
      { title: "Customization", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  // {
  //   title: "Docs",
  //   items: [
  //     { title: "Introduction", href: "#" },
  //     { title: "Installation", href: "#" },
  //     { title: "Components", href: "#" },
  //     { title: "Code Blocks", href: "#" },
  //   ],
  // },
];
