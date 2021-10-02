import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  // initialState: {
  //   todoList: [],
  // },
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo(state, action) {
      return {
        ...state,
        todoList: [
          ...state.todoList, {
            id: state.todoList.length + 1,
            text: action.payload,
            completed: false,
          },
        ],
      };
    },
    // addTodo: (state, action) => {
    //   state.todoList = [...state.todoList, action.payload];
    // },
    deleteTodo(state, action) {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
    },
    // editTodo(state, action) {},
  },
});

const { actions, reducer } = todoSlice;

export const { addTodo, deleteTodo, editTodo } = actions;

export default reducer;
