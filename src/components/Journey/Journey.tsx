import PeerMentoring from "./PeerMentoring";

const Journey = () => {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#FFD44D] px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block rotate-[-3deg] rounded-full border-2 border-[#17111F] bg-[#FFF8F3] px-5 py-2 font-black shadow-[4px_4px_0px_#17111F]">
            MY JOURNEY 🚀
          </span>

          <h2 className="mt-7 text-6xl font-black uppercase leading-[0.85] tracking-[-0.06em] md:text-9xl">
            HOW I
            <br />
            <span className="text-[#FF4FD8]">GOT HERE.</span>
          </h2>
        </div>

        {/* Existing Journey content */}
        {/* حطي الـ timeline / باقي الـ Journey بتاعك هنا */}

        {/* Mentoring */}
        <div className="mt-16">
          <PeerMentoring />
        </div>
      </div>
    </section>
  );
};

export default Journey;
