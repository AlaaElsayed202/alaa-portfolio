import type { Skill } from "../../data/skills";

type SkillBubbleProps = {
  skill: Skill;
};

const SkillBubble = ({ skill }: SkillBubbleProps) => {
  return (
    <div className="skill-bubble group relative cursor-pointer">
      <div
        className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-[#17111F] text-xl font-black text-[#17111F] shadow-[7px_7px_0px_#17111F] transition duration-500 group-hover:-translate-y-4 group-hover:rotate-6 group-hover:scale-110"
        style={{ backgroundColor: skill.color }}
      >
        {skill.emoji}
      </div>

      <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-4 w-48 -translate-x-1/2 scale-0 rounded-2xl border-2 border-[#17111F] bg-[#FFF8F3] p-4 text-[#17111F] opacity-0 shadow-[5px_5px_0px_#17111F] transition duration-300 group-hover:scale-100 group-hover:opacity-100">
        <p className="font-black">{skill.name}</p>

        <p className="mt-1 text-xs leading-5 text-[#17111F]/60">
          {skill.description}
        </p>
      </div>
    </div>
  );
};

export default SkillBubble;
