import { configureStore, createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    showQuestionsOverlay: false,
    pageNumber: 1,
    maxPage: 1,
  },
  reducers: {
    toggleOverlay(state, action) {
      state.showQuestionsOverlay = !state.showQuestionsOverlay;
    },
    incrementPageNumber(state, action) {},
  },
});
export const actions = questionsSlice.actions;
const store = configureStore({
  reducer: questionsSlice.reducer,
});

export default store;
