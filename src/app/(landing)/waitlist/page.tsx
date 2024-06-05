import WaitlistSection from "@/components/sections/waitlist-section";
import Image from "next/image";

export default function Waitlist(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-background-light">
      <header className="flex flex-col items-center justify-center gap-2 mb-2">
        <div className="flex items-center gap-4">
          <h1 className="animate-fade-up font-urbanist text-4xl font-extrabold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl flex items-center">
            {/* <span className="bg-gradient-to-r from-green-400 to-blue-800 bg-clip-text font-extrabold text-transparent">
              Wedi
            </span> */}
            <Image src="/logo.png" alt="Wedi Logo" width={50} height={50} className="py-10"/>
          </h1>
        </div>
      </header>
      <div className="container mx-auto">
        <WaitlistSection />
      </div>
    </div>
  )
}
