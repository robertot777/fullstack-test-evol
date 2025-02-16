// src/components/TaskItem.tsx
import React from 'react';

const TaskItem = ({ task }: { task: any }) => {
  return (
    <li className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <p>Tags: {task.tags.join(', ')}</p>
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
    </li>
  );
};

export default TaskItem;
