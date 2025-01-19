const API_URL = "http://localhost:3000";

export async function fetchTasks() {
  const res = await fetch(`${API_URL}/tasks`);
  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return await res.json();
}

export async function handleToggle(id: number, completed: boolean): Promise<boolean> {
  try {
    const res = await fetch(`${API_URL}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    });

    if (!res.ok) {
      throw new Error("Failed to update task completion");
    }

    // Optimistically update the tasks state
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !completed } : task
      )
    );

    return true;
  } catch (error) {
    console.error("Error in handleToggle:", error);
    return false;
  }
}
