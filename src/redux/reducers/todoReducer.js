import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
    },
    deleteTodo(state, action) {
      state.todoList = state.todoList.filter((todo) => todo !== action.payload);
    },
    // editTodo(state, action) {},
  },
});

const { actions, reducer } = todoSlice;

export const { addTodo, deleteTodo, editTodo } = actions;

export default reducer;
