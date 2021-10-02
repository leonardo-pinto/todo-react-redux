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

    const expectedItem = {
      id: 1,
      completed: false,
      text: todo,
    };

    expect(newState).toEqual({ todoList: [expectedItem] });
  });

  it('Should delete todo if receiving action type deleteTodo', () => {
    const initialState = {
      todoList: [{
        id: 1,
        completed: false,
        text: 'study redux',
      }],
    };
    const idToBeRemoved = 1;
    const newState = todoReducer(initialState, {
      type: deleteTodo,
      payload: idToBeRemoved,
    });

    expect(newState).toEqual({ todoList: [] });
  });
});
