import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            text: action.payload,
            completed: false,
          },
        ],
      };
    },
    deleteTodo(state, action) {
      const filteredTodos = state.todos.filter(({ id }) => id !== action.payload);
      return {
        ...state,
        todos: filteredTodos,
      };
    },
    editTodo(state, action) {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              text: action.payload.text,
            };
          }
          return todo;
        }),
      };
    },
    completeTodo(state, action) {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: action.payload.completed,
            };
          }
          return todo;
        }),
      };
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
