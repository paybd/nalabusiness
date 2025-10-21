"use client";

import Accordion from "@/components/Accordion";

export default function Faq() {
  return (
    <Accordion
      items={[
        { id: "q1", question: "NALA কী?", answer: "একটি আন্তর্জাতিক মানি ট্রান্সফার অ্যাপ, যার মাধ্যমে UK, US ও EU এবং Middle East থেকে বিশ্বের নানা দেশে সহজে টাকা পাঠানো যায়।" },
        { id: "q2", question: "ট্রান্সফারের সীমা কত?", answer: "আপনার দেশ ও অ্যাকাউন্ট টাইপ অনুসারে প্রতিদিন ১০ লক্ষ টাকার মতো পাঠানো যায়।" },
        { id: "q3", question: "কোন কোন দেশে পাঠানো যায়?", answer: "UK, US ও EU থেকে আফ্রিকা ও এশিয়ার বিভিন্ন দেশে—আরও দেশ যুক্ত হচ্ছে।" },
        { id: "q4", question: "টাকা পৌঁছাতে কত সময় লাগে?", answer: "গন্তব্য ও পেমেন্ট মেথড অনুযায়ী ৯৫% ট্রান্সফার সাথে সাথে সম্পন্ন হয়।" },
        { id: "b1", question: "NALA Business কীভাবে কাজ করে?", answer: "বিভিন্ন দেশ এ রিসেলার নিয়োগ দিয়ে বাল্ক এক্সচেঞ্জ রেট দেওয়ার মাধ্যমে NALA বিজনেস সম্প্রসারণ করে " },
        { id: "b2", question: "বিজনেস অ্যাকাউন্ট খুলতে কী দরকার?", answer: "বৈধ পরিচয়পত্র এবং বেসিক KYC।" },
        { id: "b3", question: "বিজনেস রেট কীভাবে পাবো?", answer: (
          <span>
            আমাদের টিমের সাথে কথা বলতে <a className="underline" href="https://wa.me/?text=আমি NALA Business রেট জানতে চাই" target="_blank" rel="noopener noreferrer">WhatsApp-এ বার্তা দিন</a>।
          </span>
        ) },
      ]}
      defaultOpenId="q1"
      variant="light"
    />
  );
}


