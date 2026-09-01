const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FFF8F3] px-6 py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <span className="inline-block rotate-[-3deg] rounded-full border-2 border-[#17111F] bg-[#AAF35E] px-5 py-2 font-black shadow-[4px_4px_0px_#17111F]">
            A LITTLE ABOUT ME ✦
          </span>

          <h2
            id="about-title"
            className="mt-8 text-6xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-8xl"
          >
            I&apos;M NOT HERE
            <br />
            TO MAKE
            <br />
            <span className="relative inline-block text-[#7C5CFF]">
              BORING
              <span className="absolute left-0 top-1/2 h-3 w-full rotate-[-6deg] bg-[#FF4FD8]" />
            </span>
            <br />
            WEBSITES.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#17111F]/70">
            I&apos;m Alaa — a frontend developer who loves turning ideas into
            colorful, clear and interactive experiences.
          </p>

          <p className="mt-5 max-w-xl text-lg leading-8 text-[#17111F]/70">
            I care about motion, spacing, responsiveness, accessibility, and
            those tiny details that make a product feel alive.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Frontend", "UI / UX", "Motion", "Creative Coding"].map(
              (tag, index) => (
                <span
                  key={tag}
                  className={`rounded-full border-2 border-[#17111F] px-5 py-3 font-black shadow-[4px_4px_0px_#17111F] ${
                    index % 2 === 0 ? "bg-[#FFD44D]" : "bg-[#12D8FA]"
                  }`}
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>

        <div
          id="about-character"
          className="relative flex min-h-[500px] items-center justify-center"
        >
          <div className="absolute h-80 w-80 rounded-full bg-[#FF4FD8]/30 blur-3xl" />

          <div className="relative flex h-[390px] w-[330px] items-center justify-center rounded-[45%] border-4 border-[#17111F] bg-[#12D8FA] shadow-[14px_14px_0px_#17111F]">
            <div className="text-[130px] transition duration-500 hover:-translate-y-5 hover:rotate-3">
              👩🏻‍💻
            </div>

            <div className="absolute -right-12 top-10 rotate-6 rounded-3xl border-3 border-[#17111F] bg-[#FFF8F3] px-5 py-4 font-black shadow-[5px_5px_0px_#17111F]">
              yes, I actually
              <br />
              love pixels.
            </div>

            <div className="absolute -bottom-6 rounded-full border-3 border-[#17111F] bg-[#FF845F] px-6 py-3 font-black shadow-[5px_5px_0px_#17111F]">
              MADE WITH ❤️ + CODE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
