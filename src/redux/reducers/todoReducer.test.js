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
      completed: false,
      id: 1,
      text: todo,
    };

    expect(newState).toEqual({ todoList: [expectedItem] });
  });

  it('Should create todo with id 1 in case there are not previous todos', () => {
    const todo = 'test';
    const newState = todoReducer(undefined, {
      type: addTodo,
      payload: todo,
    });

    const expectedNewState = {
      completed: false,
      id: 1,
      text: todo,
    };

    expect(newState).toEqual({ todoList: [expectedNewState] });
  });

  it('Should create todo with id 4 in case there are two previous todos', () => {
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

    const newState = todoReducer(initialState, {
      type: addTodo,
      payload: 'text 4',
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
          text: 'text 2',
        },
        {
          id: 3,
          completed: false,
          text: 'text 3',
        },
        {
          id: 4,
          completed: false,
          text: 'text 4',
        },
      ],
    };

    expect(newState).toStrictEqual(expectedNewState);

    // expect(newState).toEqual({ todoList: [expectedItem] });
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
