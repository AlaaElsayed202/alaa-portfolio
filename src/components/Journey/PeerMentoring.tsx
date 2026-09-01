import { ArrowUpRight, UsersRound } from "lucide-react";

const PeerMentoring = () => {
  return (
    <article
      className="
        group relative overflow-hidden
        rounded-[2rem]
        border-4 border-[#17111F]
        bg-[#FF4FD8]
        p-7
        shadow-[8px_8px_0px_#17111F]
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-[12px_12px_0px_#17111F]
      "
    >
      {/* Decorative circles */}
      <div
        className="
          pointer-events-none absolute
          -right-16 -top-16
          h-44 w-44
          rounded-full
          border-4 border-[#17111F]/10
        "
      />

      <div
        className="
          pointer-events-none absolute
          -bottom-20 -left-20
          h-44 w-44
          rounded-full
          border-4 border-[#17111F]/10
        "
      />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div
          className="
            flex h-16 w-16 shrink-0
            items-center justify-center
            rounded-2xl
            border-2 border-[#17111F]
            bg-[#FFF8F3]
            shadow-[4px_4px_0px_#17111F]
          "
        >
          <UsersRound size={30} strokeWidth={2.5} />
        </div>

        <span
          className="
            rounded-full
            border-2 border-[#17111F]
            bg-[#AAF35E]
            px-4 py-2
            text-xs font-black uppercase
            shadow-[3px_3px_0px_#17111F]
          "
        >
          Peer Support
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mt-10">
        <p
          className="
            text-xs font-black uppercase
            tracking-[0.2em]
            text-[#17111F]/55
          "
        >
          Supporting Other Learners
        </p>

        <h3
          className="
            mt-2
            text-4xl font-black uppercase
            leading-none tracking-[-0.05em]
            md:text-5xl
          "
        >
          Frontend
          <br />
          Mentoring
        </h3>

        <p
          className="
            mt-5 max-w-xl
            text-base font-bold
            leading-relaxed
            text-[#17111F]/70
          "
        >
          Supported multiple learners throughout their frontend learning
          journeys at different points in time. I helped them decide what to
          learn and where to start, recommended useful resources, and explained
          concepts with simple practical examples whenever they needed help
          understanding something.
        </p>
      </div>

      {/* How I Supported Them */}
      <div className="relative z-10 mt-8">
        <p
          className="
            mb-3
            text-xs font-black uppercase
            tracking-[0.18em]
            text-[#17111F]/50
          "
        >
          How I Supported Them
        </p>

        <div className="flex flex-wrap gap-2">
          {[
            "Learning Guidance",
            "Resource Recommendations",
            "Concept Explanation",
            "Practical Examples",
          ].map((item) => (
            <span
              key={item}
              className="
                rounded-full
                border-2 border-[#17111F]
                bg-[#FFF8F3]
                px-3 py-1.5
                text-xs font-bold
              "
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div
        className="
          relative z-10 mt-8
          flex items-center justify-between
          gap-4
          border-t-2 border-[#17111F]/20
          pt-5
        "
      >
        <span
          className="
            text-xs font-black uppercase
            tracking-[0.12em]
          "
        >
          Guide → Explain → Support ✦
        </span>

        {/* Arrow appears only on hover */}
        <span
          className="
            flex h-9 w-9 shrink-0
            items-center justify-center
            rounded-full
            border-2 border-[#17111F]
            bg-[#AAF35E]
            opacity-0
            translate-y-2
            transition-all duration-300
            group-hover:translate-y-0
            group-hover:rotate-[-45deg]
            group-hover:opacity-100
          "
        >
          <ArrowUpRight size={17} strokeWidth={3} />
        </span>
      </div>
    </article>
  );
};

export default PeerMentoring;
