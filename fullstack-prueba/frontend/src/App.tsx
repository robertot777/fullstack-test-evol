// src/App.tsx
import React from 'react';
import TaskList from './components/taskList';

const App: React.FC = () => {
  // Definir algunas tareas de ejemplo
  const tasks = ["Comprar leche", "Hacer ejercicio", "Estudiar React"];

  return (
    <div>
      <h1>Aplicación de Lista de Tareas</h1>
      <TaskList tasks={tasks} />  {/* Pasamos las tareas como props */}
    </div>
  );
};

export default App;

