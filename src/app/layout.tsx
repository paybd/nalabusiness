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
  title: "NALA — পরিবারের কাছে ভালোবাসা পাঠান",
  description: "দ্রুত, সাশ্রয়ী ও নিরাপদ আন্তর্জাতিক রেমিট্যান্স সেবা। ৫ লক্ষ+ গ্রাহকদের সাথে যুক্ত হোন।",
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
    <html lang="bn">
      <body className={`${banglaFont.className} antialiased bg-white text-neutral-900`}>
        <Header />
        <main>{children}</main>
        <footer className="bg-[linear-gradient(180deg,#0b2a69_0%,#0a1030_100%)] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <Image src="/assets/logo_3.svg" alt="NALA" width={100} height={100} />
               
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
                <h3 className="font-medium mb-2">কমিউনিটি</h3>
                <ul className="space-y-1">
                  <li><Link href="#" className="hover:underline">আমাদের রোডম্যাপ</Link></li>
                  <li><Link href="#" className="hover:underline">লাইভ আপডেট</Link></li>
                  <li><Link href="#" className="hover:underline">NALA দিয়ে তৈরি করুন</Link></li>
                  <li><Link href="#" className="hover:underline">NALA মার্চ স্টোর</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">কোম্পানি</h3>
                <ul className="space-y-1">
                  <li><Link href="#" className="hover:underline">আমাদের গল্প</Link></li>
                  
                  <li><Link href="#" className="hover:underline">প্রশ্নোত্তর</Link></li>
                  <li><Link href="#" className="hover:underline">প্রেস</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">স্বচ্ছতা</h3>
                <ul className="space-y-1">
                  <li><Link href="#" className="hover:underline">সেবার শর্তাবলী</Link></li>
                  <li><Link href="#" className="hover:underline">গোপনীয়তা নীতি</Link></li>
                  <li><Link href="#" className="hover:underline">কুকিজ</Link></li>
                  <li><Link href="#" className="hover:underline">অভিযোগ</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">যোগাযোগ</h3>
                <ul className="space-y-1">
                  <li><a href="mailto:mamanala@nala.com" className="hover:underline">mamanala@nala.com</a></li>
                  <li className="text-white/80">USA · NL · UK · KE</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-white/70">
              <p>© NALA INC ২০২৫। যুক্তরাজ্য, ইউরোপীয় ইউনিয়ন ও যুক্তরাষ্ট্রের নিয়ন্ত্রিত প্রতিষ্ঠানের সাথে অংশীদারিত্বে লাইসেন্সপ্রাপ্ত। প্রযোজ্য ক্ষেত্রে গ্রাহকের অর্থ পৃথক অ্যাকাউন্টে সুরক্ষিত থাকে।</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
