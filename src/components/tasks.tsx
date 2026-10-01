import { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() === "") return;

    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  return (
    <section>
      <h2>Tasks</h2>

      <input
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="Add a task"
      />

      <button onClick={addTask}>
        Add
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </section>
  );
}

export default Tasks;