// src/components/TaskList.tsx
import { useEffect } from 'react';
import { AppDispatch } from '../store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './tasksSlice.ts';
import TaskItem from '../../taskItem.tsx';

const TaskList = () => {
  const dispatch: AppDispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state: any) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading tasks: {error}</p>;

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task: any) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
