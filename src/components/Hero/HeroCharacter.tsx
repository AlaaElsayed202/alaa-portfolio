import { useEffect, useState } from "react";

const HeroCharacter = () => {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="hero-character"
      className="relative flex h-[520px] w-full items-center justify-center"
    >
      {/* Glow */}

      <div className="absolute h-80 w-80 rounded-full bg-[#FF4FD8]/40 blur-3xl" />

      {/* HI Bubble */}

      <div
        className="
          hero-hi
          absolute
          right-[8%]
          top-[5%]
          z-20
          rotate-6
          rounded-[25px]
          border-4
          border-[#17111F]
          bg-[#FFF8F3]
          px-7
          py-4
          text-3xl
          font-black
          text-[#17111F]
          shadow-[7px_7px_0px_#17111F]
        "
      >
        HI! 👋
      </div>

      {/* Character */}

      <div
        className={`
          hero-character-body
          relative
          z-10
          transition-all
          duration-1000
          ${isTyping ? "translate-y-8 rotate-[-3deg]" : "animate-bounce"}
        `}
      >
        <img
          src="/character.jpeg"
          alt="Alaa cartoon character"
          className="
            h-[430px]
            w-auto
            object-contain
            drop-shadow-[12px_15px_0px_#17111F]
          "
        />

        {/* Laptop */}

        <div
          className={`
            absolute
            bottom-[5%]
            left-1/2
            -translate-x-1/2
            rounded-xl
            border-4
            border-[#17111F]
            bg-[#17111F]
            p-2
            shadow-[6px_6px_0px_#FF4FD8]
            transition-all
            duration-700
            ${isTyping ? "scale-110 rotate-[-2deg]" : "scale-100"}
          `}
        >
          <div className="flex h-20 w-32 items-center justify-center rounded-md bg-[#12D8FA]">
            <span className="font-mono text-sm font-black text-[#17111F]">
              {isTyping ? "> typing..." : "> hello!"}
            </span>
          </div>

          <div className="mx-auto mt-1 h-2 w-36 rounded-full bg-[#FFF8F3]" />
        </div>

        {/* Typing indicator */}

        {isTyping && (
          <div className="absolute -bottom-4 -right-12 rotate-[-5deg] rounded-full border-2 border-[#17111F] bg-[#AAF35E] px-4 py-2 font-black text-[#17111F] shadow-[4px_4px_0px_#17111F]">
            ⌨️ typing...
          </div>
        )}
      </div>

      {/* Decorative stars */}

      <span className="absolute left-[10%] top-[20%] animate-pulse text-5xl text-[#FFD44D]">
        ✦
      </span>

      <span className="absolute bottom-[20%] right-[10%] animate-pulse text-4xl text-[#AAF35E]">
        ✧
      </span>

      <span className="absolute left-[15%] bottom-[15%] text-3xl">⭐</span>
    </div>
  );
};

export default HeroCharacter;
