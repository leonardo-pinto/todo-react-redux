import todoReducer, {
  addTodo, deleteTodo, editTodo, completeTodo,
} from './todoReducer';

const testState = {
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

describe('todoReducer', () => {
  it('Should return default state if no action is received', () => {
    const newState = todoReducer(undefined, {});
    expect(newState).toEqual({ todoList: [] });
  });

  it('Should return new state if receiving action type addTodo and todo must have id 1', () => {
    const newState = todoReducer(undefined, {
      type: addTodo,
      payload: 'testTodo',
    });

    const expectedItem = {
      completed: false,
      id: 1,
      text: 'testTodo',
    };

    expect(newState).toEqual({ todoList: [expectedItem] });
  });

  it('Should create todo with id 4 in case there are two previous todos', () => {
    const newState = todoReducer(testState, {
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
  });

  it('Should delete todo if receiving action type deleteTodo', () => {
    const idToBeRemoved = 1;
    const newState = todoReducer(testState, {
      type: deleteTodo,
      payload: idToBeRemoved,
    });

    const expectedNewState = {
      todoList: [
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
    expect(newState).toEqual(expectedNewState);
  });

  it('Should edit todo if receiving action type editTodo', () => {
    const idToBeEdited = 2;

    const newState = todoReducer(testState, {
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

  it('Should mark checkbox as checked if receiving action type completeTodo', () => {
    const newState = todoReducer(testState, {
      type: completeTodo,
      payload: {
        id: 1,
        completed: true,
      },
    });

    const expectedNewState = {
      todoList: [
        {
          id: 1,
          completed: true,
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

    expect(newState).toEqual(expectedNewState);
  });
});
