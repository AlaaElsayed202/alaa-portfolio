import { ArrowUpRight, BookOpen, Code2, Database, Server } from "lucide-react";

const learningNext = [
  {
    number: "01",
    name: "Redux Toolkit",
    category: "State Management",
    description:
      "Currently learning Redux Toolkit to build stronger and more scalable state management in React applications.",
    icon: <Code2 size={28} strokeWidth={2.5} />,
    color: "#FF4FD8",
  },
  {
    number: "02",
    name: "Backend Development",
    category: "Next Major Step",
    description:
      "My next step is learning backend development to move from building frontend experiences to creating complete full-stack applications.",
    icon: <Server size={28} strokeWidth={2.5} />,
    color: "#12D8FA",
  },
  {
    number: "03",
    name: "Node.js & Express",
    category: "Backend",
    description:
      "Learning how to build servers, REST APIs and backend services using Node.js and Express.",
    icon: <Database size={28} strokeWidth={2.5} />,
    color: "#AAF35E",
  },
];

const LearningNext = () => {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#FFF8F3]
        px-6 py-28
      "
    >
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full border-[5px] border-[#17111F]/10" />

      <div className="pointer-events-none absolute -left-16 bottom-20 h-48 w-48 rotate-12 border-4 border-[#17111F]/10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-[#17111F] bg-[#FFD44D] px-5 py-2 font-black shadow-[4px_4px_0px_#17111F]">
            <BookOpen size={18} strokeWidth={3} />
            NEXT CHAPTER
          </div>

          <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-8xl">
            STILL
            <br />
            <span className="text-[#FF4FD8]">LEARNING.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-[#17111F]/65">
            I believe there is always something new to learn. These are the
            technologies I am currently exploring and planning to add to my
            toolkit.
          </p>
        </div>

        {/* Learning cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {learningNext.map((item) => (
            <article
              key={item.number}
              className="
                group relative flex min-h-[360px] flex-col
                overflow-hidden
                rounded-[2rem]
                border-4 border-[#17111F]
                bg-white
                p-7
                shadow-[8px_8px_0px_#17111F]
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[12px_12px_0px_#17111F]
              "
              style={{
                borderTopColor: item.color,
              }}
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <span
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    border-2 border-[#17111F]
                    shadow-[3px_3px_0px_#17111F]
                  "
                  style={{
                    backgroundColor: item.color,
                  }}
                >
                  {item.icon}
                </span>

                <span className="text-sm font-black text-[#17111F]/35">
                  {item.number}
                </span>
              </div>

              {/* Content */}
              <div className="mt-10">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#17111F]/45">
                  {item.category}
                </p>

                <h3 className="text-3xl font-black uppercase tracking-[-0.04em]">
                  {item.name}
                </h3>

                <p className="mt-5 text-base font-medium leading-relaxed text-[#17111F]/60">
                  {item.description}
                </p>
              </div>

              {/* Bottom */}
              <div className="mt-auto flex items-center justify-between border-t-2 border-[#17111F]/10 pt-6">
                <span className="rounded-full border-2 border-[#17111F] bg-[#17111F] px-4 py-2 text-xs font-black uppercase text-white">
                  Coming Next
                </span>

                {/* Arrow appears ONLY on hover */}
                <span
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    border-2 border-[#17111F]
                    opacity-0
                    translate-y-2
                    transition-all duration-300
                    group-hover:translate-y-0
                    group-hover:rotate-[-45deg]
                    group-hover:opacity-100
                  "
                  style={{
                    backgroundColor: item.color,
                  }}
                >
                  <ArrowUpRight size={17} strokeWidth={3} />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom roadmap */}
        <div
          className="
            mt-12 flex flex-col gap-5
            rounded-[2rem]
            border-4 border-[#17111F]
            bg-[#17111F]
            p-7 text-white
            shadow-[8px_8px_0px_#FF4FD8]
            md:flex-row md:items-center md:justify-between
          "
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/45">
              THE GOAL
            </p>

            <h3 className="mt-2 text-2xl font-black uppercase md:text-3xl">
              Frontend → Full-Stack
            </h3>

            <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-white/60">
              Keep getting stronger in frontend development while gradually
              expanding into state management and backend development.
            </p>
          </div>

          <div className="shrink-0 rounded-full border-2 border-white/20 bg-white/10 px-5 py-3 text-sm font-black uppercase">
            Learning Mode 🚀
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningNext;
