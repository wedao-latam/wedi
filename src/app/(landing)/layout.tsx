import * as React from "react"


interface LandingLayoutProps {
  children: React.ReactNode
}

export default function LandingLayout({
  children,
}: LandingLayoutProps): JSX.Element {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* <Header /> */}
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}
    </div>
  )
}
