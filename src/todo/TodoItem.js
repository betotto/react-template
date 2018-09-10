import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { description, isCompleted, todoIdx, completeTodo, removeTodo } = props;
  let completedClass = '';
  let itemAction = <button onClick={() => completeTodo(todoIdx)}>{'Complete'}</button>;
  if(isCompleted) {
    itemAction = <button onClick={() => removeTodo(todoIdx)}>{'Delete'}</button>;
    completedClass = 'completed';
  }
  return (
    <li>
      <div className={completedClass}>
        {description}
      </div>
      {itemAction}
    </li>
  );
};

TodoItem.displayName = 'TodoItem';

TodoItem.propTypes = {
  isCompleted: PropTypes.bool,
  description: PropTypes.string,
  todoIdx: PropTypes.number,
  completeTodo: PropTypes.func,
  removeTodo: PropTypes.func
};

export default TodoItem;
