import { useState } from "react";
import Header from "./components/Header";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container">
      <Header />
      <AddProjectForm setProjects={setProjects} />
      <SearchBar setSearchTerm={setSearchTerm} />
      <ProjectList projects={projects} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
