import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const whatsappNumber = "01275733722";
  const email = "lolaa732004@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/a-laa-elsayed-3a5426366";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Alaa! I came across your portfolio and would love to talk about a project."
  )}`;

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#FF4FD8] px-6 py-32"
    >
      <div className="absolute left-10 top-20 text-7xl">✦</div>

      <div className="absolute right-10 top-32 text-6xl">💫</div>

      <div className="absolute bottom-20 left-20 text-6xl">⭐</div>

      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center text-center">
        <span className="rotate-[-3deg] rounded-full border-3 border-[#17111F] bg-[#FFD44D] px-6 py-3 font-black shadow-[5px_5px_0px_#17111F]">
          FINAL LEVEL 🎮
        </span>

        <h2
          id="contact-title"
          className="mt-10 text-6xl font-black uppercase leading-[0.8] tracking-[-0.06em] text-[#FFF8F3] md:text-[9rem]"
        >
          SO...
          <br />
          WHAT ARE WE
          <br />
          <span className="text-[#AAF35E]">BUILDING?</span>
          👀
        </h2>

        <p className="mt-10 max-w-xl text-lg font-bold text-white/80">
          Let&apos;s make something useful, beautiful, slightly weird, and
          impossible to forget.
        </p>

        {/* Main Contact Actions */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full
              border-3 border-[#17111F]
              bg-[#AAF35E]
              px-8 py-5
              text-lg font-black text-[#17111F]
              shadow-[7px_7px_0px_#17111F]
              transition
              hover:-translate-y-2
            "
          >
            Start a conversation →
          </a>

          {/* Copy Email */}
          <button
            onClick={copyEmail}
            className="
              min-w-[210px]
              rounded-full
              border-3 border-[#17111F]
              bg-[#FFF8F3]
              px-8 py-5
              text-lg font-black text-[#17111F]
              shadow-[7px_7px_0px_#17111F]
              transition
              hover:-translate-y-2
            "
          >
            {copied ? "Copied! ✓" : "Copy my email ✦"}
          </button>
        </div>

        <div className="mt-20 text-[100px] transition duration-500 hover:scale-110 hover:rotate-6">
          👩🏻‍💻
        </div>

        <div className="mt-5 inline-block rotate-3 rounded-3xl border-3 border-[#17111F] bg-[#FFF8F3] px-7 py-4 font-black text-[#17111F] shadow-[6px_6px_0px_#17111F]">
          SEE YOU AROUND! 👋
        </div>

        {/* Social Links */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full
              border-2 border-[#17111F]
              bg-[#17111F]
              px-5 py-3
              text-sm font-black text-white
              transition
              hover:-translate-y-1
              hover:bg-[#7C5CFF]
            "
          >
            LinkedIn ↗
          </a>

          <a
            href={`mailto:${email}`}
            className="
              rounded-full
              border-2 border-[#17111F]
              bg-[#17111F]
              px-5 py-3
              text-sm font-black text-white
              transition
              hover:-translate-y-1
              hover:bg-[#7C5CFF]
            "
          >
            Email ↗
          </a>
        </div>

        <p className="mt-16 text-xs font-bold text-white/60">
          ALAA ELSAYED · FRONTEND DEVELOPER · BUILT WITH ❤️ + CODE
        </p>
      </div>
    </section>
  );
};

export default Contact;