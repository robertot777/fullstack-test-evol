import React, { useState } from 'react';
import axios from 'axios';

function TaskForm({ onTaskAdded }) {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task) return;

    // Hacer una solicitud POST al backend para agregar la tarea
    try {
      const response = await axios.post('http://localhost:3001/tasks', { task });
      onTaskAdded(response.data); // Pasar la nueva tarea al componente padre
      setTask('');
    } catch (error) {
      console.error('Error al agregar la tarea:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Añadir tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Añadir</button>
    </form>
  );
}

export default TaskForm;
