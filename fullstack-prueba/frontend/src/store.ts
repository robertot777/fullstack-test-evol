import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import tasksReducer from './features/tasksSlice';

interface Task {
  id: number;
  title: string;
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {
    addTask: (state, action: { payload: Task }) => {
      state.push(action.payload);
    },
    removeTask: (state, action: { payload: { id: number } }) => {
      return state.filter(task => task.id !== action.payload.id);
    },
  },
});

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;;

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
