const contactDetails = [
  {
    label: "Business Name",
    value: "Everybody Join My Band",
  },
  {
    label: "Contact",
    value: "Anthony Ladas",
  },
  {
    label: "Phone",
    value: "1.708.567.0963",
  },
];

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12 text-zinc-100">
      <article className="relative isolate w-full max-w-3xl overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2f363d] via-[#1e242a] to-[#161a20] p-10 shadow-[0_30px_120px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.2)]">
        <div className="relative flex flex-col gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-zinc-400">
              Exclusive Invite
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Everybody Join My Band
            </h1>
            <p className="mt-2 text-sm text-zinc-400 sm:text-base">
             You are the most famous artist the world has yet to meet{" "}
              <span className="font-semibold text-[#27ffe0]">
                Untapped Talent
              </span>
              .
            </p>
          </div>

          <dl className="space-y-6 rounded-3xl border border-white/5 bg-white/5 p-6 text-sm leading-relaxed text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] sm:text-base">
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className="flex flex-col gap-1 border-b border-white/5 pb-4 last:border-none last:pb-0"
              >
                <dt className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                  {detail.label}
                </dt>
                <dd className="text-lg font-medium text-white">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                Hotline
              </p>
              <p className="text-2xl font-semibold text-[#27ffe0]">
                1.708.567.0963
              </p>
            </div>
            <button className="jiggle group flex flex-1 items-center justify-center gap-3 rounded-2xl border border-[#27ffe0]/70 bg-[#0f1e22] px-6 py-4 text-lg font-semibold text-[#27ffe0] shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_18px_40px_rgba(0,0,0,0.75)] transition hover:border-[#27ffe0] hover:bg-[#132b32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#27ffe0]">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden
              >
                <path d="M6.5 3A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 17.5 3zm0 1.5h11V6h-11zm0 3.5h11v9.5h-11zm6.25 7.25a.75.75 0 1 0 0 1.5h2.5a.75.75 0 1 0 0-1.5z" />
              </svg>
              Save Contact
            </button>
          </div>

          <p className="mt-6 text-center text-xs uppercase tracking-[0.5em] text-zinc-500">
            Powered by{" "}
            <span className="text-[#27ffe0]">Untapped Talent</span>
          </p>
        </div>
      </article>
    </main>
  );
}
