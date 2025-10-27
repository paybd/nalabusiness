"use client";

import { useMemo, useState } from "react";

type Currency = {
  code: string;
  label: string;
  flag: string; // emoji for now
};

const SENDER_CURRENCIES: Currency[] = [
  // Middle East
  { code: "AED", label: "UAE Dirham", flag: "🇦🇪" },
  { code: "SAR", label: "Saudi Riyal", flag: "🇸🇦" },
  { code: "QAR", label: "Qatari Riyal", flag: "🇶🇦" },
  { code: "KWD", label: "Kuwaiti Dinar", flag: "🇰🇼" },
  { code: "BHD", label: "Bahraini Dinar", flag: "🇧🇭" },
  { code: "OMR", label: "Omani Rial", flag: "🇴🇲" },
  // Asia
  { code: "MYR", label: "Malaysian Ringgit", flag: "🇲🇾" },
  { code: "SGD", label: "Singapore Dollar", flag: "🇸🇬" },
  { code: "MVR", label: "Maldivian Rufiyaa", flag: "🇲🇻" },
  // Western
  { code: "USD", label: "US Dollar", flag: "🇺🇸" },
  { code: "GBP", label: "British Pound", flag: "🇬🇧" },
  { code: "CAD", label: "Canadian Dollar", flag: "🇨🇦" },
  { code: "EUR", label: "Euro", flag: "🇪🇺" },
];

const RECEIVER_CURRENCIES: Currency[] = [
  { code: "BDT", label: "Bangladeshi Taka", flag: "🇧🇩" },
  { code: "INR", label: "Indian Rupee", flag: "🇮🇳" },
];

// Dummy FX rates (sender -> receiver). These are made up for demo purposes only.
const FX_RATES: Record<string, number> = {
  // Dummy sender -> BDT rates
  USD_BDT: 128.5,
  GBP_BDT: 176,
  EUR_BDT: 150,
  CAD_BDT: 88,
  AED_BDT: 37.5,
  SAR_BDT: 35.8,
  QAR_BDT: 37.9,
  KWD_BDT: 420,
  BHD_BDT: 342,
  OMR_BDT: 330,
  MYR_BDT: 30.5,
  SGD_BDT: 102,
  MVR_BDT: 10.23,
  // Dummy sender -> INR rates
  USD_INR: 84,
  GBP_INR: 105,
  EUR_INR: 92,
  CAD_INR: 62,
  AED_INR: 22.9,
  SAR_INR: 25.4,
  QAR_INR: 23.2,
  KWD_INR: 272,
  BHD_INR: 222,
  OMR_INR: 218,
  MYR_INR: 18.8,
  SGD_INR: 62,
  MVR_INR: 5.6,
};

function getRate(sender: string, receiver: string): number | null {
  const key = `${sender}_${receiver}`;
  return FX_RATES[key] ?? null;
}

function formatNumber(value: number, maximumFractionDigits = 2) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits }).format(value);
}

