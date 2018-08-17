import initialState from '../store/initialState';

export default (state = initialState.todoModule, action) => {
  switch(action.type) {
    default:
      return state;
  }
};
