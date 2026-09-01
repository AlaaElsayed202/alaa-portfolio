import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#12D8FA] px-6 py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full border-[6px] border-[#17111F]/10" />

      <div className="pointer-events-none absolute -right-24 top-[35%] h-96 w-96 rounded-full border-[6px] border-[#17111F]/10" />

      <div className="pointer-events-none absolute bottom-20 left-[40%] h-40 w-40 rotate-12 border-4 border-[#17111F]/10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-24 text-center">
          <span className="inline-block rotate-[-3deg] rounded-full border-2 border-[#17111F] bg-[#AAF35E] px-5 py-2 font-black shadow-[4px_4px_0px_#17111F]">
            MY LITTLE UNIVERSE 🏙️
          </span>

          <h2 className="mt-7 text-6xl font-black uppercase leading-[0.85] tracking-[-0.06em] md:text-9xl">
            PROJECT
            <br />
            <span className="text-[#FF4FD8]">CITY.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg font-medium text-[#17111F]/70">
            Every project gets its own little world. Come take a look around.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
