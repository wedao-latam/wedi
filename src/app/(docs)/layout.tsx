import Link from "next/link";

import { DocsSearch } from "@/components/docs/search";
import { DocsSidebarNav } from "@/components/docs/sidebar-nav";
// import { NavBar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { Icons } from "@/components/shared/icons";
import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
// import SessionProvider from "@/context/session";

import { Header } from "@/components/nav/header";
interface DocsLayoutProps {
  children: React.ReactNode;
}



export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">

    <div className="flex flex-1 items-center space-x-4 sm:justify-end">
        <div className="hidden lg:flex lg:grow-0">
          <DocsSearch />
        </div>
        <div className="flex lg:hidden">
          <Icons.search className="size-6 text-muted-foreground" />
        </div>
        <nav className="flex space-x-4">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <Icons.gitHub className="size-7" />
            <span className="sr-only">GitHub</span>
          </Link>
        </nav>
      </div>
      {/* <SessionProvider> */}
      {/* <NavBar items={docsConfig.mainNav} rightElements={rightHeader()}/> */}
      <Header/>
      <DocsSidebarNav items={docsConfig.sidebarNav} />
      {/* </NavBar> */}
      <div className="container flex-1">{children}</div>
      <SiteFooter className="border-t" />

    </div>
  );
}