export default function RatesCalculator() {
  const [tab, setTab] = useState<"calculator" | "compare">("calculator");
  const [sender, setSender] = useState<string>("SAR");
  const [receiver, setReceiver] = useState<string>("BDT");
  const [amount, setAmount] = useState<string>("1000");

  const rate = useMemo(() => getRate(sender, receiver), [sender, receiver]);
  const parsedAmount = useMemo(() => Number(amount.replace(/[^0-9.]/g, "")) || 0, [amount]);

  // Simple demo fee model: 0 fee for mobile money, 0.99 for bank (not shown). We'll keep 0.
  const fee = 0;
  const receiveAmount = useMemo(() => {
    if (!rate) return 0;
    return parsedAmount * rate - fee;
  }, [parsedAmount, rate]);

  const competitorTapTap = useMemo(() => {
    return receiveAmount * 0.93; // 7% less than NALA
  }, [receiveAmount]);

  const competitorRia = useMemo(() => {
    return receiveAmount * 0.92; // 8% less than NALA
  }, [receiveAmount]);

  function onSwap() {
    const reverseKey = `${receiver}_${sender}`;
    if (FX_RATES[reverseKey]) {
      setSender(receiver);
      setReceiver(sender);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-2xl">
      {/* Tabs */}
      <div className="flex items-center gap-2 text-xs">
        <button
          className={`px-3 py-2 rounded-lg transition ${
            tab === "calculator" ? "bg-white text-neutral-900" : "bg-white/5 text-white/80 hover:bg-white/10"
          }`}
          onClick={() => setTab("calculator")}
        >
          Rate Calculator
        </button>
        <button
          className={`px-3 py-2 rounded-lg border border-white/15 transition ${
            tab === "compare" ? "bg-white/20 text-white" : "bg-transparent text-white/80 hover:bg-white/10"
          }`}
          onClick={() => setTab("compare")}
        >
          Compare Rates
        </button>
      </div>

      {tab === "calculator" ? (
        <div className="mt-4 space-y-3 text-sm">
          {/* You send */}
          <div className="rounded-xl border border-white/15 bg-white/5 p-3">
            <div className="text-white/70">You send</div>
            <div className="mt-2 flex items-center justify-between gap-2">
              <label className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-2 py-1 text-xs">
                <select
                  className="bg-transparent outline-none appearance-none pr-3"
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                >
                  {SENDER_CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>{`${c.flag} ${c.code}`}</option>
                  ))}
                </select>
              </label>
              <input
                inputMode="decimal"
                className="w-40 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-right text-base outline-none placeholder:text-white/40"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="1,000"
              />
            </div>
          </div>

          {/* Recipient gets */}
          <div className="rounded-xl border border-white/15 bg-white/5 p-3">
            <div className="flex items-center justify-between text-white/70">
              <span>Recipient gets</span>
              <span className="text-[11px]">{rate ? `${sender} 1 ≈ ${formatNumber(rate, 2)} ${receiver}` : "Rate unavailable"}</span>
            </div>
            <div className="mt-2 flex items-center justify-between gap-2">
              <label className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-2 py-1 text-xs">
                <select
                  className="bg-transparent outline-none appearance-none pr-3"
                  value={receiver}
                  onChange={(e) => setReceiver(e.target.value)}
                >
                  {RECEIVER_CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>{`${c.flag} ${c.code}`}</option>
                  ))}
                </select>
              </label>
              <div className="min-w-[8ch] text-right text-xl font-semibold">
                {formatNumber(receiveAmount, 0)}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-white/70">
            {/* Hide swap when reverse rate not available */}
            {FX_RATES[`${receiver}_${sender}`] ? (
              <button onClick={onSwap} className="underline underline-offset-2 hover:text-white">Swap</button>
            ) : <span />}
            <span>Fees: none</span>
          </div>

          <a
            href="https://github.com/paybd/nalabusiness/releases/download/v2.0.0/nala_business.apk"
            className="mt-1 w-full inline-flex items-center justify-center rounded-lg bg-sky-600 py-3 font-medium hover:bg-sky-500"
          >
            Download NALA Business 🩵
          </a>
          <div className="mt-2 text-center text-base text-white/70">
            Want business rates? <a className="underline font-semibold" href="https://wa.me/?text=I want to contact NALA Business sales team" target="_blank" rel="noopener noreferrer">Contact our sales team</a>.
          </div>
        </div>
      ) : (
        <div className="mt-4 space-y-3 text-sm">
          {[
            { name: "NALA", value: receiveAmount, highlight: true },
            { name: "TapTap Send", value: competitorTapTap },
            { name: "Ria", value: competitorRia },
          ].map((row) => (
            <div
              key={row.name}
              className={`flex items-center justify-between rounded-xl border border-white/15 p-3 ${
                row.highlight ? "bg-white/15" : "bg-white/5"
              }`}
            >
              <div className="text-white/90">{row.name}</div>
              <div className="text-right">
                <div className="text-xs text-white/70">Total received</div>
                <div className="text-lg font-semibold">{formatNumber(row.value, 0)} {receiver}</div>
              </div>
            </div>
          ))}
          <div className="text-[11px] text-white/60">These are demo FX rates for illustration only.</div>
        </div>
      )}
    </div>
  );
}


