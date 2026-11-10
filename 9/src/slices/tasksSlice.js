import axios from "axios";

import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import routes from "../routes.js";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get(routes.tasksPath());
  return response.data.items;
});

// BEGIN (write your solution here)
export const addTask = createAsyncThunk("tasks/addTask", async (task) => {
  const response = await axios.post(routes.tasksPath(), task);
  return response.data;
});

export const removeTask = createAsyncThunk("tasks/removeTask", async (id) => {
  await axios.delete(routes.taskPath(id));
  return id;
});

const adapter = createEntityAdapter();

const tasksSlice = createSlice({
  name: "tasks",
  initialState: adapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        adapter.setAll(state, action.payload);
      })
      .addCase(addTask.fulfilled, (state, action) => {
        adapter.addOne(state, action.payload);
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        adapter.removeOne(state, action.payload);
      });
  },
});

export const selectors = adapter.getSelectors((state) => state.tasks);
export default tasksSlice.reducer;
// END
