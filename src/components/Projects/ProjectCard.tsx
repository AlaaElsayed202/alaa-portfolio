import { ArrowUpRight, LockKeyhole, Wrench } from "lucide-react";
import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const isCompleted = project.status === "completed";
  const isInProgress = project.status === "in-progress";
  const isFuture = project.status === "future";

  return (
    <article
      className="
        project-card
        group relative flex h-full min-h-[520px] flex-col
        overflow-hidden rounded-[2rem]
        border-4 border-[#17111F]
        bg-[#FFF8F3]
        shadow-[8px_8px_0px_#17111F]
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-[12px_12px_0px_#17111F]
      "
      style={{
        borderTopColor: project.color,
      }}
    >
      {/* ================= HEADER ================= */}
      <div
        className="relative min-h-[235px] overflow-hidden border-b-4 border-[#17111F] p-7"
        style={{
          backgroundColor: project.color,
        }}
      >
        {/* Decorative shapes */}
        <div
          className="
            absolute -right-10 -top-10
            h-36 w-36 rounded-full
            border-4 border-[#17111F]
            bg-white/20
            transition-transform duration-500
            group-hover:rotate-12
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute -bottom-12 -left-12
            h-32 w-32 rounded-full
            border-4 border-[#17111F]
            bg-white/20
            transition-transform duration-500
            group-hover:-rotate-12
            group-hover:scale-110
          "
        />

        {/* Number + Emoji */}
        <div className="relative z-10 flex items-start justify-between">
          <span
            className="
              rounded-full
              border-2 border-[#17111F]
              bg-[#FFF8F3]
              px-4 py-2
              text-sm font-black
              shadow-[3px_3px_0px_#17111F]
            "
          >
            {project.number}
          </span>

          <span
            className="
              text-5xl
              transition-transform duration-300
              group-hover:rotate-12
              group-hover:scale-110
            "
          >
            {project.emoji}
          </span>
        </div>

        {/* Project Name */}
        <div className="relative z-10 mt-12">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#17111F]/60">
            {project.category}
          </p>

          <h3
            className="
              text-4xl font-black uppercase
              leading-none tracking-[-0.05em]
              md:text-5xl
            "
          >
            {project.name}
          </h3>
        </div>

        {/* Status */}
        <div className="absolute bottom-5 right-6 z-20">
          {/* Completed */}
          {isCompleted && (
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
              ✓ Completed
            </span>
          )}

          {/* In Progress */}
          {isInProgress && (
            <span
              className="
                flex items-center gap-2
                rounded-full
                border-2 border-[#17111F]
                bg-[#FFD44D]
                px-4 py-2
                text-xs font-black uppercase
                shadow-[3px_3px_0px_#17111F]
              "
            >
              <Wrench size={14} strokeWidth={3} />
              In Development
            </span>
          )}

          {/* Future */}
          {isFuture && (
            <span
              className="
                flex items-center gap-2
                rounded-full
                border-2 border-[#17111F]
                bg-[#FFF8F3]
                px-4 py-2
                text-xs font-black uppercase
                shadow-[3px_3px_0px_#17111F]
              "
            >
              <LockKeyhole size={14} strokeWidth={3} />
              Coming Soon
            </span>
          )}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col p-7">
        {/* Description */}
        <div>
          <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#17111F]/50">
            About
          </p>

          <p className="text-base font-bold leading-relaxed text-[#17111F]">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-7">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#17111F]/50">
            {isFuture ? "Planned Stack" : "Built With"}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border-2 border-[#17111F]
                  bg-white
                  px-3 py-1.5
                  text-xs font-bold
                  transition-all duration-200
                  group-hover:-translate-y-0.5
                "
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* ================= ACTIONS ================= */}
        <div className="mt-auto pt-8">
          {/* COMPLETED */}
          {isCompleted && (
            <div className="flex flex-wrap gap-3">
              {/* Live Demo */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border-2 border-[#17111F]
                    bg-[#17111F]
                    px-5 py-3
                    text-sm font-black uppercase text-white
                    transition-all duration-200
                    hover:-translate-y-1
                    hover:shadow-[4px_4px_0px_#FF4FD8]
                  "
                >
                  Enter This World
                  <ArrowUpRight size={18} strokeWidth={3} />
                </a>
              )}

              {/* GitHub */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border-2 border-[#17111F]
                    bg-white
                    px-5 py-3
                    text-sm font-black uppercase
                    transition-all duration-200
                    hover:-translate-y-1
                    hover:bg-[#AAF35E]
                    hover:shadow-[4px_4px_0px_#17111F]
                  "
                >
                  GitHub ↗
                </a>
              )}

              {/* No links */}
              {!project.liveUrl && !project.githubUrl && (
                <span className="text-sm font-black uppercase text-[#17111F]/40">
                  Links Coming Soon
                </span>
              )}
            </div>
          )}

          {/* IN PROGRESS */}
          {isInProgress && (
            <div className="flex flex-wrap gap-3">
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border-2 border-[#17111F]
                  bg-[#FFD44D]
                  px-5 py-3
                  text-sm font-black uppercase
                  shadow-[3px_3px_0px_#17111F]
                "
              >
                <Wrench size={18} strokeWidth={3} />
                Under Development
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border-2 border-[#17111F]
                    bg-white
                    px-5 py-3
                    text-sm font-black uppercase
                    transition-all duration-200
                    hover:-translate-y-1
                    hover:bg-[#AAF35E]
                    hover:shadow-[4px_4px_0px_#17111F]
                  "
                >
                  GitHub ↗
                </a>
              )}
            </div>
          )}

          {/* FUTURE */}
          {isFuture && (
            <div
              className="
                flex items-center justify-between
                rounded-2xl
                border-2 border-dashed border-[#17111F]/40
                bg-[#17111F]/5
                px-5 py-4
              "
            >
              <div>
                <p className="text-sm font-black uppercase">On The Roadmap</p>

                <p className="mt-1 text-xs font-medium text-[#17111F]/50">
                  This world is still being designed ✦
                </p>
              </div>

              <LockKeyhole
                size={22}
                className="text-[#17111F]/40"
                strokeWidth={2.5}
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
