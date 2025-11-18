'use client';

const contactInfo = {
  firstName: "Anthony",
  lastName: "Ladas",
  businessName: "Atlas Stagg",
  phone: "1.708.567.0963",
};

const sanitizePhoneNumber = () => contactInfo.phone.replace(/[^\d+]/g, "");

const createVCardContent = () => {
  const sanitizedPhone = sanitizePhoneNumber();
  const fullName = `${contactInfo.firstName} ${contactInfo.lastName}`;
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${fullName}`,
    `N:${contactInfo.lastName};${contactInfo.firstName};;;`,
    `ORG:${contactInfo.businessName}`,
    `TEL;TYPE=CELL,VOICE:${sanitizedPhone}`,
    "END:VCARD",
  ].join("\n");
};

const triggerIntroText = () => {
  if (typeof window === "undefined") return;

  const sanitizedPhone = sanitizePhoneNumber();
  const isiOS =
    typeof navigator !== "undefined" &&
    (/iPad|iPhone|iPod/i.test(navigator.userAgent) ||
      (/Mac/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1));
  const bodySeparator = isiOS ? "&" : "?";
  const message =
    "Hey, it’s Anthony Ladas. I just saved your contact and I want you to join my band—when can we talk?";
  const smsUrl = `sms:${sanitizedPhone}${bodySeparator}body=${encodeURIComponent(
    message,
  )}`;

  const smsWindow = window.open(smsUrl, "_blank");
  if (!smsWindow) {
    window.location.href = smsUrl;
  }
};

const handleSaveContact = () => {
  const vCardContent = createVCardContent();
  const blob = new Blob([vCardContent], {
    type: "text/vcard;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "anthony-ladas.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  triggerIntroText();
};

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12 text-zinc-100">
      <article className="relative isolate w-full max-w-3xl overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2f363d] via-[#1e242a] to-[#161a20] p-10 shadow-[0_30px_120px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.2)]">
        <div className="relative flex flex-col gap-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.45em] text-zinc-400">
              Exclusive Invite
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Everybody Join My Band
            </h1>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#39ff14] sm:text-base">
              Play is not dead
            </p>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleSaveContact}
              className="jiggle group flex items-center justify-center gap-3 rounded-2xl border border-[#39ff14]/70 bg-[#0f1e22] px-6 py-4 text-lg font-semibold text-[#39ff14] shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_18px_40px_rgba(0,0,0,0.75)] transition hover:border-[#39ff14] hover:bg-[#132b32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39ff14]"
            >
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
            <span className="text-[#39ff14]">Atlas Stagg</span>
          </p>
        </div>
      </article>
      <footer className="absolute bottom-6 left-0 right-0 text-center text-[10px] uppercase tracking-[0.4em] text-zinc-500">
        Built in America, on Earth.
      </footer>
    </main>
  );
}
