import { ArrowUpRight, Sparkles } from "lucide-react";

import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#17111F] px-6 py-32 text-[#FFF8F3]"
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full border-[5px] border-[#FF4FD8]/20" />

      <div className="pointer-events-none absolute -right-40 top-[45%] h-[500px] w-[500px] rounded-full border-[5px] border-[#AAF35E]/10" />

      <div className="pointer-events-none absolute bottom-20 left-[15%] h-24 w-24 rotate-12 border-4 border-[#12D8FA]/20" />

      {/* ================= CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="inline-flex rotate-[-3deg] items-center gap-2 rounded-full border-2 border-[#17111F] bg-[#FF4FD8] px-5 py-2 font-black text-[#17111F] shadow-[4px_4px_0px_#AAF35E]">
              <Sparkles size={17} strokeWidth={3} />
              MY TOOLBOX
            </span>

            <h2 className="mt-8 text-6xl font-black uppercase leading-[0.82] tracking-[-0.06em] md:text-8xl lg:text-9xl">
              WHAT I USE
              <br />
              TO BUILD
              <br />
              <span className="text-[#AAF35E]">THE MAGIC.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base font-medium leading-7 text-[#FFF8F3]/60 md:text-lg">
              A collection of technologies, tools and creative skills I use to
              turn ideas into real digital experiences.
            </p>
          </div>

          {/* ================= SKILL COUNT ================= */}

          <div className="rotate-2 rounded-[1.5rem] border-4 border-[#FFF8F3] bg-[#12D8FA] p-6 text-[#17111F] shadow-[8px_8px_0px_#FF4FD8] lg:w-48">
            <p className="text-xs font-black uppercase tracking-[0.2em]">
              Currently
            </p>

            <p className="mt-2 text-6xl font-black leading-none">
              {skills.length}
            </p>

            <p className="mt-2 text-sm font-black uppercase">Skills & Tools</p>
          </div>
        </div>

        {/* ================= TOOLBOX AREA ================= */}

        <div className="mt-24 grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* ================= ALAA WORLD ================= */}

          <div className="relative">
            <div className="lg:sticky lg:top-10">
              <div className="relative rounded-[2rem] border-4 border-[#FFF8F3] bg-[#FFD44D] p-7 text-[#17111F] shadow-[10px_10px_0px_#FF4FD8]">
                {/* Sticker */}

                <div className="absolute -right-4 -top-4 rotate-12 rounded-full border-2 border-[#17111F] bg-[#AAF35E] px-3 py-1 text-xs font-black shadow-[3px_3px_0px_#17111F]">
                  HELLO 👋
                </div>

                <p className="text-xs font-black uppercase tracking-[0.2em]">
                  Welcome to
                </p>

                <h3 className="mt-3 text-5xl font-black uppercase leading-[0.85] tracking-[-0.05em]">
                  ALAA
                  <br />
                  WORLD.
                </h3>

                <div className="mt-8 h-1 w-full bg-[#17111F]" />

                <p className="mt-5 text-sm font-bold leading-6">
                  Code, design, motion and a little bit of chaos.
                </p>
              </div>
            </div>
          </div>

          {/* ================= SKILLS GRID ================= */}

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill, index) => (
              <article
                key={skill.name}
                className="
                  skill-card
                  group relative overflow-hidden
                  rounded-[1.5rem]
                  border-4 border-[#FFF8F3]
                  bg-[#FFF8F3]
                  p-5
                  text-[#17111F]
                  shadow-[6px_6px_0px_#FF4FD8]
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:rotate-1
                  hover:shadow-[10px_10px_0px_#AAF35E]
                "
              >
                {/* ================= TOP ================= */}

                <div className="flex items-start justify-between gap-3">
                  <span
                    className="
                      flex h-14 w-14 shrink-0
                      items-center justify-center
                      rounded-2xl
                      border-2 border-[#17111F]
                      text-2xl
                      shadow-[3px_3px_0px_#17111F]
                      transition-transform duration-300
                      group-hover:rotate-6
                      group-hover:scale-110
                    "
                    style={{
                      backgroundColor: skill.color,
                    }}
                  >
                    {skill.emoji}
                  </span>

                  <span className="text-xs font-black text-[#17111F]/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* ================= NAME ================= */}

                <h3 className="mt-6 text-xl font-black uppercase tracking-[-0.02em]">
                  {skill.name}
                </h3>

                {/* ================= CATEGORY ================= */}

                <span
                  className="mt-2 inline-block rounded-full border-2 border-[#17111F] px-3 py-1 text-[10px] font-black uppercase"
                  style={{
                    backgroundColor: skill.color,
                  }}
                >
                  {skill.category}
                </span>

                {/* ================= DESCRIPTION ================= */}

                <p className="mt-4 text-sm font-medium leading-6 text-[#17111F]/60">
                  {skill.description}
                </p>

                {/* ================= BOTTOM ================= */}

                <div className="mt-6 flex items-center justify-between border-t-2 border-[#17111F]/10 pt-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#17111F]/40">
                    In my toolbox
                  </span>

                  {/* Arrow appears only on hover */}

                  <span
                    className="
                      flex h-8 w-8
                      items-center justify-center
                      rounded-full
                      border-2 border-[#17111F]
                      bg-[#FF4FD8]
                      text-[#17111F]
                      opacity-0
                      translate-y-2
                      transition-all duration-300
                      group-hover:translate-y-0
                      group-hover:rotate-[-45deg]
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight size={15} strokeWidth={3} />
                  </span>
                </div>

                {/* ================= DECORATIVE CORNER ================= */}

                <div
                  className="
                    pointer-events-none
                    absolute -bottom-8 -right-8
                    h-20 w-20
                    rounded-full
                    opacity-20
                    transition-transform duration-500
                    group-hover:scale-150
                  "
                  style={{
                    backgroundColor: skill.color,
                  }}
                />
              </article>
            ))}
          </div>
        </div>

        {/* ================= FOOTER ================= */}

        <div className="mt-20 flex flex-col gap-4 border-t-2 border-[#FFF8F3]/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-black uppercase tracking-[0.15em] text-[#FFF8F3]/40">
            Always learning • Always building • Always experimenting
          </p>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#AAF35E]" />

            <span className="h-3 w-3 rounded-full bg-[#FF4FD8]" />

            <span className="h-3 w-3 rounded-full bg-[#12D8FA]" />

            <span className="h-3 w-3 rounded-full bg-[#FFD44D]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
