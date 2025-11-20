import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import localFont from "next/font/local";
import "./globals.css";

const banglaFont = localFont({
  src: [
    { path: "../../public/fonts/uni_bangla_regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/uni_bangla_semibold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/uni_bangla_bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Remitly — Send Remittance To Your Home",
  description: "Fast, affordable and secure international remittances. Join 500k+ customers.",
  icons: {
    icon: "/assets/logo_3.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${banglaFont.className} antialiased bg-white text-neutral-900`}>
        <Header />
        <main>{children}</main>
        <footer className="bg-[linear-gradient(180deg,#0b2a69_0%,#0a1030_100%)] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <Image src="/assets/logo_3.svg" alt="Remitly" width={100} height={100} />
               
              </div>
              <p className="mt-3 text-sm text-white/80">#TheNextExchanger</p>
              <div className="mt-4 flex items-center gap-3 text-sm text-white/80">
                <Link href="#" className="hover:underline">X</Link>
                <Link href="#" className="hover:underline">Instagram</Link>
                <Link href="#" className="hover:underline">YouTube</Link>
              </div>
            </div>
            <div className="text-sm text-white/90 grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-4">
              <div>
                <h3 className="font-medium mb-2">Community</h3>
                <ul className="space-y-1">
                  <li><Link href="#" className="hover:underline">Our Roadmap</Link></li>
                  <li><Link href="#" className="hover:underline">Live Updates</Link></li>
                  <li><Link href="#" className="hover:underline">Build with Remitly</Link></li>
                  <li><Link href="#" className="hover:underline">Remitly Merch Store</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Company</h3>
                <ul className="space-y-1">
                  <li><Link href="#" className="hover:underline">Our Story</Link></li>
                  <li><Link href="#" className="hover:underline">FAQ</Link></li>
                  <li><Link href="#" className="hover:underline">Press</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Transparency</h3>
                <ul className="space-y-1">
                  <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
                  <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:underline">Cookies</Link></li>
                  <li><Link href="#" className="hover:underline">Complaints</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Contact</h3>
                <ul className="space-y-1">
                  <li><a href="mailto:mamaRemitly@Remitly.com" className="hover:underline">mamaRemitly@Remitly.com</a></li>
                  <li className="text-white/80">USA · NL · UK · KE</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-white/70">
              <p>© Remitly INC 2025. Licensed in partnership with regulated entities in the UK, EU and US. Customer funds are safeguarded in segregated accounts where applicable.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
