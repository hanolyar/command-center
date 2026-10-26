import { useEffect, useState } from "react";
import type { Task } from "../types/task";

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
  
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState<Task["priority"]>("medium");
  // saving tasks to local storage:
  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (newTask.trim() === "") return;

    const task: Task = {
        id: Date.now(),
        title: newTask,
        completed: false,
        priority: newPriority,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  }
  function toggleTask(id: number) {
  setTasks(
    tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
  }
  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
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
      <select
        value={newPriority}
        onChange={(event) =>
        setNewPriority(event.target.value as Task["priority"])
        }
>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={addTask}>
        Add
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
             />

            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                opacity: task.completed ? 0.5 : 1,
              }}
           >
              {task.title} — {task.priority}
            </span>
       </label>
       <button onClick={() => deleteTask(task.id)}>
          Delete
       </button>
     </li>
    ))}
    </ul>
    </section>
  );
}

export default Tasks;