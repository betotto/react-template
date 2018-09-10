import initialState from './store/initialState';
import R_merge from 'ramda/src/merge';

const BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL';
const END_AJAX_CALL = 'END_AJAX_CALL';

export default (state = initialState.appModule, action) => {
  switch(action.type) {
    case BEGIN_AJAX_CALL: {
      return R_merge(state, { currentAjaxCalls: state.currentAjaxCalls + 1 });
    }
    case END_AJAX_CALL: {
      return R_merge(state, { currentAjaxCalls: state.currentAjaxCalls - 1 });
    }
    default:
      return state;
  }
};

export const beginAjaxCallAction = () => ({ type: BEGIN_AJAX_CALL });

export const endAjaxCallAction = () => ({ type: END_AJAX_CALL });
