import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// BEGIN (write your solution here)
const adapter = createEntityAdapter();

const usersSlice = createSlice({
  name: "users",
  initialState: adapter.getInitialState(),
  reducers: {
    addUsers: adapter.addMany,
  },
});

export const { actions } = usersSlice;
export const selectors = adapter.getSelectors((state) => state.usersReducer);
export default usersSlice.reducer;
// END
