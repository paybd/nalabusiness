import Image from "next/image";
import Faq from "@/components/Faq";
import RatesCalculator from "@/components/RatesCalculator";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <div className="font-sans">
      {/* হিরো সেকশন - গভীর নীল গ্রেডিয়েন্ট */}
      <section id="hero" className="relative overflow-hidden bg-[linear-gradient(180deg,#071736_0%,#0b2a69_40%,#0a1030_100%)] text-white min-h-screen pt-16 flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <Image src="/assets/hero.jpg" alt="Hero background" fill className="object-cover opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,20,40,0.0)_0%,rgba(10,16,48,0.6)_70%)]" />
          <div className="absolute inset-0" style={{backgroundImage:"radial-gradient(1px 1px at 25px 25px, rgba(255,255,255,0.25) 1px, transparent 1px)",backgroundSize:"50px 50px",opacity:0.15}} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs text-white/90">
              <span>Fast & Secure</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Send love home <span className="text-sky-300">🩵</span>
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Join 500k+ customers worldwide.
            </p>
           
            <div className="mt-6 flex items-center gap-2 text-white/80">
              <div className="flex items-center gap-1 text-yellow-400">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="text-sm">4.8 store rating</span>
            </div>
          </div>
          <div className="relative">
            <RatesCalculator />
          </div>
        </div>
      </section>

      <section className="relative bg-neutral-50 min-h-screen flex items-center justify-center">
        {/* decorative corner images */}
        <div className="absolute inset-0">
          <Image src="/assets/1.avif" alt="" width={256} height={256} className="absolute top-6 left-4 sm:top-8 sm:left-8 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full object-cover shadow-2xl ring-4 ring-white/70 transition-transform duration-300 ease-out hover:scale-110 select-none" />
          <Image src="/assets/2.avif" alt="" width={256} height={256} className="absolute top-6 right-4 sm:top-8 sm:right-8 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full object-cover shadow-2xl ring-4 ring-white/70 transition-transform duration-300 ease-out hover:scale-110 select-none" />
          <Image src="/assets/3.avif" alt="" width={256} height={256} className="absolute bottom-6 left-4 sm:bottom-8 sm:left-8 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full object-cover shadow-2xl ring-4 ring-white/70 transition-transform duration-300 ease-out hover:scale-110 select-none" />
          <Image src="/assets/4.avif" alt="" width={256} height={256} className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full object-cover shadow-2xl ring-4 ring-white/70 transition-transform duration-300 ease-out hover:scale-110 select-none" />
        </div>
        {/* কেন্দ্রের টেক্সট */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900">
            Trusted by <span className="text-sky-600">500,000+</span> customers worldwide
          </h2>
          <p className="mt-4 text-lg text-neutral-700">Instant, affordable and secure transfers across the US, UK, EU, Africa and Asia.</p>
          <a href="/nala_business.apk" className="mt-6 inline-flex rounded-full bg-sky-600 text-white px-6 py-3 text-sm font-medium">Download NALA</a>
        </div>
      </section>

      {/* Two-row feature layout */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: Text block with decorative floating cards */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Send money to your family</h2>
              <p className="mt-4 text-neutral-700 max-w-prose">Sending remittances home is now easier and safer.</p>
              <p className="mt-3 text-neutral-700 max-w-prose">Use the NALA app to send money quickly to loved ones.</p>
              <div className="mt-8 relative h-80 sm:h-96">
                {/* halo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-64 w-64 sm:h-72 sm:w-72 rounded-full bg-sky-100/60 blur-0" />
                </div>
                {/* top pill */}
                <div className="absolute left-1/2 -translate-x-1/2 top-10 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 px-4 py-3 flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-700">💙</span>
                  <span className="text-sm text-neutral-800">Sent to Mom ✅</span>
                </div>
                {/* middle card */}
                <div className="absolute left-1/2 -translate-x-1/2 top-28 sm:top-32 w-[320px] sm:w-[360px] rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 px-5 py-4 flex items-center gap-3">
                  <Image src="/assets/1.avif" alt="Friend avatar" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="font-medium text-neutral-900">Send to NALA friends</div>
                    <div className="mt-1 text-xs text-neutral-600">Select contact</div>
                  </div>
                  <span className="text-xl">👋</span>
                </div>
                {/* bottom pill */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[280px] rounded-2xl bg-white shadow-xl ring-1 ring-black/5 px-4 py-3 flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-700">💙</span>
                  <span className="text-sm text-neutral-800">Received $100 from bestie!</span>
                </div>
              </div>
            </div>

            {/* Right: Feature card */}
            <div>
              <div className="rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-sky-100 flex items-center justify-center ring-1 ring-sky-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 text-sky-700">
                      <path d="M4 14l4-4 4 4 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">Great rates, fully compliant</h3>
                    <p className="mt-2 text-neutral-700">Send your hard-earned money home whenever you want. Enjoy competitive, compliant rates.</p>
                    <p className="mt-2 text-neutral-800"><span className="font-semibold">Send up to 1,000,000 BDT per day</span> — anytime, from your phone.</p>
                  </div>
                </div>
              </div>
              {/* Desktop-only: Stay in Control card stacked under the right card */}
              <div className="hidden md:block mt-6 rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">Stay in full control</h3>
                <p className="mt-2 text-neutral-700">Track every transfer with real-time updates and instant notifications.</p>
              </div>
            </div>
          </div>

          {/* Mobile-only full-width: Stay in Control card */}
          <div className="md:hidden mt-10 sm:mt-12 rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 p-6 sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">Stay in full control</h3>
            <p className="mt-2 text-neutral-700 max-w-3xl">Track every transfer with real-time updates and instant notifications.</p>
          </div>
        </div>
      </section>

     

      {/* QR Download section (per provided design) */}
      <section className="py-16 sm:py-24 bg-[#071736] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Large phone mockup with real screenshot */}
            <div className="relative mx-auto w-full max-w-md aspect-[9/19]">
              <div className="absolute inset-0 rounded-[3rem] bg-neutral-900 shadow-2xl" />
              <div className="absolute left-3 right-3 top-4 bottom-4 rounded-[2.5rem] bg-black overflow-hidden">
                <Image src="/assets/phone.png" alt="NALA app screenshot" fill className="object-cover" />
              </div>
            </div>

            {/* Right: Heading, QR, CTA */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">Scan the QR Code to<br />Download NALA!</h2>
              <div className="mt-8 flex items-center gap-8">
                {/* QR with yellow ring */}
                <div className="rounded-2xl bg-white p-3 ring-8 ring-yellow-300">
                  <Image src="/qr.png" alt="QR code" width={148} height={148} />
                </div>
                {/* Arrow */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 80" className="hidden sm:block h-20 w-28 text-yellow-300">
                  <path d="M10 60c30-40 70-40 100-20" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  <path d="M88 30l20 10-12 16" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <a href="/nala_business.apk" className="mt-10 inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-400 px-8 py-3 text-base font-medium shadow-lg transition">
                <span>Download</span>
                <Image src="/assets/logo_3.svg" alt="NALA" width={54} height={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Frequently Asked Questions</h2>
          <div className="mt-6">
            <Faq />
          </div>
        </div>
      </section>

      
    </div>
  );
}
