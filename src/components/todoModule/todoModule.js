import R_merge from 'ramda/src/merge';
import R_append from 'ramda/src/append';
import R_update from 'ramda/src/update';
import R_remove from 'ramda/src/remove';
import initialState from '../../store/initialState';

const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

export default (state = initialState.todoModule, action) => {
  switch(action.type) {
    case ADD_TODO: {
      return R_merge(state, { todoList: R_append(action.todo, state.todoList) });
    }
    case COMPLETE_TODO: {
      const newTodo = state.todoList[action.todoIdx];
      newTodo.isCompleted = true;
      return R_merge(state, { todoList: R_update(action.todoIdx, newTodo, state.todoList) });
    }
    case REMOVE_TODO: {
      return R_merge(state, { todoList: R_remove(action.todoIdx, 1, state.todoList) });
    }
    default:
      return state;
  }
};

export const addTodoAction = todo => ({
  type: ADD_TODO,
  todo
});

export const completeTodoAction = todoIdx => ({
  type: COMPLETE_TODO,
  todoIdx
});

export const removeTodoAction = todoIdx => ({
  type: REMOVE_TODO,
  todoIdx
});
