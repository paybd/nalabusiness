import Image from "next/image";

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[linear-gradient(180deg,#071736_0%,#0b2a69_40%,#0a1030_100%)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">Remitly for Business</h1>
            <p className="mt-4 text-lg text-white/85 max-w-xl">
              Become a Remitly Business agent abroad and unlock great earning opportunities.
            </p>
            <a
              href="https://github.com/paybd/nalabusiness/raw/refs/heads/main/public/remitly_v1.apk"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2c415a] hover:bg-[#3a526d] px-6 py-3 text-base font-medium text-white shadow-lg transition"
              aria-label="Download Business App"
            >
              Download Business App
            </a>
          </div>
          <div className="relative mx-auto w-full max-w-md aspect-[9/19]">
            <div className="absolute inset-0 rounded-[3rem] bg-neutral-900 shadow-2xl" />
            <div className="absolute left-3 right-3 top-4 bottom-4 rounded-[2.5rem] bg-black overflow-hidden">
              <Image src="/assets/phone.jpg" alt="Remitly Business app screenshot" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Why Remitly Business?</h2>
          <p className="mt-4 text-neutral-700">Top compliant rates, super-fast settlement, extra commissions and great support — all in one platform.</p>
        </div>
      </section>
    </div>
  );
}


