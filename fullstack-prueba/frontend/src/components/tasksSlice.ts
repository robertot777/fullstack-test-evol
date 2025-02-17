// src/features/tasksSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Action para obtener todas las tareas
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('http://localhost:3000/api/tasks');
  return response.data;
});

// Action para crear una nueva tarea
export const createTask = createAsyncThunk('tasks/createTask', async (taskData: any) => {
  const response = await axios.post('http://localhost:3000/api/tasks', taskData);
  return response.data;
});

// Action para actualizar una tarea
export const updateTask = createAsyncThunk('tasks/updateTask', async ({ id, taskData }: any) => {
  const response = await axios.put(`http://localhost:3000/api/tasks/${id}`, taskData);
  return response.data;
});

// Action para eliminar una tarea
export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id: number) => {
  await axios.delete(`http://localhost:3000/api/tasks/${id}`);
  return id; // Solo devolvemos el ID para eliminarlo del estado
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [] as any[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((task: any) => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task: any) => task.id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;
