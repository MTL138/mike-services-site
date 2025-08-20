
import { useState } from "react";
import { Home, Wrench, MonitorSmartphone, KeyRound, Bolt, MessageSquare, Mail, Facebook, Sparkles } from "lucide-react";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm">
      {children}
    </span>
  );
}

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
  );
}

export default function App() {
  const [lang, setLang] = useState<"zh" | "en">("zh");

  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  const features = [
    {
      icon: <MonitorSmartphone className="size-6" />,
      title: t("電腦與網路支援", "Computer & Networking Help"),
      desc: t(
        "二十年以上資歷，協助電腦疑難雜症、維修與升級。",
        "20+ years of experience helping with troubleshooting, repairs, and upgrades."
      ),
      tag: t("到府/遠端皆可", "On-site / Remote"),
    },
    {
      icon: <Wrench className="size-6" />,
      title: t("居家小型維修", "Home Small Repairs"),
      desc: t(
        "水電五金小修繕、設備安裝與簡易改善，實用、可靠。",
        "Practical fixes and small installs around the house—reliable and handy."
      ),
      tag: t("按件估價", "Per-job pricing"),
    },
    {
      icon: <KeyRound className="size-6" />,
      title: t("房屋仲介服務", "Real Estate Services"),
      desc: t(
        "持有房屋仲介執照，協助買屋/賣屋，誠實透明、流程清楚。",
        "Licensed real estate agent—buying/selling with clarity and integrity."
      ),
      tag: t("買賣租賃皆可", "Buy / Sell / Rent"),
    },
    {
      icon: <Bolt className="size-6" />,
      title: t("智慧家庭與自動化", "Smart Home & Automation"),
      desc: t(
        "規劃 Wi‑Fi、感測器、安防、語音助理與自動化情境，提升生活便利。",
        "Plan Wi‑Fi, sensors, security, voice assistants, and automations for everyday comfort."
      ),
      tag: t("量身規劃", "Tailored Plans"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b">
        <Section className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2 font-semibold">
            <div className="size-9 rounded-2xl bg-slate-900 text-white grid place-items-center shadow-sm">
              <Home className="size-5" />
            </div>
            <div className="leading-tight">
              <div className="text-base sm:text-lg">Mike Services 邁客服務</div>
              <div className="text-xs text-slate-500">IT · 小修繕 · 房屋仲介 · 智慧家庭</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              className="rounded-2xl border px-3 py-1.5 text-sm hover:bg-slate-100 transition"
              aria-label="Toggle language"
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>
            <a
              href="#contact"
              className="rounded-2xl bg-slate-900 text-white px-4 py-2 text-sm shadow hover:opacity-95"
            >
              {t("聯絡我", "Contact")}
            </a>
          </div>
        </Section>
      </header>

      <Section className="py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm mb-4">
              <Sparkles className="size-4" />
              <span>{t("一站式：科技 × 居家 × 房地產", "One-Stop: Tech × Home × Real Estate")}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              {t(
                "電腦到房屋，我都能幫上忙。",
                "From computers to homes—I can help."
              )}
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              {t(
                "二十多年電腦與網路經驗，擅長疑難排解與維修；同時提供小型居家修繕。持有房屋仲介執照，並可規劃智慧家庭與自動化改造，讓生活更便利。",
                "Over 20 years in computers & networking for troubleshooting and repairs; also handy with small home fixes. A licensed real estate agent who designs smart home & automation upgrades for a more convenient life."
              )}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#services" className="rounded-2xl bg-slate-900 text-white px-5 py-3 shadow hover:opacity-95">
                {t("查看服務", "See Services")}
              </a>
              <a href="#contact" className="rounded-2xl border px-5 py-3 hover:bg-slate-100">
                {t("免費諮詢", "Free Consultation")}
              </a>
            </div>
          </div>
          <div className="rounded-3xl border bg-white p-5 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="rounded-2xl border p-4 hover:shadow-sm transition bg-slate-50/60">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-2xl bg-white border grid place-items-center">{f.icon}</div>
                    <div className="font-semibold text-sm sm:text-base">{f.title}</div>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600">{f.desc}</p>
                  <div className="mt-3"><Tag>{f.tag}</Tag></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="services" className="py-10 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-bold">{t("服務內容", "Services")}</h2>
        <p className="mt-2 text-slate-600">{t("依需求客製，提供到府或遠端協助。", "Tailored to your needs—available on-site or remotely.")}</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow transition">
              <div className="size-11 rounded-2xl bg-slate-900 text-white grid place-items-center shadow-sm">{f.icon}</div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              <div className="mt-3"><Tag>{f.tag}</Tag></div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-10 sm:py-14">
        <div className="rounded-3xl border p-6 sm:p-8 bg-slate-900 text-white grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">{t("房屋仲介 + 智慧家庭，一次搞定", "Real Estate + Smart Home, All-in-One")}</h3>
            <p className="mt-2 text-sm sm:text-base text-slate-200">
              {t(
                "買屋或賣屋同時規劃網路、監控、安防與自動化，入住即享便利與安全。",
                "Buy or sell while planning Wi‑Fi, cameras, security, and automations—move in with convenience and safety from day one."
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="rounded-2xl bg-white text-slate-900 px-5 py-3 font-medium shadow hover:opacity-95">
              {t("預約免費諮詢", "Book a Free Consult")}
            </a>
            <a href="#faq" className="rounded-2xl border border-white/30 px-5 py-3 hover:bg-white/10">
              {t("常見問題", "FAQ")}
            </a>
          </div>
        </div>
      </Section>

      <Section id="faq" className="py-10 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-bold">FAQ</h2>
        <div className="mt-6 grid lg:grid-cols-2 gap-5">
          <div className="rounded-2xl border p-5 bg-white">
            <h4 className="font-semibold">{t("可以只做部分服務嗎？", "Can I request just one service?")}</h4>
            <p className="mt-2 text-sm text-slate-600">
              {t("可以，服務皆可單獨選擇或組合搭配。", "Yes—each service can be booked individually or bundled.")}
            </p>
          </div>
          <div className="rounded-2xl border p-5 bg-white">
            <h4 className="font-semibold">{t("服務地區？", "Service Areas")}</h4>
            <p className="mt-2 text-sm text-slate-600">
              {t(
                "以德州休士頓一帶為主，視情況提供遠端支援。",
                "Primarily Greater Houston, Texas; remote support available when appropriate."
              )}
            </p>
          </div>
          <div className="rounded-2xl border p-5 bg-white">
            <h4 className="font-semibold">{t("如何報價？", "How do you price?")}</h4>
            <p className="mt-2 text-sm text-slate-600">
              {t(
                "電腦/網路與小修繕採按件估價；房仲依市場慣例收取服務費；智慧家庭依現場評估報價。",
                "Tech & repairs are per‑job; real estate follows market norms; smart home work is quoted after a site assessment."
              )}
            </p>
          </div>
          <div className="rounded-2xl border p-5 bg-white">
            <h4 className="font-semibold">{t("是否提供收據與合約？", "Receipts & Agreements")}</h4>
            <p className="mt-2 text-sm text-slate-600">
              {t("可提供正式收據；房仲買賣/租賃依合約流程辦理。", "Receipts provided; real estate handled with formal agreements.")}
            </p>
          </div>
        </div>
      </Section>

      <Section id="contact" className="py-10 sm:py-16">
        <div className="rounded-3xl border bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold">{t("聯絡我", "Get in Touch")}</h2>
          <p className="mt-2 text-slate-600">
            {t(
              "歡迎訊息詢問需求或預約評估。",
              "Message me to discuss your needs or book an assessment."
            )}
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <a
              className="rounded-2xl border p-4 hover:bg-slate-50 flex items-center gap-3"
              href="mailto:leetzonghann@gmail.com"
            >
              <Mail className="size-5" />
              <span className="font-medium">Email</span>
              <span className="text-slate-500">leetzonghann@gmail.com</span>
            </a>
            <a
              className="rounded-2xl border p-4 hover:bg-slate-50 flex items-center gap-3"
              href="https://www.facebook.com/profile.php?id=61551648542207"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="size-5" />
              <span className="font-medium">Facebook</span>
              <span className="text-slate-500">@Mike Services</span>
            </a>
            <a
              className="rounded-2xl border p-4 hover:bg-slate-50 flex items-center gap-3"
              href="https://m.me/61551648542207" target="_blank" rel="noreferrer"
            >
              <MessageSquare className="size-5" />
              <span className="font-medium">Messenger</span>
              <span className="text-slate-500">Chat now</span>
            </a>
          </div>
        </div>
      </Section>

      <footer className="py-8 border-t text-sm text-slate-600">
        <Section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Mike Services. {t("保留所有權利。", "All rights reserved.")}</div>
          <div className="flex items-center gap-3">
            <a className="underline-offset-4 hover:underline" href="#services">{t("服務內容", "Services")}</a>
            <a className="underline-offset-4 hover:underline" href="#faq">FAQ</a>
            <a className="underline-offset-4 hover:underline" href="#contact">{t("聯絡", "Contact")}</a>
          </div>
        </Section>
      </footer>
    </div>
  );
}
