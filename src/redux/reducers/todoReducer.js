import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
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
    deleteTodo(state, action) {
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    },
    editTodo(state, action) {
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
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
  },
});

const { actions, reducer } = todoSlice;

export const { addTodo, deleteTodo, editTodo } = actions;

export default reducer;
