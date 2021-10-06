import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          text: action.payload,
          completed: false,
        },
      ];
    },
    deleteTodo(state, action) {
      const filteredTodos = state.filter(({ id }) => id !== action.payload);
      return filteredTodos;
    },
    editTodo(state, action) {
      return (
        state.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              text: action.payload.text,
            };
          }
          return todo;
        })
      );
    },
    completeTodo(state, action) {
      return (
        state.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: action.payload.completed,
            };
          }
          return todo;
        })
      );
    },
  },
});

const { actions, reducer } = todoSlice;

export const {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
} = actions;

export default reducer;
