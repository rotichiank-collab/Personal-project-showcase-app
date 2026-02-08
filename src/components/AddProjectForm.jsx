import { useState } from "react";

function AddProjectForm(props) {
  const setProjects = props.setProjects;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (title === "" || description === "") {
      return;
    }

    const newProject = {
      id: Date.now(),
      title: title,
      description: description
    };

    setProjects(function (oldProjects) {
      return oldProjects.concat(newProject);
    });

    setTitle("");
    setDescription("");
  }

  return (
    <div>
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProjectForm;
