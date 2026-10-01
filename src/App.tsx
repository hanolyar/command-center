import Dashboard from "./components/dashboard";
import Tasks from "./components/tasks";
import Projects from "./components/projects";
import Notes from "./components/notes";

function App() {
  return (
    <main>
      <h1>Command Center</h1>

      <Dashboard />
      <Tasks />
      <Projects />
      <Notes />
    </main>
  );
}

export default App;