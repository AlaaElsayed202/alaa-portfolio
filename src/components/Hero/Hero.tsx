import { useEffect, useState } from "react";
import HeroCharacter from "./HeroCharacter";

const Hero = () => {
  const text = "Hi, I'm Alaa. I turn ideas into interfaces.";

  const [displayedText, setDisplayedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));

      index++;

      if (index >= text.length) {
        clearInterval(typingInterval);
        setIsTypingDone(true);
      }
    }, 45);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#7C5CFF]
        px-6
        py-20
      "
    >
      {/* =========================
          BACKGROUND
      ========================= */}

      <div
        className="
          absolute
          -left-40
          top-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#FF4FD8]
          opacity-60
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -right-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#12D8FA]
          opacity-60
          blur-3xl
        "
      />

      <div
        className="
          absolute
          left-[45%]
          top-[20%]
          h-32
          w-32
          rounded-full
          bg-[#FFD44D]
          opacity-40
          blur-3xl
        "
      />

      {/* =========================
          DECORATIVE STARS
      ========================= */}

      <span
        className="
          absolute
          left-[8%]
          top-[20%]
          animate-pulse
          text-5xl
          text-[#FFD44D]
        "
      >
        ✦
      </span>

      <span
        className="
          absolute
          right-[10%]
          top-[15%]
          animate-bounce
          text-4xl
          text-[#AAF35E]
        "
      >
        ✧
      </span>

      <span
        className="
          absolute
          bottom-[15%]
          left-[12%]
          text-3xl
        "
      >
        ⭐
      </span>

      <span
        className="
          absolute
          bottom-[12%]
          right-[25%]
          text-4xl
        "
      >
        ✦
      </span>

      {/* =========================
          FLOATING STICKERS
      ========================= */}

      <div
        className="
          hero-sticker
          absolute
          left-[5%]
          top-[38%]
          hidden
          rotate-[-8deg]
          rounded-full
          border-4
          border-[#17111F]
          bg-[#AAF35E]
          px-5
          py-3
          font-black
          shadow-[5px_5px_0px_#17111F]
          lg:block
        "
      >
        I ♥ UI
      </div>

      <div
        className="
          hero-sticker
          absolute
          right-[5%]
          top-[45%]
          hidden
          rotate-[8deg]
          rounded-full
          border-4
          border-[#17111F]
          bg-[#FFD44D]
          px-5
          py-3
          text-sm
          font-black
          shadow-[5px_5px_0px_#17111F]
          lg:block
        "
      >
        CREATIVE DEVELOPER
      </div>

      {/* =========================
          MAIN CONTENT
      ========================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-screen
          max-w-7xl
          items-center
          gap-12
          lg:grid-cols-2
        "
      >
        {/* =========================
            LEFT SIDE
        ========================= */}

        <div className="relative">
          {/* INTRO */}

          <div className="hero-intro space-y-3">
            <p
              className="
                text-xl
                font-bold
                text-[#FFF8F3]
                md:text-2xl
              "
            >
              Hey there, meet Alaa,
            </p>

            <p
              className="
                max-w-xl
                text-lg
                font-medium
                leading-7
                text-[#FFF8F3]/80
                md:text-xl
              "
            >
              a frontend developer who loves making the web feel alive.
            </p>
          </div>

          {/* =========================
              MAIN TITLE
          ========================= */}

          <h1
            id="hero-title"
            className="
              mt-8
              text-7xl
              font-black
              uppercase
              leading-[0.78]
              tracking-[-0.07em]
              text-[#FFF8F3]
              md:text-[9rem]
            "
          >
            ALAA
            <br />
            <span className="relative inline-block text-[#FFD44D]">
              ELSAYED
              {/* Pink underline */}
              <span
                className="
                  absolute
                  -bottom-3
                  left-0
                  h-3
                  w-full
                  -rotate-2
                  rounded-full
                  bg-[#FF4FD8]
                "
              />
            </span>
          </h1>

          {/* =========================
              DEVELOPER LABEL
          ========================= */}

          <div className="mt-8">
            <span
              className="
                inline-block
                rotate-[-3deg]
                rounded-full
                border-2
                border-[#17111F]
                bg-[#AAF35E]
                px-5
                py-2
                font-black
                text-[#17111F]
                shadow-[4px_4px_0px_#17111F]
              "
            >
              ✦ FRONTEND DEVELOPER
            </span>
          </div>

          {/* =========================
              TYPEWRITER
          ========================= */}

          <div
            className="
              mt-6
              min-h-[90px]
              max-w-2xl
            "
          >
            <p
              className="
                font-mono
                text-lg
                font-bold
                leading-8
                text-[#FFF8F3]
                md:text-2xl
              "
            >
              <span className="text-[#FFD44D]">{">"}</span> {displayedText}
              {!isTypingDone && <span className="ml-1 animate-pulse">▌</span>}
            </p>
          </div>

          {/* =========================
              BUTTONS
          ========================= */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-4
            "
          >
            <button
              className="
                rounded-full
                border-4
                border-[#17111F]
                bg-[#FFD44D]
                px-7
                py-4
                font-black
                text-[#17111F]
                shadow-[6px_6px_0px_#17111F]
                transition
                duration-300
                hover:-translate-y-2
                hover:rotate-[-2deg]
                hover:shadow-[10px_10px_0px_#17111F]
              "
            >
              Explore my work →
            </button>

            <button
              className="
                rounded-full
                border-4
                border-[#17111F]
                bg-[#FF4FD8]
                px-7
                py-4
                font-black
                text-[#FFF8F3]
                shadow-[6px_6px_0px_#17111F]
                transition
                duration-300
                hover:-translate-y-2
                hover:rotate-[2deg]
                hover:shadow-[10px_10px_0px_#17111F]
              "
            >
              About me
            </button>
          </div>

          {/* =========================
              SCROLL INDICATOR
          ========================= */}

          <div
            className="
              mt-12
              flex
              items-center
              gap-3
              font-black
              text-[#FFF8F3]
            "
          >
            <span className="animate-bounce text-2xl">↓</span>

            <span className="tracking-widest">SCROLL TO EXPLORE</span>
          </div>
        </div>

        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className="relative">
          <HeroCharacter />
        </div>
      </div>
    </section>
  );
};

export default Hero;
