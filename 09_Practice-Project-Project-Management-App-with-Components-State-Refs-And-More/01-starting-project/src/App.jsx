import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';
import { useState } from 'react';

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

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
      projects: [...prevProjectsState.projects, newProject]
    }));
  }
  console.log(projectsState);


  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddNewPoject}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
