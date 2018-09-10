import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoContainer from './todo/TodoContainer';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TodoContainer />;
  }
}

AppContainer.propTypes = { };

const mapStateToProps = () => ({ });

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
