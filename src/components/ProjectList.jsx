import ProjectCard from "./ProjectCard";

function ProjectList(props) {
  const projects = props.projects;
  const searchTerm = props.searchTerm;

  const filteredProjects = projects.filter(function (project) {
    return project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      {filteredProjects.length === 0 && <p>No projects found.</p>}

      {filteredProjects.map(function (project) {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
}

export default ProjectList;
