import React from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from 'actions/todoList';

function TodoItem({ item: { title } }) {
  return (
    <a href="#" className="list-group-item list-group-item-action">
      {title}
    </a>
  );
}

class TodoList extends React.PureComponent {
  componentDidMount() {
    this.props.showTodos();
  }

  render() {
    return (
      <div>
        <div className="list-group">
          {this.props.items.map(item => <TodoItem item={item} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.todoList.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
