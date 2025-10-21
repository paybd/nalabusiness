"use client";

import Accordion from "@/components/Accordion";

export default function Faq() {
  return (
    <Accordion
      items={[
        { id: "q1", question: "What is NALA?", answer: "An international money transfer app that lets you send from the UK, US and EU (and the Middle East) to many countries worldwide." },
        { id: "q2", question: "What are the transfer limits?", answer: "Depending on your country and account type, you can send up to 1,000,000 BDT per day (or equivalent)." },
        { id: "q3", question: "Which countries can I send to?", answer: "From the UK, US and EU to several countries in Africa and Asia — with more being added." },
        { id: "q4", question: "How fast do transfers arrive?", answer: "95% of transfers complete instantly depending on destination and payout method." },
        { id: "b1", question: "How does NALA Business work?", answer: "We expand via local resellers and offer competitive exchange rates for bulk settlements." },
        { id: "b2", question: "What do I need to open a business account?", answer: "Valid ID and basic KYC documents." },
        { id: "b3", question: "How do I get business rates?", answer: (
          <span>
            Talk to our team on <a className="underline" href="https://wa.me/?text=I want to learn about NALA Business rates" target="_blank" rel="noopener noreferrer">WhatsApp</a>.
          </span>
        ) },
      ]}
      defaultOpenId="q1"
      variant="light"
    />
  );
}


