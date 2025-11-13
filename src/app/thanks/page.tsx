import Link from "next/link";

export default function ThanksPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-slate-50">
      <div className="max-w-xl rounded-3xl border border-white/10 bg-slate-900/70 p-10 text-center shadow-2xl shadow-black/40">
        <h1 className="text-3xl font-semibold tracking-tight text-emerald-200">
          Thank you for reaching out!
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-200/85">
          I appreciate your message and will be in touch within two school days. In the meantime, explore classroom highlights and upcoming workshops to see the latest projects in motion.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300"
        >
          Return to portfolio
        </Link>
      </div>
    </div>
  );
}
