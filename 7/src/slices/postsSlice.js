import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// BEGIN (write your solution here)
const adapter = createEntityAdapter();

const postsSlice = createSlice({
  name: "posts",
  initialState: adapter.getInitialState(),
  reducers: {
    addPost: adapter.addOne,
    addPosts: adapter.addMany,
    updatePost: adapter.updateOne,
  },
});

export const { actions } = postsSlice;
export const selectors = adapter.getSelectors((state) => state.postsReducer);
export default postsSlice.reducer;
// END
