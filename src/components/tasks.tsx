import { useState } from "react";
import type { Task } from "../types/task";

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() === "") return;

    const task: Task = {
        id: Date.now(),
        title: newTask,
        completed: false,
        priority: "medium",
    };

    setTasks([...tasks, task]);
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
          <li key={task.id}>
            {task.title} - {task.priority}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Tasks;