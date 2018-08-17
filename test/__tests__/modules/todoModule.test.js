import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import initialState from '../../../src/store/initialState';
import todoModule, { addTodoAction, completeTodoAction, removeTodoAction } from '../../../src/components/todoModule/todoModule';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState.todoModule);

describe('Todo module testing', () => {
  it('Should add new todoItem', () => {
    const state = todoModule(undefined, store.dispatch(addTodoAction({
      description: 'Todo to test',
      isCompleted: false
    })));
    expect(state.todoList.length).toBe(1);
    expect(state.todoList).toContainEqual({
      description: 'Todo to test',
      isCompleted: false
    });
  });

  it('Should complete a todo', () => {
    let state = todoModule(undefined, store.dispatch(addTodoAction({
      description: 'Todo to test',
      isCompleted: false
    })));
    state = todoModule(state, store.dispatch(completeTodoAction(0)));
    expect(state.todoList.length).toBe(1);
    expect(state.todoList).toContainEqual({
      description: 'Todo to test',
      isCompleted: true
    });
  });

  it('Should remove a todo', () => {
    let state = todoModule(undefined, store.dispatch(addTodoAction({
      description: 'Todo to test',
      isCompleted: false
    })));
    state = todoModule(state, store.dispatch(addTodoAction({
      description: 'Todo to test2',
      isCompleted: false
    })));
    state = todoModule(state, store.dispatch(addTodoAction({
      description: 'Todo to test3',
      isCompleted: false
    })));
    state = todoModule(state, store.dispatch(removeTodoAction(1)));
    expect(state.todoList.length).toBe(2);
    expect(state.todoList).toContainEqual({
      description: 'Todo to test',
      isCompleted: false
    });
  });
});
