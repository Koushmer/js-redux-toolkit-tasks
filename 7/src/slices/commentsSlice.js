import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// BEGIN (write your solution here)
const adapter = createEntityAdapter();

const commentsSlice = createSlice({
  name: "comments",
  initialState: adapter.getInitialState(),
  reducers: {
    addComment: adapter.addOne,
    addComments: adapter.addMany,
  },
});

export const { actions } = commentsSlice;
export const selectors = adapter.getSelectors((state) => state.commentsReducer);
export default commentsSlice.reducer;
// END
