import WaitlistSection from "@/components/sections/waitlist-section";

export default function Waitlist(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-background-light">
      <header className="flex flex-col items-center justify-center gap-2 mb-2">
      </header>
      <div className="container mx-auto">
        <WaitlistSection />
      </div>
      
    </div>
  )
}
