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
      className="
        relative
        mx-auto
        flex
        h-[400px]
        w-full
        max-w-[420px]
        items-center
        justify-center
        sm:h-[460px]
        md:h-[500px]
        lg:h-[520px]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-64
          w-64
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#FF4FD8]/40
          blur-3xl
          sm:h-72
          sm:w-72
          md:h-80
          md:w-80
        "
      />

      {/* HI Bubble */}
      <div
        className="
          hero-hi
          absolute
          right-[2%]
          top-[3%]
          z-30
          rotate-6
          rounded-[25px]
          border-4
          border-[#17111F]
          bg-[#FFF8F3]
          px-4
          py-2
          text-xl
          font-black
          text-[#17111F]
          shadow-[5px_5px_0px_#17111F]
          sm:right-[5%]
          sm:px-6
          sm:py-3
          sm:text-2xl
          md:right-[8%]
          md:top-[5%]
          md:px-7
          md:py-4
          md:text-3xl
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
          flex
          w-full
          items-center
          justify-center
          transition-all
          duration-1000
          ${
            isTyping
              ? "translate-y-5 rotate-[-3deg] sm:translate-y-7"
              : "animate-bounce"
          }
        `}
      >
        <img
          src="/character.jpeg"
          alt="Alaa cartoon character"
          className="
  relative
  block
  h-[360px]
  w-[360px]
  -translate-x-25
  object-contain
  object-center
  drop-shadow-[10px_12px_0px_#17111F]
  sm:h-[400px]
  sm:w-[400px]
  md:h-[430px]
  md:w-[430px]
  lg:h-[450px]
  lg:w-[450px]
  md:drop-shadow-[12px_15px_0px_#17111F]
"
        />

        {/* Laptop */}
        <div
          className={`
            absolute
            bottom-[3%]
            left-1/2
            z-20
            -translate-x-1/2
            rounded-xl
            border-4
            border-[#17111F]
            bg-[#17111F]
            p-2
            shadow-[5px_5px_0px_#FF4FD8]
            transition-all
            duration-700
            sm:bottom-[4%]
            sm:shadow-[6px_6px_0px_#FF4FD8]
            md:bottom-[5%]
            ${isTyping ? "scale-105 rotate-[-2deg] sm:scale-110" : "scale-100"}
          `}
        >
          <div
            className="
              flex
              h-14
              w-24
              items-center
              justify-center
              rounded-md
              bg-[#12D8FA]
              sm:h-20
              sm:w-32
            "
          >
            <span
              className="
                font-mono
                text-[10px]
                font-black
                text-[#17111F]
                sm:text-xs
                md:text-sm
              "
            >
              {isTyping ? "> typing..." : "> hello!"}
            </span>
          </div>

          <div
            className="
              mx-auto
              mt-1
              h-2
              w-28
              rounded-full
              bg-[#FFF8F3]
              sm:w-36
            "
          />
        </div>

        {/* Typing Indicator */}
        {isTyping && (
          <div
            className="
              absolute
              -bottom-3
              -right-3
              z-30
              rotate-[-5deg]
              rounded-full
              border-2
              border-[#17111F]
              bg-[#AAF35E]
              px-3
              py-2
              text-xs
              font-black
              text-[#17111F]
              shadow-[4px_4px_0px_#17111F]
              sm:-right-5
              sm:text-sm
              md:-right-8
            "
          >
            ⌨️ typing...
          </div>
        )}
      </div>

      {/* Decorative Stars */}
      <span
        className="
          absolute
          left-[3%]
          top-[20%]
          z-20
          animate-pulse
          text-3xl
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
          bottom-[18%]
          right-[3%]
          z-20
          animate-pulse
          text-2xl
          text-[#AAF35E]
          sm:right-[8%]
          sm:text-4xl
        "
      >
        ✧
      </span>

      <span
        className="
          absolute
          bottom-[10%]
          left-[8%]
          z-20
          text-xl
          sm:bottom-[15%]
          sm:left-[12%]
          sm:text-3xl
        "
      >
        ⭐
      </span>
    </div>
  );
};

export default HeroCharacter;
