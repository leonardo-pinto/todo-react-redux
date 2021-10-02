import todoReducer, { addTodo, deleteTodo } from './todoReducer';

describe('todoReducer', () => {
  it('Should return default state', () => {
    const newState = todoReducer(undefined, {});
    expect(newState).toEqual({ todoList: [] });
  });

  it('Should return new state if receiving action type addTodo', () => {
    const todo = 'study redux';
    const newState = todoReducer(undefined, {
      type: addTodo,
      payload: todo,
    });
    expect(newState).toEqual({ todoList: [todo] });
  });

  it('Should delete todo if receiving action type deleteTodo', () => {
    const initialState = {
      todoList: ['study context api'],
    };
    const todoToBeRemoved = 'study context api';
    const newState = todoReducer(initialState, {
      type: deleteTodo,
      payload: todoToBeRemoved,
    });

    expect(newState).toEqual({ todoList: [] });
  });
});
