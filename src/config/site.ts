import { type NavItem, type NavItemFooter, type SidebarNavItem } from "@/types";


import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

const links = {
  github:
    "https://github.com/wedao-latam/wedi",
  twitter: "https://twitter.com/wedao-latam",
  linkedin: "https://www.linkedin.com/in/wedao-latam",
  discord: "",
  authorsWebsite: "https://wedao-latam.com",
  authorsGitHub: "https://github.com/wedao-latam",
  openGraphImage: "https://wedaolatam.com/images/opengraph-image.png",
}

export const siteConfig = {
  name: "Wedi",
  description:
    "An open-source starter for Next.js 14 full-stack projects with advanced authentication and several database configurations. The aim of this project is to provide a solid foundation for faster building and launching SaaS products, marketing sites, blogs, and more.",
  links,
  url: "https://wedaolatam.com",
  ogImage: links.openGraphImage,
  author: "wedao-latam",
  hostingRegion: "fra1",
  keywords: ["SaaS", "Next.js", "Template"],
  navItems: [
    {
      title: "Docs",
      href: "/docs",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
  ] satisfies NavItem[],
  navItemsMobile: [],
  navItemsFooter: [
    {
      title: "Company",
      items: [
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



// export const siteConfig: SiteConfig = {
//   name: "Wedi",
//   description:
//     "Get your project off to an explosive start with Wedi Harness the power of Next.js 14, Prisma, Neon, Auth.js v5, Resend, React Email, Shadcn/ui and Stripe to build your next big thing.",
//   url: site_url,
//   ogImage: `${site_url}/og.jpg`,
//   links: {
//     twitter: "https://twitter.com/miickasmt",
//     github: "https://github.com/wedao-latam/wedi-frontend",
//   },
//   mailSupport: "support@gowedi.com",
// };

export const footerLinks: SidebarNavItem[] = [
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
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Components", href: "#" },
      { title: "Code Blocks", href: "#" },
    ],
  },
];
