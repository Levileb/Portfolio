import { projects } from "../projects/project";

const Projects = () => {
  return (
    <section id="projects" className="p-12 lg:p-32 pt-40 my-32 ">
      <div className="text-center mb-2 lg:ml-8">
        <h2 className="text-3xl font-medium lg:text-left intersect:motion-preset-slide-up motion-delay-200
          ">Featured Projects</h2>
          <div className="w-32 h-1 bg-blue-500 mx-auto lg:mx-0 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 justify-center intersect:motion-preset-slide-up motion-delay-100">
        {projects.map((project, index)  => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full mx-auto"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg w-full h-auto"
            />

            <div className="project-details text-left">
              <h1 className="text-2xl font-semibold mb-2">{project.name}</h1>
              <p className="text-gray-600 mb-1">{project.description}</p>
              <p className="text-gray-500 italic text-sm">
                {project.technologies.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
