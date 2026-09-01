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
        sm:px-8
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
          left-[5%]
          top-[18%]
          animate-pulse
          text-4xl
          text-[#FFD44D]
          sm:left-[8%]
          sm:text-5xl
        "
      >
        ✦
      </span>

      <span
        className="
          absolute
          right-[6%]
          top-[12%]
          animate-bounce
          text-3xl
          text-[#AAF35E]
          sm:right-[10%]
          sm:text-4xl
        "
      >
        ✧
      </span>

      <span
        className="
          absolute
          bottom-[12%]
          left-[8%]
          text-2xl
          sm:bottom-[15%]
          sm:left-[12%]
          sm:text-3xl
        "
      >
        ⭐
      </span>

      <span
        className="
          absolute
          bottom-[10%]
          right-[15%]
          text-3xl
          sm:right-[25%]
          sm:text-4xl
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
          z-20
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
          z-20
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
          flex
          min-h-screen
          max-w-7xl
          flex-col
          justify-center
          gap-8
          pt-16
          lg:grid
          lg:grid-cols-2
          lg:items-center
          lg:gap-12
          lg:pt-0
        "
      >
        {/* =========================
            LEFT SIDE
        ========================= */}

        <div className="relative text-center lg:text-left">
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
                mx-auto
                max-w-xl
                text-lg
                font-medium
                leading-7
                text-[#FFF8F3]/80
                md:text-xl
                lg:mx-0
              "
            >
              a frontend developer who loves making the web feel alive.
            </p>
          </div>

          {/* MAIN TITLE */}

          <h1
            id="hero-title"
            className="
              mt-8
              text-6xl
              font-black
              uppercase
              leading-[0.8]
              tracking-[-0.07em]
              text-[#FFF8F3]
              sm:text-7xl
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
                  -bottom-2
                  left-0
                  h-2
                  w-full
                  -rotate-2
                  rounded-full
                  bg-[#FF4FD8]
                  sm:-bottom-3
                  sm:h-3
                "
              />
            </span>
          </h1>

          {/* DEVELOPER LABEL */}

          <div className="mt-8">
            <span
              className="
                inline-block
                rotate-[-3deg]
                rounded-full
                border-2
                border-[#17111F]
                bg-[#AAF35E]
                px-4
                py-2
                text-sm
                font-black
                text-[#17111F]
                shadow-[4px_4px_0px_#17111F]
                sm:px-5
              "
            >
              ✦ FRONTEND DEVELOPER
            </span>
          </div>

          {/* TYPEWRITER */}

          <div
            className="
              mx-auto
              mt-6
              min-h-[100px]
              max-w-2xl
              lg:mx-0
            "
          >
            <p
              className="
                font-mono
                text-base
                font-bold
                leading-7
                text-[#FFF8F3]
                sm:text-lg
                md:text-2xl
                md:leading-8
              "
            >
              <span className="text-[#FFD44D]">{">"}</span> {displayedText}
              {!isTypingDone && <span className="ml-1 animate-pulse">▌</span>}
            </p>
          </div>

          {/* BUTTONS */}

          <div
            className="
              mt-6
              flex
              flex-wrap
              justify-center
              gap-4
              lg:mt-8
              lg:justify-start
            "
          >
            <button
              className="
                rounded-full
                border-4
                border-[#17111F]
                bg-[#FFD44D]
                px-6
                py-3
                font-black
                text-[#17111F]
                shadow-[6px_6px_0px_#17111F]
                transition
                duration-300
                hover:-translate-y-2
                hover:rotate-[-2deg]
                hover:shadow-[10px_10px_0px_#17111F]
                sm:px-7
                sm:py-4
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
                px-6
                py-3
                font-black
                text-[#FFF8F3]
                shadow-[6px_6px_0px_#17111F]
                transition
                duration-300
                hover:-translate-y-2
                hover:rotate-[2deg]
                hover:shadow-[10px_10px_0px_#17111F]
                sm:px-7
                sm:py-4
              "
            >
              About me
            </button>
          </div>

          {/* SCROLL INDICATOR */}

          <div
            className="
              mt-10
              flex
              items-center
              justify-center
              gap-3
              font-black
              text-[#FFF8F3]
              sm:mt-12
              lg:justify-start
            "
          >
            <span className="animate-bounce text-2xl">↓</span>

            <span className="text-xs tracking-widest sm:text-sm">
              SCROLL TO EXPLORE
            </span>
          </div>
        </div>

        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div
          className="
            relative
            flex
            w-full
            justify-center
            lg:block
          "
        >
          <HeroCharacter />
        </div>
      </div>
    </section>
  );
};

export default Hero;
