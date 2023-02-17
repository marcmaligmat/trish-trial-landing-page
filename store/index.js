import { configureStore, createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    showQuestionsOverlay: false,
    questionNumber: 1,
    maxPage: 1,
    questionProps: "",
  },
  reducers: {
    toggleOverlay(state, action) {
      state.showQuestionsOverlay = !state.showQuestionsOverlay;
    },
    incrementPageNumber(state, action) {
      state.questionNumber += 1;
    },
    resetQuestionNumber(state, action) {
      state.questionNumber = 1;
    },
  },
});
export const actions = questionsSlice.actions;
const store = configureStore({
  reducer: questionsSlice.reducer,
});

export default store;
