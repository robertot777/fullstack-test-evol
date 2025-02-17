// src/components/taskList.tsx
import React from 'react';

interface TaskListProps {
  tasks: string[];  // Definir que tasks es un array de strings
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>  // Mostrar cada tarea como un elemento de lista
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
