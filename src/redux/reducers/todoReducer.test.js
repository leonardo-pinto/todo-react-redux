import todoReducer, { addTodo, deleteTodo, editTodo } from './todoReducer';

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

  it('Should edit todo if receiving action type editTodo', () => {
    const initialState = {
      todoList: [
        {
          id: 1,
          completed: false,
          text: 'text 1',
        },
        {
          id: 2,
          completed: false,
          text: 'text 2',
        },
        {
          id: 3,
          completed: false,
          text: 'text 3',
        },
      ],
    };
    const idToBeEdited = 2;

    const newState = todoReducer(initialState, {
      type: editTodo,
      payload: {
        id: idToBeEdited,
        text: 'Edited text 2',
      },
    });

    const expectedNewState = {
      todoList: [
        {
          id: 1,
          completed: false,
          text: 'text 1',
        },
        {
          id: 2,
          completed: false,
          text: 'Edited text 2',
        },
        {
          id: 3,
          completed: false,
          text: 'text 3',
        },
      ],
    };

    expect(newState).toStrictEqual(expectedNewState);
  });
});
