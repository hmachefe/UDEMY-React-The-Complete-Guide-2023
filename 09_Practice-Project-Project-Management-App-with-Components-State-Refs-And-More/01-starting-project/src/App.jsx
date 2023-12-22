import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';
import { useState } from 'react';
import SelectedProject from './components/SelectedProject';

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {

    setProjectsState(prevProjectsState => {

      const newTask = {
        text: text,
        id: Math.random()
      }  

      return {
        ...prevProjectsState,
        tasks: [newTask, ...prevProjectsState.tasks],
      };
    });
  }

  function handleDeleteTask() {

  }

  function handleStartAddProject() {
    setProjectsState(prevProjectsState => ({
      ...prevProjectsState,
      selectedProjectId: null
    }));
  }

  function handleAddNewPoject(newProjectData) {
    const newProject = {
      ...newProjectData,
      id: Math.random()
    }

    setProjectsState(prevProjectsState => ({
      ...prevProjectsState,
      selectedProjectId: undefined,
      projects: [...prevProjectsState.projects, newProject]
    }));
  }


  function handleCancelNewProject() {

    setProjectsState(prevProjectsState => ({
      ...prevProjectsState,
      selectedProjectId: undefined,
    }));
  }

  function handleSelectProject(id) {
    setProjectsState(prevProjectsState => ({
      ...prevProjectsState,
      selectedProjectId: id
    }))
  }

  function handleDeleteProject() {
    setProjectsState(prevProjectsState => ({
      ...prevProjectsState,
      selectedProjectId: undefined,
      projects: prevProjectsState.projects.filter(project => project.id !== prevProjectsState.selectedProjectId)
    }))
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = (
        <SelectedProject 
              project={selectedProject} 
              onDelete={handleDeleteProject} 
              onAddTask={handleAddTask} 
              onDeleteTask={handleDeleteTask}
              tasks={projectsState.tasks}
        />
  );

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddNewPoject} onCancel={handleCancelNewProject}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects} 
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
        />
      {content}
    </main>
  );
}

export default App;
