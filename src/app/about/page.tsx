import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#071736_0%,#0b2a69_40%,#0a1030_100%)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">About Us</h1>
            <p className="mt-4 text-lg text-white/85 max-w-xl">
              NALA is built with a promise of affordable, fast and reliable international payments.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur ring-1 ring-white/15">
                <div className="text-2xl font-semibold">500k+</div>
                <div className="text-xs text-white/80">Users</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur ring-1 ring-white/15">
                <div className="text-2xl font-semibold">8,000+</div>
                <div className="text-xs text-white/80">Reseller agents</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur ring-1 ring-white/15">
                <div className="text-2xl font-semibold">20+</div>
                <div className="text-xs text-white/80">Countries</div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md aspect-[9/19]">
            <div className="absolute inset-0 rounded-[3rem] bg-neutral-900 shadow-2xl" />
            <div className="absolute left-3 right-3 top-4 bottom-4 rounded-[2.5rem] bg-black overflow-hidden">
              <Image src="/assets/phone.png" alt="NALA app" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Our Mission</h2>
            <p className="mt-3 text-neutral-700">We make sending money easier and more affordable worldwide. Reducing friction in money movement unlocks human potential.</p>
          </div>
          <div className="rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Our Values</h2>
            <ul className="mt-3 space-y-2 text-neutral-700 list-disc pl-5">
              <li>Customer-first decisions</li>
              <li>Transparency and trust</li>
              <li>Security and compliance</li>
              <li>Speed and accuracy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-neutral-50 shadow-2xl ring-1 ring-black/5 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Our Story</h2>
            <p className="mt-3 text-neutral-700">With teams across Africa, Europe and Asia, NALA is a trusted platform for compliant, fast and affordable payments. We combine great rates, excellent support and smart technology to deliver the best experience.</p>
          </div>
        </div>
      </section>
    </div>
  );
}


